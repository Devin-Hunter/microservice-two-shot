# Wardrobify

Team:

* Person 1 - Which microservice?
* Noah Harshbarger - Hats microservice

## Design

## Shoes microservice

Explain your models and integration with the wardrobe
microservice, here.

## Hats microservice :cowboy_hat_face:


In the **Hats** microservice, various models serve as data representations during integration processes. The *Location Value Object (LocationVO)* model, designed for immutability, acts as the reference point. The **Hat** model establishes a one-to-many relationship with the *Location* through a foreign key.

The *poller* Python script interacts with these models, using the *LocationVO* model to create or update database records. It does so by polling the data from the **Wardrobe** app every sixty seconds, ensuring data consistency between microservice and app.  
