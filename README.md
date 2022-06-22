# vehicle-management-system


This is an Vehicle Management System with authentication.

On the front-end there is a sign-in & sign-up page.

After sign-up the system will send a welcome email to the user along with a randomly generated password to login on the system later on.

On successful login, there is a simple dashboard showing the number of registered cars.

There is a CRUD for categories e.g. Bus, Sedan, SUV, Hatchback etc.

There is a CRUD for Cars where the user can select one of the categories from the dropdown & can have other fields like color, model, make, registration-no etc.

Used data-tables for sorting & pagination.

For the front-end I used following npm packages.

    "ag-grid-community": "^27.3.0",
    "ag-grid-react": "^27.3.0",
    "axios": "^0.27.2",
    "bootstrap": "^5.1.3",
    "dotenv": "^16.0.1",
    "react-bootstrap": "^2.4.0",
    
For the Backend I used follwing packages

    "@sendgrid/mail": "^7.7.0",
    "bcryptjs": "^2.4.3",
    "cors": "^2.8.5",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "generate-password": "^1.7.0",
    "jsonwebtoken": "^8.5.1",
    "mongoose": "^6.4.0",
    "nodemon": "^2.0.16"  
    
    
 For starting project please these steps
 Step 1
 git clone https://github.com/saqib-github/vehicle-management-system.git
 Step 2
 go to frontend and backend folder run command "npm install" both
 Step 3
 go to frontend run "npm start" got to backend run "npm start"
 
Now the project should have started
 
