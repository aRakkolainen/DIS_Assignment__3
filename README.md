## Project name 
Simple Yarn Shop Application

## Description
This repository includes the source code for assignment 3 in the course Data-Intensive Systems and this will eventually include a short video where I demonstrate the app.
This assignment is about a simple website for searching yarn and other knitting related products online and the products are fetched from three imaginery databases located in Finland, UK and Italy. It mimics online shopping platforms only in data, the format itself is simple to just show data items in a table format. 

## How to run the project 
1. Setting up the database:  

Create Postgresql server in Pg Admin 4 and create three databases: FinlandDB, ItalyDB and UnitedKingdomDB.  

Then click each database and restore the corresponding db backup file which is in path routes/db/db_backups. (Note: PostgreSQL version has to be version 17 in order to restore these files successfully)  

Note: You need to add login/group roles called testerShopper (password: x) for each db and change that user to be the owner of each database. Additionally, you might need to change the port in each database JavaScript file if your db server is running in other port than 5433. (This is because this is just a practice assignment and simple prototype, so database connections are hard coded for now)  

Starting the app:
Open the SimpleYarnShopApp folder in terminal (through VSCode) and run following commands: 

cd SimpleYarnShopApp 

npm install (this command installs the needed dependencies) 

npm start
Go to address localhost:3001 and the app should be running there

## Demonstration video
Link to demovideo: https://lut-my.sharepoint.com/:v:/g/personal/aino_rakkolainen_student_lut_fi/ESRsbb9R9c5Nv9FFioCZAJEBu18AN2n_hXk2iwRZ3BUYvA?nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJPbmVEcml2ZUZvckJ1c2luZXNzIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXciLCJyZWZlcnJhbFZpZXciOiJNeUZpbGVzTGlua0NvcHkifX0&e=ZWsErK 

## Learning goals with this project
- Practice how to implement a platform that uses multiple databases in its SQL queries.
- Revise my knowledge about JavaScript and Postgresql and practise using pg admin for partitioning

## Project status
  The current version meets the requirements of the given assignment but it could be made more realistic e-shopping platform and developed further at some point. 
