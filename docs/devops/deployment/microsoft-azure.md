---
title: Microsoft Azure
sidebar_label: Microsoft Azure
---

# Deployment Documentation

:::note

Hi Arslan,

Here are some things you'll need to do in order to make this revised documentation work:

1. Create the meteor-example-deploy-azure repository.
2. Add the file config/settings.production.sample.json.
3. Install meteor-azure into meteor-example-deploy-azure using `npm install meteor-azure --save-dev`. Then, when people install the test system, they get the meteor-azure package installed automatically. That gets rid of a whole section of the documentation!
4. Update the scripts section of meteor-example-deploy-azure/app/package.json to include a script "deploy" that invokes "meteor-azure --settings config/settings.production.json --architecture 64".
:::

To best document how to deploy a Meteor application to Microsoft Azure, we provide the [meteor-example-deploy-azure](https://github.com/meteor-example-deploy-azure) github repository.  This repository is a copy of [meteor-application-template-react](https://github.com/ics-software-engineering/meteor-application-template-react), modified with one additional file (config/settings.production.sample.json) to support deployment to Azure. It will also install the meteor-azure library.

## Install meteor-example-deploy-azure

First, make sure that you can install and run meteor-example-deploy-azure on your local computer.  Clone the repository, and follow the instructions in the README to install third party libraries (`meteor npm install`) and run the system (`meteor npm run start`).

You should be able to see your application running at http://localhost:3000 when this step is completed.

# Create a Microsoft Azure account

First, [create a free Microsoft Azure account](https://azure.microsoft.com/en-us/free/students/).

Sign up. Get the free trial/student trial. Go to the portal if you are not there already. Button should be in the top right corner. We will start a new App Service.

## Create a new App Service

Go to the Side bar > App Services, then click Add.

Here's the page that results with appropriately filled fields:

![](/img/devopsimages/AddApp.png)

Here are some field settings:

  * Name: Provide a name.

  * Resource Group: You will want to create a new resource group. This will hold a group of resources together (e.g. a database, or app services) for easier management. Note that you can reuse this group in the future.

  * Publish: Code

  * Runtime Stack: Node 12 LTS

  * Region: West US

:::note
Need a screen shot to document the following page.
:::

For Windows Plan, Azure created a new one for me and I did not touch this.

  * Sku and size: **IMPORTANT.** Select the one you need. Default will be a production plan with a going rate of \$75/month, but if you have the free trial it doesn't matter.  There is a free developer version, but I have found it inadequate in terms of space for the meteor template. If you wish to select it, click "Change size > Dev/Test tab > Select "F1".

Click "Review + Create" at the bottom of the page Verify your info. Click "Create". You should be rerouted to a page that says "Deployment is underway", and eventually will complete.

Go to Sidebar > Overview > Your URL will be in the right column in the form of yourappname.azurewebsites.net

## Configure a MongoDB database

[Azure Cosmo DB](https://azure.microsoft.com/en-us/services/cosmos-db/#overview) provides a version of MongoDB compatible with Meteor.

First, set up a Azure Cosmos DB account [here](https://docs.microsoft.com/en-us/azure/cosmos-db/create-cosmosdb-resources-portal).

:::note
Need a screen shot to illustrate the following settings.
:::

To set up Cosmos DB:

  * Click "+ Add" button
  * Select your subscription and resource group
    * Select the resource group you used to create your app
  * Create an account name
  * Select the API.
    * From the drop down menu, select Azure CosmoDB for MongoDP API
  * Notebooks(Preview): Off
  * Location: US West
  * Apply Free Tier Discount: Apply if you are eligible for it. Should be eligible if it is your first time making an account
  * Account type: Non-Production.
  * Version: 3.6
  * Geo-Redundancy: Disable
  * Multi-region Writes: Disable
  * Click "Review and Create" Review your information and create. Azure will take ~10 minutes to deploy.

## Configure the application

Here, we will get out App ready for deployment on the Azure portal. Through App Service, navigate to:

- Sidebar > Configuration > Application Settings (should take you here by default).

  - Clear off any existing entries in the application settings. This can easily be done by selecting "Advanced edit" and clearing everything between these [ ] top level brackets.

  - Click on the General Settings tab. Ensure “Web sockets” and “ARR affinity” are enabled.

:::note
Need a screen shot
:::

Next, go to:

* Sidebar > Deployment Center > FTP and click the "Dashboard" button at the bottom > User Credentials

  - Make a username in the form of yourappname\yourusername, along with a password (there are some password characters that are [not accepted](https://stackoverflow.com/questions/62601319/microsoft-azure-cannot-satisfy-password-requirements-when-making-ftp-user-cred).)


## Configure settings.production.json

The config directory contains a file called settings.production.sample.json, which is a template you can use to create the settings.production.json file. The template looks like this:

```shell script
{
  "meteor-azure": {
    "siteName": "app name",
    "resourceGroup": "resource group",
    "subscriptionId": "subscription ID",
    "tenantId": "tenant ID",
    "deploymentCreds": {
      "username": "username",
      "password": "password"
    },
    "envVariables": {
      "ROOT_URL": "https://<app name>.azurewebsites.net",
      "MONGO_URL": "MongoDB URL"
    }
  }
  // ... keys for Meteor.settings
}
```

Make a copy of this file (or rename it) to settings.production.json. Then edit the fields as follows:

Sidebar > Overview. Record your app name, resource group and subscription ID

![](/img/devopsimages/Overview.png)

You can find your TenantID by searching for "Tenant properties" in the search bar at the top of the page

Enter your FTP user credentials.

Edit your ROOT_URL with your app name.

MONGO_URL:

  * Click the Microsoft Azure button next to the hamburger in the top left to go to the Homepage
  * Select your Azure Cosmo DB account
  * Sidebar > Quickstart > Select Node.js tab
    * Scroll down to "Using the Node.js 3.0 driver, connect your existing MongoDB app"
    * Our MONGO_URL is the PRIMARY CONNECTION STRING.


## Deploy the meteor app to Azure

Navigate to the project directory on your local machine and run:

```shell script
meteor npm run deploy

info:    Targetting 64-bit Node architecture
info:    Validating settings file (G:\GitFolder\azure-deploy\config\settings.development.json)
info:    Validating Kudu connection (G:\GitFolder\azure-deploy\config\settings.development.json)
info:    meteortestdeploy: Authenticating with interactive login...
To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code FM3DXB253 to authenticate.
info:    meteortestdeploy: Updating Azure application settings
info:    Compiling application bundle

WARNING: The output directory is under your source tree.
         Your generated files may get interpreted as source code!
         Consider building into a different directory instead
         meteor build ../output

app/node_modules/semantic-ui-css/semantic.css: warn: There are some @import rules in the middle of a file. This might be a bug, as imports are only valid at the beginning of a file.
Browserslist: caniuse-lite is outdated. Please run next command `npm update`

Unable to resolve some modules:

  "@babel/runtime/helpers/createSuper" in
/G/GitFolder/azure-deploy/app/imports/ui/layouts/App.jsx
(web.browser.legacy)

If you notice problems related to these missing modules, consider running:

  meteor npm install --save @babel/runtime

warn:    Using default web config
info:    meteortestdeploy: Deploying bundle tarball
info:    meteortestdeploy: Running server initialisation
info:    meteortestdeploy: Polling server status...
info:    meteortestdeploy: Finished successfully
```

Your project should now be live at https://yourappname.azurewebsites.net

## Troubleshooting

### Debug mode

If you are having trouble, debug mode might be insightful. Turn it on with.

```shell script
meteor-azure -debug
```

### Kudu

It is easy to troubleshoot with kudu. You can access the app's server anytime by adding ".scm" into the url.

```shell script
https://meteortestdeploy.scm.azurewebsites.net
```
