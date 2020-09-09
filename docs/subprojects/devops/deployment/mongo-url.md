---
title: Obtaining MONGO_URL with MongoDB Atlas
sidebar_label: Obtaining a MONGO_URL 
---

# Setting up a MongoDB instance.

[MongoDB Atlas](https://www.mongodb.com/cloud/atlas) will be used for this. 
 * Sign up for a free account or log in. 
 * Select 'Create a new cluster'
 * Select the free cluster option. Your first one will be free
 * You will be prompted to select your hosting provider and a few other settings. The default ones are fine for this. Click "Create Cluster" at the bottom of the page. It will take a few minutes to deploy
 * Your home page will display your new cluster. Click Connect
 * Select "Connect with app*
 * Copy the connection string and save it somewhere. This is the MONGO_URL. I personally have a notepad I paste it into. We will modify this string in the following way:
   * replace the `<password>` with your password
   * give your database a name in the `<dbname>` section

![](/img/devopsimages/MongoAtlas/Mongo1.png)
![](/img/devopsimages/MongoAtlas/Mongo2.png)
![](/img/devopsimages/MongoAtlas/Mongo3.png)
![](/img/devopsimages/MongoAtlas/Mongo4.png)
![](/img/devopsimages/MongoAtlas/Mongo5.png)
![](/img/devopsimages/MongoAtlas/Mongo6.png)

