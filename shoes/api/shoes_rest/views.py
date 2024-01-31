from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

from common.json import ModelEncoder
from .models import Shoes, BinVO
# from .acls import get_photo

class BinVODetailEncoder(ModelEncoder):
    model = BinVO
    properties = [
        "bin_number",
        "closet_name",
        "import_href",
    ]

class ListOfShoesEncoder(ModelEncoder):
    model = Shoes
    properties = [
        "model_name",
        "id",
        # "picture_url",
        ]

class ShoesDetailEncoder(ModelEncoder):
    model = Shoes
    properties = [
        "model_name",
        "manufacturer",
        "color",
        "bin",
        # "picture_url",
    ]
    encoders = {
        "bin": BinVODetailEncoder(),
    }


@require_http_methods(["GET", "POST"])
def api_shoes_list(request, bin_vo_id=None):
    """
    Collection of RESTful API handler for Shoes objects in the wardrobe.

    GET:
    Returns a dictionary with a single key "shoes" which is a list of
    the properties of each pair of shoes.

    If a unique bin ID is not provided, it will list all shoe objects.

    If a bin ID is provided, it will only list shoes located in that bin.

    POST:
    Creates a new shoe and returns its details
    """

    if request.method == "GET":
        if bin_vo_id == None:
            shoes = Shoes.objects.all()
        else:
            shoes = Shoes.objects.filter(bin=bin_vo_id)
            #if this feature doesn't work, check if bin_vo_id is a valid parameter name
            #since the only place it is referenced is in this function and in api_urls

        return JsonResponse(
            shoes,
            encoder=ListOfShoesEncoder,
            safe=False
        )
    else:
        content = json.loads(request.body)

        #get the Bin and put it in the content dictionary
        #The code in the try section seems verbose? it worked well in fearless frontend,
        #but it's not in the wardrobe locations views.
        #However, wardrobe locations and conference locations don't reference any VOs,
        #but conference go attendees does. **Fixed it**
        try:
            bin_href = content["bin"]
            bin = BinVO.objects.get(import_href=bin_href)
            content["bin"] = bin
        except BinVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid bin id"},
                status=400
            )

        # photo = get_photo(content["model_name"])
        # content.update(photo)
        shoes = Shoes.objects.create(**content)
        return JsonResponse(
            {"shoes": shoes},
            encoder=ShoesDetailEncoder,
            safe=False,
        )

@require_http_methods(["GET", "PUT", "DELETE"])
def api_shoes_details(request, pk):
    """
    Single-object API for Shoes.

    GET:
    Returns a detailed view of a specific pair of shoes, depends on pk of shoe

    PUT:
    Updates the information for a specific pair of shoes

    DELETE:
    Removes a specific pair of shoes from the application
    """

    if request.method == "GET":
        try:
            shoes = Shoes.objects.get(id=pk)
            return JsonResponse(
                {"shoes": shoes},
                encoder=ShoesDetailEncoder,
                safe=False
            )
        except Shoes.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        count, _ = Shoes.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:  #request.method == "PUT"
        content = json.loads(request.body)
        try:
            if "bin" in content:
                bin = BinVO.objects.get(import_href=content["bin"])
                content["bin"] = bin

        except BinVO.DoesNotExist:
            response = JsonResponse({"message": "Bin does not exist"})
            response.status_code = 404
            return response

        # photo = get_photo(content["model_name"])
        # content.update(photo)
        Shoes.objects.filter(id=pk).update(**content)
        #since we're using react, should i reference props here like in wardrobe views?
        #props = []
        shoes = Shoes.objects.get(id=pk)
        return JsonResponse(
            shoes,
            encoder=ShoesDetailEncoder,
            safe=False,
        )
