# Wardrobify

Team:

* Person 1 - Devin Matherne: Shoes
* Noah Harshbarger - Hats microservice?

## Design

## Shoes microservice

Created models to match the requirments in learn, used view functions to manage GET, POST, DELETE, and PUT requests of shoes. Created a bin value object and a poller to pull from the wardrobe
microservice.

## Hats microservice :cowboy_hat_face:

The models written in the Hats microservice are used to represent data while integrated. The Location Value Object model was created (immutable) as reference. The Hat model was assigned the Location foreignkey, which creates a one-to-many relationship between the locations and hats.

In the **Hats** microservice, various models serve as data representations during integration processes. The *Location Value Object (LocationVO)* model, designed for immutability, acts as the reference point. The **Hat** model establishes a one-to-many relationship with the *Location* through a foreign key.

The *poller* Python script interacts with these models, using the *LocationVO* model to create or update database records. It does so by polling the data from the **Wardrobe** app every sixty seconds, ensuring data consistency between microservice and app.  
