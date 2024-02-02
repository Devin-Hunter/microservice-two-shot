# Wardrobify

Team:

* Devin Matherne: Shoes
* Noah Harshbarger - Hats microservice?

## Design

The shoes page was designed with React and Bootstrap. The navigation bar at the top of the page has a Shoe dropdown menu to redirect the user to either the page with the list of all shoes or a page that lets the user create a new shoe. The shoe list page has individual cards for each pair of shoes with an edit and delete navigation tab at the top of each card. At the moment, the edit form is not fully functional, but the delete tab is working properly.

## Shoes microservice

I created a shoe model to match the requirments in Learn and two view functions to manage GET, POST, PUT, and DELETE requests for shoes. I also created a bin value object model and a poller to pull from the bin information from the wardrobe microservice.

## Hats microservice :cowboy_hat_face:

The models written in the Hats microservice are used to represent data while integrated. The Location Value Object model was created (immutable) as reference. The Hat model was assigned the Location foreignkey, which creates a one-to-many relationship between the locations and hats.

In the **Hats** microservice, various models serve as data representations during integration processes. The *Location Value Object (LocationVO)* model, designed for immutability, acts as the reference point. The **Hat** model establishes a one-to-many relationship with the *Location* through a foreign key.

The *poller* Python script interacts with these models, using the *LocationVO* model to create or update database records. It does so by polling the data from the **Wardrobe** app every sixty seconds, ensuring data consistency between microservice and app.  
