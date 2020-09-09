---
title: DevOps Evaluation
sidebar_label: Evaluation
---

The goals of the DevOps project are to: (1) explore how RadGrad can be hosted on different deployment platforms, and (2)  determine how to evaluate and improve the performance of RadGrad.

## Deployment Platform Evaluation

Over the course of the summer, we have identified eight potential hosting platforms and technologies for RadGrad: AWS, Digital Ocean, Google Cloud, Heroku, Microsoft Azure, Node Chef, Waves Hosting, and UH ITS.

Evaluating deployment platforms involves answering the following questions:

  1. Can we succeed in deploying RadGrad to that platform? Success, in this case, means that one developer has deployed RadGrad, provided documentation on how to do so, and a second developer has verified deployment by following (and potentially improving) the documentation.

  2. What are the costs associated with the platform for hosting?

  3. What kinds of performance and deployment monitoring tools are offered as part of the platform?

  4. What is the relative responsiveness of the hosting site? To determine this, use a performance tool such as [Apache JMeter](https://jmeter.apache.org/) to make (say) 1000 requests for the listing page of the deployed sample application (retrieve this page in order to require a database access), and determine average response time.  This does not provide any absolute performance information about RadGrad, but instead enables us to evaluate the relative performance of the different hosting alternatives.

  5. Are there any other issues associated with the deployment site that future developers should be aware of?



# Performance Evaluation and Improvement

To perform performance evaluation and improvement, we must deploy RadGrad with a production-sized database, generate a set of requests that assess its performance on a variety of pages and under a variety of circumstances, instrument the system, run the tests, and then analyze the results to determine how the code base must be changed in order to improve performance.

Some initial performance evaluation and improvement should be possible independent of the hosting platform, but after identifying and removing the initial set of bottlenecks, further improvements will probably depend upon the specific hosting platform chosen.
