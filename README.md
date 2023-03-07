# IV1201-Design-of-Global-Applications
This is the basic architecture for a recruiting system developed at KTH in the course IV1201 Design of Global Applications taken spring 2023.
## Prerequisite
  node version 18.13.0 
  
## Setting up the database
The file iv1201_database.sql found in the base directory contains a sql script that migrates the data from the old database to a new MySql database. Simply open it in any database management tool and run the script to generate the database.
## Setting up and starting the server for local development
Navigate into `/root/server` and run `npm install` followed by `npm start`.

To connect to the database locally follow the instructions in `./root/server/template.env`.

## Setting up and starting the client for local development
Navigate into `/root/client` and run `npm install` followed by `npm start`.

## If you run into trouble with sequelize-auto
In the server `sequelize-auto` is used as described in `./root/server/app/models/index.js`. It might be that `sequelize-auto`
sudo npm install -g sequelize-auto installs globally. Needed to automatically generate files in the server

sudo npm install -g mysql2    installs globally. Is needed to use sequelize-auto

Need to create route and controller file manually. Need to add to server.js
