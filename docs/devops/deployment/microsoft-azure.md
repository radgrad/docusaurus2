---
title: Microsoft Azure
sidebar_label: Microsoft Azure
---

# Deployment Documentation

Download a fresh meteor template , make sure everything is running locally and off we go.

```shell script
PS G:\GitFolder\azure-deploy\app> meteor npm install

> core-js@3.6.4 postinstall G:\GitFolder\azure-deploy\app\node_modules\core-js
> node -e "try{require('./postinstall')}catch(e){}"

added 416 packages from 333 contributors and audited 416 packages in 59.489s

21 packages are looking for funding
  run `npm fund` for details

found 2 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
```

```shell script
PS G:\GitFolder\azure-deploy\app> meteor npm run start

> meteor-application-template-react@ start G:\GitFolder\azure-deploy\app
> meteor --no-release-check --settings ../config/settings.development.json

[[[[[ ~\G\GitFolder\azure-deploy\app ]]]]]

=> Started proxy.

Unable to resolve some modules:

  "@babel/runtime/helpers/createSuper" in /G/GitFolder/azure-deploy/app/imports/ui/layouts/App.jsx (web.browser.legacy)

If you notice problems related to these missing modules, consider running:

  meteor npm install --save @babel/runtime

=> Started MongoDB.
W20200622-15:09:45.710(-7)? (STDERR) Note: you are using a pure-JavaScript implementation of bcrypt.
W20200622-15:09:46.344(-7)? (STDERR) While this implementation will work correctly, it is known to be
W20200622-15:09:46.345(-7)? (STDERR) approximately three times slower than the native implementation.
W20200622-15:09:46.352(-7)? (STDERR) In order to use the native implementation instead, run
W20200622-15:09:46.353(-7)? (STDERR)
W20200622-15:09:46.354(-7)? (STDERR)   meteor npm install --save bcrypt
W20200622-15:09:46.355(-7)? (STDERR)
W20200622-15:09:46.355(-7)? (STDERR) in the root directory of your application.
I20200622-15:09:48.176(-7)? Creating the default user(s)
I20200622-15:09:48.180(-7)?   Creating user admin@foo.com.
I20200622-15:09:48.458(-7)?   Creating user john@foo.com.
I20200622-15:09:48.692(-7)? Creating default data.
I20200622-15:09:48.696(-7)?   Adding: Basket (john@foo.com)
I20200622-15:09:48.711(-7)?   Adding: Bicycle (john@foo.com)
I20200622-15:09:48.717(-7)?   Adding: Banana (admin@foo.com)
I20200622-15:09:48.721(-7)?   Adding: Boogie Board (admin@foo.com)
=> Started your app.

=> App running at: http://localhost:3000/
   Type Control-C twice to stop.
```

Everything looks good. While the app is running, it's a good idea to open up another PowerShell window and cd into the app's directory.

Run

```shell script
meteor mongo --url
```

Take note of this MONGO_URL. You will need this later.
This is the output I obtained

```shell script
mongodb://127.0.0.1:3001/meteor
```

# NEXT: DOWNLOAD METEOR-AZURE

Lets open up meteor-azure docs.

