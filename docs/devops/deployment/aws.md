---
title: AWS
sidebar_label: AWS
---

As stated on their website “AWS Elastic Beanstalk is an easy-to-use service for deploying and scaling web applications and services developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker on familiar servers such as Apache, Nginx, Passenger, and IIS.”
This allows one to simply upload their code and Elastic Beanstalk will handle the deployment and scaling as needed. AWS allows you full control over your application with access to their monitoring tools. One other benefit is AWS Beanstalk allows one to handle some spikes in traffic with its Auto Scaling option while minimizing costs. While AWS does by default handle everything related to infrastructure, they do allow the user to retain full control and management of it. 

   I was not able to use Meteor Up and its plug in Mup-AWS-Beanstalk to successfully upload the RadGrad2 Project, but the AWS Beanstalk site does say that all that’s needed is a Git repository or an IDE, such as Eclipse or Visual Studio to upload the application. They also provide tool and tutorials to help one get started with it. 

The only charges are for the AWS resources needed to run and store your application. The MUP AWS Beanstalk plug in lists the charges as follows

AWS Elastic Beanstalk is free, but you do pay for the services it uses, including:

- EC2 Instances. $8.50/month ($0.012 / hour). 
  - While the Beanstalk environment is updating, or a new version is being deployed, 25% additional servers will be used. I assume a 25% increase in price but not certain.
  
- Application Load Balancer. Cost Varies depending on region, new and active connections, processed bytes, and rules set. Minimum cost is ~$16/month.  [Link includes a calculator to estimate cost.](https://aws.amazon.com/elasticloadbalancing/pricing/)

- Simple Storage Services (AWS S3). AWS Free Usage Tier allows for free use of S3. Limitations apply. 
- Graceful Shutdown. Shuts down instances under certain conditions. If installed, costs less than $3/month. 

Overall, hosting on AWS is a minimum of **$24.50 month** using Mup AWS Beanstalk. 



## Deployment Documentation
#### This is straight from the [mup-aws-beanstalk docs](https://github.com/zodern/mup-aws-beanstalk/blob/master/docs/getting-started.md), with some personal comments thrown in

## Install

You can install `mup` and `mup-aws-beanstalk` by running

```bash
npm i -g mup mup-aws-beanstalk
```

The AWS Beanstalk plugin requires Node 4 or newer and Meteor Up 1.3.5 or newer.
You can check your Node version with 
```bash
node -v
```

## Step 1: Initialize your project

In the terminal, run

```
cd path/to/app
mkdir .deploy && cd .deploy
mup init
```

This will create a .deploy folder in your app, and `mup init` will add a Meteor settings file and mup config in it.

## Step 2: Customize your Mup Config. 

You can replace the mup config in `.deploy/mup.js` with this:

```js
module.exports = {
    app: {
        // Tells mup that the AWS Beanstalk plugin will manage the app
        type: 'aws-beanstalk',
        name: 'myApp',
        path: '../',
        env: {
            ROOT_URL: 'http://app.com',
            MONGO_URL: 'mongodb://user:pass@domain.com'
        },
        auth: {
            id: '12345',
            secret: '6789'
        },
        minInstances: 1
    },
    plugins: ['mup-aws-beanstalk']
};
```

You will want to modify:
1) The app name. It must be at least 4 characters
2) `app.env.ROOT_URL`. 
3) `app.env.MONGO_URL` You will need to get a database from mLab, Compose, or another DBaaS provider

The next step will provide the values for the `app.auth` object.


## This is my personal file. 
```js
module.exports = {
    app: {
        // Tells mup that the AWS Beanstalk plugin will manage the app
        type: 'aws-beanstalk',
        name: 'radgrad2',
        path: 'C:\Users\Arsla\OneDrive\Desktop\Greg\radgrad2\app\.deploy',
        env: {
            ROOT_URL: 'http://localhost:3200/', 
            MONGO_URL: 'mongodb://localhost:27017/radgrad2' //not sure about this, but localhost:27017 is the default local host for MongoDB
        },
        auth: {
            id: '12345', // AWS will provide this for you in the next step.
            secret: '6789' // AWS will provide this for you in the next step
        },
        minInstances: 1
    },
    plugins: ['mup-aws-beanstalk']
};
```




## Step 3: Create AWS user

You will need to [create an Amazon account](https://portal.aws.amazon.com/billing/signup#/start) if you do not have one.

Next, create an IAM user at [https://console.aws.amazon.com/iam/home?region=us-east-1#/users](https://console.aws.amazon.com/iam/home?region=us-east-1#/users)

The access type should be `Programmatic access`.
You can select `Add user to group` and create a new group. The group should have the following permissions:

- `AWSElasticBeanstalkFullAccess`
- `IAMFullAccess` This is used to create the roles and Instance Profiles needed by Elastic Beanstalk. After the first deploy, you can replace it with `IAMReadOnlyAccess`
- `AWSCertificateManagerFullAccess` Used to create and manage SSL certificates for the app

In your mup config, set `app.auth.id` to the Access Key ID, and `app.auth.secret` to the Secret access key AWS gives you after creating the user.
 
## Step 4: Deploy

Simply run:

```
mup deploy
```

It will setup and deploy your app.


## Evaluation

This is where I got an error I haven’t been able to resolve. It was troublesome googling error messages specifically related to this plug in. 
```bash
Unable to load plugin mup-aws-beanstalk
ReferenceError: regeneratorRuntime is not defined
```

I have tried running 
npm i -g mup mup-aws-beanstalk
again but no luck. Also checked to make sure that everything is updated. 
Full console log is down below. 


```bash
PS C:\Users\Arsla\OneDrive\Desktop\Greg\radgrad2\app\.deploy> mup deploy
Unable to load plugin mup-aws-beanstalk
ReferenceError: regeneratorRuntime is not defined
    at C:\Users\Arsla\AppData\Roaming\npm\node_modules\mup-aws-beanstalk\lib\command-handlers.js:11:46
    at Object.<anonymous> (C:\Users\Arsla\AppData\Roaming\npm\node_modules\mup-aws-beanstalk\lib\command-handlers.js:220:2)
    at Module._compile (internal/modules/cjs/loader.js:1158:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)
    at Module.load (internal/modules/cjs/loader.js:1002:32)
    at Function.Module._load (internal/modules/cjs/loader.js:901:14)
    at Module.require (internal/modules/cjs/loader.js:1044:19)
    at require (internal/modules/cjs/helpers.js:77:18)
    at Object.<anonymous> (C:\Users\Arsla\AppData\Roaming\npm\node_modules\mup-aws-beanstalk\lib\commands.js:8:24)
    at Module._compile (internal/modules/cjs/loader.js:1158:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1178:10)
    at Module.load (internal/modules/cjs/loader.js:1002:32)
    at Function.Module._load (internal/modules/cjs/loader.js:901:14)
    at Module.require (internal/modules/cjs/loader.js:1044:19)
    at require (internal/modules/cjs/helpers.js:77:18)
    at Object.<anonymous> (C:\Users\Arsla\AppData\Roaming\npm\node_modules\mup-aws-beanstalk\lib\index.js:9:18)
PS C:\Users\Arsla\OneDrive\Desktop\Greg\radgrad2\app\.deploy>
```

