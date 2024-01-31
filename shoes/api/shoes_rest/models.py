from django.db import models
from django.urls import reverse

class BinVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    bin_number = models.PositiveSmallIntegerField()
    closet_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.closet_name} - {self.bin_number}"

class Shoes(models.Model):
    """
    The shoes model represents a pair of shoes in the wardrobe.
    It will list the various attributes unique to each pair and
    will list the bin the pair is in inside the wardrobe.

    'The Shoe resource should track its manufacturer, its model name,
    its color, a URL for a picture, and the bin in the wardrobe where it exists'
    """

    model_name = models.CharField(max_length=200)
    manufacturer = models.CharField(max_length=200)
    color = models.CharField(max_length=100)

    bin = models.ForeignKey(
        BinVO,
        related_name="shoes",
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.model_name

    def get_api_url(self):
        return reverse("api_shoes_details", kwargs={"pk": self.pk})
        #i think this function gets the url of the page that lists
        #the details for each individual shoe. Dont remember why we needed it
        #referenced here? Both conference go and wardrobe have this function
