# Fitness-App_Restful-Crud-API

### Created a CRUD API for storing users in a Fitness app with following fields
- Name
- email
- mobileNumber
- weight
- height
- bmi

### We have the following API endpoints: 

- POST /users  - creates a user ( receives name, email, mobileNumber, weight and height in req.body, and calculates the BMI of the user before saving the details to the database )
- GET /users  - gets all the users from database.
- GET /users/:id  - gets data for a particular user with Id
- PUT /users/:id  - updates a particular user ( receives name, email, mobileNumber, weight and height in req.body, and calculates the BMI of the user before saving the details to the database )
- DELETE /users/:id - deletes the user from the database.

> Note : Considering given height and weight of users is in meter and kilogram respectively.
