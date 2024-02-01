# Wardrobify

Team:

* Person 1 - Which microservice?
* Noah Harshbarger - Hats microservice?

## Design

## Shoes microservice

Explain your models and integration with the wardrobe
microservice, here.

## Hats microservice

The models written in the Hats microservice are used to represent data while integrated. The Location Value Object model was created (immutable) as reference. The Hat model was assigned the Location foreignkey, which creates a one-to-many relationship between the locations and hats. 

Inside the poller Python file, the code relates to the models in that it uses the LocationVO model to create/update records in the database (based on data retrieved from the Wardrobe App by polling the data every sixty seconds).
