---
title: Google Cloud
sidebar_label: Google Cloud
---

## Deployment Documentation

###### Note: This was done on a Windows 10 System using Windows Subsystem for Linux 2 (WSL 2)

##### Installation
Open up Windows Powershell as administrator and use `npm install meteor-google-cloud -g`.

##### Google Cloud CLI

Login in to your google account. On the cloud console, go to the cloud selector page, and create a new project. Ensure billing is enabled.

(Image to be added)

On your terminal (not Powershell), use `sudo apt-get install apt-transport-https ca-certificates gnupg` to install apt-transport-https. Use `echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list` to add the cloud SDK distribution.

Import the public key with `curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -`

Update the SDK with `sudo apt-get update`

Install the SDK with `sudo apt-get install google-cloud-sdk`

##### Deployment

Use `git clone https://github.com/ics-software-engineering/meteor-application-template.git` to clone the Meteor Application Template from Github. Change into the app directory.

Use `gcloud init` to create the deploy directory with the necessary files for deployment.

Use `gcloud app create` to start the app and pick the region closest to you.

Change into the deploy directory and edit the `settings.json` file. Change the project name to the project id of the project you created earlier on your cloud console. Edit the `app.yml` file and change the service to `default`.

(Image to be added)

Deploy using `meteor-google-cloud --settings deploy/settings.json --app deploy/app.yml --docker deploy/Dockerfile`

##### Potential Problems

During my personal attempt of deployment, it was lacking a few things. I used `meteor npm install --save @babel/runtime simpl-schema uniforms-bridge-simple-schema-2 moment lodash faker react react-dom react-redux connected-react-router react-router-dom react-router semantic-ui-react react-scroll-up-button react-slick slick-carousel react-markdown uniforms-semantic classnames uniforms sweetalert2 react-datepicker highcharts highcharts-react-official react-beautiful-dnd redux react-content-loader history` and `meteor npm install --save simpl-schema moment lodash faker` to obtain all the things I was missing. 

During the final stages of deployment, I ran into a MongoNetworkError and the APP_CONTAINER_CRASHED. According to the official [documentation](https://docs.meteor.com/api/collections.html#mongo_connection_options), this is a known bug that is currently being fixed. I tried the bypasses suggested, though neither has worked for me. Currently searching for a solution.

## Evaluation

Please provide information about problems that occurred. Costs of service. Performance. Quality of documentation. Anything else that would be of use in deciding whether or not to choose this service over others.

