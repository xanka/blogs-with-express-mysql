# Tech stacks
- Nodejs
- ExpressJS
- MySQL DB

# Features
Create - Edit - View- Listing Blog

# In-Process
- Login, Register account
# Runing
<code> npm run startDev </code>

# To make this source run please follow steps below:

- open terminal run threes command to init data
  
<code>
node ./Schema/Database.js # create database <br>
node ./Schema/Articles.js # create Articles table <br>
node ./Schema/Users.js # create account table <br>
node ./sample_data/articles.js # insert simple data
</code>