[For more info/docs](https://meteor-azure.readthedocs.io/en/latest/)

[Prerequisites](https://meteor-azure.readthedocs.io/en/latest/installation.html)

aaaand [the tutorial](https://meteor-azure.readthedocs.io/en/latest/getting-started.html)

## Prerequisites

Node >=4 is necessary to run the CLI
Meteor >=1.4 is necessary to build your application

Check node version with

```shell script
node -v
```

Check Meteor version with

```shell script
cat .meteor/release
```

OR

```shell script
meteor --version # this will automatically update it to latest version
```

If everything checks out, install meteor-azure. This is a global installation. Local installation is also possible and found in the docs

```shell script
npm install -g meteor-azure
```

# NEXT: MICROSOFT AZURE

First, [lets make our account](https://azure.microsoft.com/en-us/free/students/)

Sign up. Get the free trial/student trial. Go to the portal if you are not there already. Button should be in the top right corner. We will start a new App Service.

Side bar > App Services
Click Add



#6-aws
![](/img/devopsimages/AddApp.png)

Create a resource group. This will hold a group of resources together (e.g. a database, or app services) for easier management. You can reuse this group in the future

- Give your App a name

- Publish: Code

- Runtime Stack: Node 12 LTS

- Region: West US

- Windows Plan: Azure created a new one for me and I did not touch this.

- Sku and size: //IMPORTANT. Select the one you need. Default will be a production plan with a going rate of \$75/month, but if you have the free trial it doesnt matter.

There is a free developer version, but I have found it inadequate in terms of space for the meteor template. If you wish to select it, click "Change size > Dev/Test tab > Select "F1".

Click "Review + Create" at the bottom of the page
Verify your info.
Click "Create". You should be rerouted to a page that says "Deployment is underway", and eventually will complete.

Go to Sidebar > Overview > Your URL will be in the right column in the form of yourappname.azurewebsites.net

# NEXT: METEOR-AZURE DEPLOYMENT

Navigate to

- Sidebar > Configuration > Application Settings (should take you here by default)

  - Clear off any existing entries in the application settings. This can easily be done by selecting "Advanced edit" and clearing everything between these [ ] top level brackets.

  - Click on the General Settings tab. Ensure “Web sockets” and “ARR affinity” are enabled.

* Sidebar > Deployment Center > FTP and click the "Dashboard" button at the bottom > User Credentials

  - Make a username in the form of yourappname\yourusername, along with a password

  - **Although the password requires you to input some characters, most characters are NOT accepted.** Make sure you do not have any of these, or Azure isnt going to like it.

```shell script
_ (underscore)
#
^
(  )
{  }
[  ]
_ -
+ =
: ;
" '
< >
, .
/
| \
` ~
```

Add the following code to settings.development.json file in app/config directory

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

- Sidebar > Overview
  - Record your app name, resource group and subscription ID

![](/img/devopsimages/Overview.png)

- You can find your TenantID by searching for "Tenant properties" in the search bar at the top of the page

- Enter your FTP user credentials.

- Edit your ROOT_URL with your app name.
- We obtained out MONGO_URL when we ran our machine locally at the start.

```shell script
mongodb://127.0.0.1:3001/meteor
```

# NEXT: Lets deploy!

Navigate to the project directory on your local machine and run:

```shell script
meteor-azure --settings path-to-settings-development.json
```

My personal deployment

```shell script
PS G:\GitFolder\azure-deploy\app> meteor-azure --settings G:\GitFolder\azure-deploy\config\settings.development.json
```

Your project should now be live at https://yourappname.azurewebsites.net

This is my log after running command. This log has debug mode turned on. It is not necessary to turn it on.

```shell script
info:    Targetting 64-bit Node architecture
info:    Validating settings file (settings.json)
info:    Validating Kudu connection (settings.json)
info:    meteortestdeploy: Authenticating with interactive login...
To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code FMBV4HBY4 to authenticate.
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

# Deployed, but still have a problem

After deploying, I am getting an ERROR 500, with the following log. Will be making a StackOverflow question about this.

```shell script
Sat Jun 27 2020 02:32:21 GMT+0000 (Greenwich Mean Time): Application has thrown an uncaught exception and is terminated:
MongoNetworkError: failed to connect to server [127.0.0.1:3001] on first connect [Error: connect EACCES 127.0.0.1:3001
    at TCPConnectWrap.afterConnect [as oncomplete] (net.js:1137:16) {
  name: 'MongoNetworkError',
  [Symbol(mongoErrorContextSymbol)]: {}
}]
    at Pool.<anonymous> (D:\home\site\wwwroot\programs\server\npm\node_modules\meteor\npm-mongo\node_modules\mongodb\lib\core\topologies\server.js:438:11)
    at Pool.emit (events.js:311:20)
    at Pool.EventEmitter.emit (domain.js:482:12)
    at D:\home\site\wwwroot\programs\server\npm\node_modules\meteor\npm-mongo\node_modules\mongodb\lib\core\connection\pool.js:561:14
    at D:\home\site\wwwroot\programs\server\npm\node_modules\meteor\npm-mongo\node_modules\mongodb\lib\core\connection\pool.js:994:11
    at D:\home\site\wwwroot\programs\server\npm\node_modules\meteor\npm-mongo\node_modules\mongodb\lib\core\connection\connect.js:31:7
    at callback (D:\home\site\wwwroot\programs\server\npm\node_modules\meteor\npm-mongo\node_modules\mongodb\lib\core\connection\connect.js:264:5)
    at Socket.<anonymous> (D:\home\site\wwwroot\programs\server\npm\node_modules\meteor\npm-mongo\node_modules\mongodb\lib\core\connection\connect.js:294:7)
    at Object.onceWrapper (events.js:418:26)
    at Socket.emit (events.js:311:20)
    at Socket.EventEmitter.emit (domain.js:482:12)
    at emitErrorNT (internal/streams/destroy.js:92:8)
    at emitErrorAndCloseNT (internal/streams/destroy.js:60:3)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
```

# TROUBLESHOOTING. Problems I encountered and how I solved them.

If you are having trouble, debug mode might be insightful. Turn it on with.

```shell script
meteor-azure -debug
```

#### settings.json file is not being read

```shell script
PS G:\GitFolder\azure-deploy\app> meteor-azure --settings G:\GitFolder\azure-deploy\settings.json
info:    Targetting 32-bit Node architecture
info:    Validating settings file (G:\GitFolder\azure-deploy\settings.json)
error:   Could not read settings file at 'G:\GitFolder\azure-deploy\settings.json'
```

Your settings.json file might not be in the correct format. Try check if there is a proper about of brackets. Single quotations are not supported I believe. It is possible that your file contains hidden chars (like UTF byte order mark) possibly because of copy / paste.

#### invalid architecture

```shell script
PS G:\GitFolder\azure-deploy\app> meteor-azure --settings settings.json
info:    Targetting 32-bit Node architecture
info:    Validating settings file (settings.json)
info:    Validating Kudu connection (settings.json)
info:    meteortestdeploy: Authenticating with interactive login...
To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code FUPJ9NC98 to authenticate.
info:    meteortestdeploy: Updating Azure application settings
info:    Compiling application bundle
Invalid architecture: os.windows.x86_32
The following are valid Meteor architectures:
  os.osx.x86_64
  os.linux.x86_64
  os.windows.x86_64
error:   exec:
```

If you get this error, change the meteor architecture by running

```shell script
meteor-azure --architecture 64
```

## Evaluation

This is VERY beginner friendly, much more so than AWS. It was not hard to get around at all. One thing to note is that the Azure portal was recently redesigned, so a lot of documentation on open source programs may be slightly inaccurate in terms of where to find everything, but its still doable.

It is also easier to troubleshoot, with kudu.
You can access the apps server anytime by adding ".scm" into the url.

```shell script
https://meteortestdeploy.scm.azurewebsites.net
```

Pricing varies. There are pay as you go plans, along with set "menus".

![](/img/devopsimages/Pricing.png)
![](/img/devopsimages/Pricing2.png)
![](/img/devopsimages/Pricing4.png)


