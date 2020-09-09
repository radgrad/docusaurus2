---
title: Google Cloud
sidebar_label: Google Cloud
---

## Deployment Documentation

# Deploying a meteor application to the Google Cloud 

Sign up for google cloud. 
Follow [meteor-google-cloud](https://github.com/EducationLink/meteor-google-cloud) documentation to deploy


I followed the meteor-google-cloud docs but they did not work for a windows machine. I looked at other guides and found one from 2017 [here](https://forums.meteor.com/t/deploy-meteor-to-google-app-engine-2017/36171). At first I was weary of using an older guide but I read through it anyway. I noticed that it used a lot of similar code so I tried to follow the directions of the older (2017) guide while using the resourced of the new (2019) open source project meteor-google-cloud. With a few modifications to some files everything worked!


Download the meteor-template-react. Verify everything is running
Run `npm install meteor-google-cloud -g` to install meteor-google-cloud

Following the SDK install instructions, first create a new project [in the google dashboard](https://console.cloud.google.com/projectselector2/home/dashboard)
![](/img/devopsimages/GoogleCloudDeploy/CreateProject.png)

Download the SDK following this [link](https://cloud.google.com/sdk/docs/downloads-interactive).
After installing, follow the instructions on screen. They will have you log into google and select your project.


# Setting up your app for deployment.

Insert [these](https://github.com/arslan-r/meteor-google-cloud-windows) files into your app directory.

![](/img/devopsimages/GoogleCloudDeploy/AppDirectoryFiles.png)


Edit the following:

```
env_variables:
  ROOT_URL: https://yourAppName.appspot.com
  MONGO_URL:
```

You can obtain a MONGO_URL with MongoDB Atlas following [these](https://radgrad.github.io/docs/devops/deployment/mongo-url/) directions, or use a google provided database.


You can also chose which zone you want your app deployed in by editing
```
zones:
```


Thats pretty much it.


# Deploying

To deploy, run these in PowerShell:

```
meteor build ../ --directory --architecture os.linux.x86_64 --server-only
cp app.yaml ../bundle/
cp Dockerfile ../bundle/
cd ../bundle
gcloud app deploy --verbosity=info -q
```




# Output
```
PS G:\GitFolder\meteor-application-template-react-3\bundle> gcloud app deploy --verbosity=info -q
INFO: Refreshing access_token
INFO: Reading [<googlecloudsdk.api_lib.storage.storage_util.ObjectReference object at 0x000001B85EA21688>]
Services to deploy:

descriptor:      [G:\GitFolder\meteor-application-template-react-3\bundle\app.yaml]
source:          [G:\GitFolder\meteor-application-template-react-3\bundle]
target project:  [meteor-template-deploy]
target service:  [my-service-name]
target version:  [20200726t232102]
target url:      [https://my-service-name-dot-meteor-template-deploy.wl.r.appspot.com]


Beginning deployment of service [my-service-name]...
INFO: Using Dockerfile found in G:\GitFolder\meteor-application-template-react-3\bundle
Building and pushing image for service [my-service-name]
INFO: Uploading [C:\Users\Arsla\AppData\Local\Temp\tmptzghr51w\src.tgz] to [staging.meteor-template-deploy.appspot.com/us.gcr.io/meteor-template-deploy/appengine/my-service-name.20200726t232102:latest]
Started cloud build [43321cc5-423c-4784-8f4e-c720736aca14].
To see logs in the Cloud Console: https://console.cloud.google.com/cloud-build/builds/43321cc5-423c-4784-8f4e-c720736aca14?project=312167436583
----------------------------------------------------------- REMOTE BUILD OUTPUT ------------------------------------------------------------
starting build "43321cc5-423c-4784-8f4e-c720736aca14"

FETCHSOURCE
Fetching storage object: gs://staging.meteor-template-deploy.appspot.com/us.gcr.io/meteor-template-deploy/appengine/my-service-name.20200726t232102:latest#1595830904184311
Copying gs://staging.meteor-template-deploy.appspot.com/us.gcr.io/meteor-template-deploy/appengine/my-service-name.20200726t232102:latest#1595830904184311...
- [1 files][ 26.9 MiB/ 26.9 MiB]
Operation completed over 1 objects/26.9 MiB.
BUILD
Already have image (with digest): gcr.io/cloud-builders/docker

                   ***** NOTICE *****

Alternative official `docker` images, including multiple versions across
multiple platforms, are maintained by the Docker Team. For details, please
visit https://hub.docker.com/_/docker.

                ***** END OF NOTICE *****
Sending build context to Docker daemon  147.1MB
Step 1/8 : FROM gcr.io/google_appengine/nodejs
latest: Pulling from google_appengine/nodejs
Digest: sha256:361fff782ea98545dee3909398bb1646f7972110af96436e93f0c66550cae911
Status: Downloaded newer image for gcr.io/google_appengine/nodejs:latest
 ---> 34da1d97a5b6
Step 2/8 : RUN install_node v12.18.1
 ---> Running in 26273cbfddb7
Removing intermediate container 26273cbfddb7
 ---> efa25052b592
Step 3/8 : RUN npm install npm@latest -g
 ---> Running in d86fa657fca8
/nodejs/bin/npm -> /nodejs/lib/node_modules/npm/bin/npm-cli.js
/nodejs/bin/npx -> /nodejs/lib/node_modules/npm/bin/npx-cli.js
+ npm@6.14.7
added 16 packages from 2 contributors, removed 17 packages and updated 19 packages in 18.843s
Removing intermediate container d86fa657fca8
 ---> f93a921293dc
Step 4/8 : RUN node -v
 ---> Running in 3653ecceb35d
v12.18.1
Removing intermediate container 3653ecceb35d
 ---> dd83bbb9d8db
Step 5/8 : RUN npm -v
 ---> Running in d223188737b5
6.14.7
Removing intermediate container d223188737b5
 ---> dc8f889de5c0
Step 6/8 : COPY . /app/
 ---> 2975ae15daa0
Step 7/8 : RUN (cd programs/server && npm install --unsafe-perm)
 ---> Running in bb24f6438aa2
←[91mnpm←[0m←[91m ←[0m←[91mWARN←[0m←[91m ←[0m←[91mdeprecated←[0m←[91m request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
←[0m
> fibers@4.0.3 install /app/programs/server/node_modules/fibers
> node build.js || nodejs build.js

`linux-x64-72-glibc` exists; testing
Binary is fine; exiting

> meteor-dev-bundle@ install /app/programs/server
> node npm-rebuild.js

> core-js@3.2.1 postinstall /app/programs/server/npm/node_modules/meteor/ecmascript-runtime-client/node_modules/core-js
> node scripts/postinstall || echo "ignore"

←[96mThank you for using core-js (←[94m https://github.com/zloirock/core-js ←[96m) for polyfilling JavaScript standard library!←[0m

←[96mThe project needs your help! Please consider supporting of core-js on Open Collective or Patreon: ←[0m
←[96m>←[94m https://opencollective.com/core-js ←[0m
←[96m>←[94m https://www.patreon.com/zloirock ←[0m

←[96mAlso, the author of core-js (←[94m https://github.com/zloirock ←[96m) is looking for a good job -)←[0m

core-js@3.2.1 /app/programs/server/npm/node_modules/meteor/ecmascript-runtime-client/node_modules/core-js

> core-js@3.2.1 postinstall /app/programs/server/npm/node_modules/meteor/ecmascript-runtime-server/node_modules/core-js
> node scripts/postinstall || echo "ignore"

←[96mThank you for using core-js (←[94m https://github.com/zloirock/core-js ←[96m) for polyfilling JavaScript standard library!←[0m

←[96mThe project needs your help! Please consider supporting of core-js on Open Collective or Patreon: ←[0m
←[96m>←[94m https://opencollective.com/core-js ←[0m
←[96m>←[94m https://www.patreon.com/zloirock ←[0m

←[96mAlso, the author of core-js (←[94m https://github.com/zloirock ←[96m) is looking for a good job -)←[0m

core-js@3.2.1 /app/programs/server/npm/node_modules/meteor/ecmascript-runtime-server/node_modules/core-js
@babel/code-frame@7.8.3 /app/programs/server/npm/node_modules/meteor/babel-compiler/node_modules/@babel/code-frame
@babel/highlight@7.9.0 /app/programs/server/npm/node_modules/meteor/babel-compiler/node_modules/@babel/highlight
@babel/helper-validator-identifier@7.9.0 /app/programs/server/npm/node_modules/meteor/babel-compiler/node_modules/@babel/helper-validator-identifier
chalk@2.4.2 /app/programs/server/npm/node_modules/meteor/babel-compiler/node_modules/chalk
ansi-styles@3.2.1 /app/programs/server/npm/node_modules/meteor/babel-compiler/node_modules/ansi-styles
...
...
...
sweetalert@2.1.2 /app/programs/server/npm/node_modules/sweetalert
tslib@1.10.0 /app/programs/server/npm/node_modules/tslib
uniforms@2.6.5 /app/programs/server/npm/node_modules/uniforms
uniforms-bridge-simple-schema-2@2.6.5 /app/programs/server/npm/node_modules/uniforms-bridge-simple-schema-2
uniforms-semantic@2.6.5 /app/programs/server/npm/node_modules/uniforms-semantic
{
  "npm": "6.14.7",
  "ares": "1.16.0",
  "brotli": "1.0.7",
  "cldr": "37.0",
  "http_parser": "2.9.3",
  "icu": "67.1",
  "llhttp": "2.0.4",
  "modules": "72",
  "napi": "6",
  "nghttp2": "1.41.0",
  "node": "12.18.1",
  "openssl": "1.1.1g",
  "tz": "2019c",
  "unicode": "13.0",
  "uv": "1.38.0",
  "v8": "7.8.279.23-node.38",
  "zlib": "1.2.11"
}
added 134 packages from 116 contributors and audited 147 packages in 9.391s

2 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Removing intermediate container bb24f6438aa2
 ---> f2f628dd43d7
Step 8/8 : CMD node main.js
 ---> Running in 765ff49b3259
Removing intermediate container 765ff49b3259
 ---> db8e02d2bbe0
Successfully built db8e02d2bbe0
Successfully tagged us.gcr.io/meteor-template-deploy/appengine/my-service-name.20200726t232102:latest
PUSH
Pushing us.gcr.io/meteor-template-deploy/appengine/my-service-name.20200726t232102:latest
The push refers to repository [us.gcr.io/meteor-template-deploy/appengine/my-service-name.20200726t232102]
46f37560cd31: Preparing
e16f54a0fde1: Preparing
e7ad4d2f32a1: Preparing
f7544333f2d8: Preparing
c2e0d2e36ab9: Preparing
389b2d253da5: Preparing
7828d5e93514: Preparing
2a74ee5a65dd: Preparing
56cebec68a1b: Preparing
74e2773d48ad: Preparing
84ff92691f90: Preparing
89e14614ab6b: Preparing
15942b628b0d: Preparing
389b2d253da5: Waiting
7828d5e93514: Waiting
2a74ee5a65dd: Waiting
56cebec68a1b: Waiting
74e2773d48ad: Waiting
84ff92691f90: Waiting
89e14614ab6b: Waiting
15942b628b0d: Waiting
c2e0d2e36ab9: Layer already exists
f7544333f2d8: Layer already exists
7828d5e93514: Layer already exists
389b2d253da5: Layer already exists
2a74ee5a65dd: Layer already exists
56cebec68a1b: Layer already exists
84ff92691f90: Layer already exists
74e2773d48ad: Layer already exists
89e14614ab6b: Layer already exists
15942b628b0d: Layer already exists
46f37560cd31: Pushed
e7ad4d2f32a1: Pushed
e16f54a0fde1: Pushed
latest: digest: sha256:459eb237b1521e3774531acadfd4b9f566c168751f7a98834701145e7fec409a size: 3052
DONE
--------------------------------------------------------------------------------------------------------------------------------------------

Updating service [my-service-name] (this may take several minutes)...done.
Setting traffic split for service [my-service-name]...done.
Deployed service [my-service-name] to [https://my-service-name-dot-meteor-template-deploy.wl.r.appspot.com]

You can stream logs from the command line by running:
  $ gcloud app logs tail -s my-service-name

To view your application in the web browser run:
  $ gcloud app browse -s my-service-name
INFO: Display format: "none"
```







###### Note: This was done on a Windows 10 System using Windows Subsystem for Linux 2 (WSL 2)

#### Installation
Open up Windows Powershell as administrator and use `npm install meteor-google-cloud -g`.

#### Google Cloud CLI

Login in to your google account. On the cloud console, go to the cloud selector page, and create a new project. Ensure billing is enabled.

(Image to be added)

On your terminal (not Powershell), use `sudo apt-get install apt-transport-https ca-certificates gnupg` to install apt-transport-https. Use `echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list` to add the cloud SDK distribution.

Import the public key with `curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key --keyring /usr/share/keyrings/cloud.google.gpg add -`

Update the SDK with `sudo apt-get update`

Install the SDK with `sudo apt-get install google-cloud-sdk`

#### Deployment

Use `git clone https://github.com/ics-software-engineering/meteor-application-template.git` to clone the Meteor Application Template from Github. Change into the app directory.

Use `gcloud init` to create the deploy directory with the necessary files for deployment.

Use `gcloud app create` to start the app and pick the region closest to you.

Change into the deploy directory and edit the `settings.json` file. Change the project name to the project id of the project you created earlier on your cloud console. Edit the `app.yml` file and change the service to `default`.

(Image to be added)

Deploy using `meteor-google-cloud --settings deploy/settings.json --app deploy/app.yml --docker deploy/Dockerfile`

#### Potential Problems

During my personal attempt of deployment, it was lacking a few things. I used `meteor npm install --save @babel/runtime simpl-schema uniforms-bridge-simple-schema-2 moment lodash faker react react-dom react-redux connected-react-router react-router-dom react-router semantic-ui-react react-scroll-up-button react-slick slick-carousel react-markdown uniforms-semantic classnames uniforms sweetalert2 react-datepicker highcharts highcharts-react-official react-beautiful-dnd redux react-content-loader history` and `meteor npm install --save simpl-schema moment lodash faker` to obtain all the things I was missing. 

During the final stages of deployment, I ran into a MongoNetworkError and the APP_CONTAINER_CRASHED. According to the official [documentation](https://docs.meteor.com/api/collections.html#mongo_connection_options), this is a known bug that is currently being fixed. I tried the bypasses suggested, though neither has worked for me. Currently searching for a solution.

## Evaluation

Please provide information about problems that occurred. Costs of service. Performance. Quality of documentation. Anything else that would be of use in deciding whether or not to choose this service over others.

