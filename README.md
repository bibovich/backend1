# Registration and Login System with Node.js and PostgreSQL

This project involves creating a user registration and login system using Node.js as the server-side framework and PostgreSQL for database management. You can complete this assignment individually or in groups of up to 3 students.
## Objective
Design and implement a back-end system that allows users to register and log in.
## Requirements
* Setup and Installation:
  * To install Node.js and PostgreSQL on your machine you can use npm to initialize your project and install necessary packages:
      ```npm init -y```
      ```npm install express pg bcrypt body-parser express-session```
  * Install PgAdmin to create database from [here](https://www.pgadmin.org/download/).
  * Clone this repository to your local machine.
## Connect Database:
* In the pgAdmin interface, expand the "Servers" node in the left sidebar.
* Right-click on the PostgreSQL server you want to use.
* Choose "Connect" and enter your password if prompted.
### Create a Database:
* In the connected server node, expand the "Databases" node.
* Right-click on "Databases" and choose "Create > Database..."
* In the "Create Database" dialog, provide a name for your database in the "Name" field. Let's use "yourdbname" as an example.
* Optionally, you can specify other settings such as owner, tablespace, and encoding. For now, the default settings are usually fine.
* Click the "Save" button to create the database.
### Verify Database Creation:
* After creating the database, you should see it listed under the "Databases" node in the left sidebar of pgAdmin

## Run the application
Run `node app.js` to run the project. [Visit](http://localhost:3000/register) to register and  [visit](http://localhost:3000/login) to log in.
