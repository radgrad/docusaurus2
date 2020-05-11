---
title: Organization of radgrad.org
sidebar_label: radgrad.org
---

There are two primary functions of the radgrad.org domain:

  1. Serve the radgrad.org website.
  2. Support the use of the donotreply@mailgun.radgrad.org email address for newsletters.

The tech stack for accomplishing these two tasks is currently somewhat complicated.  The goal of this page is to document all the various pieces.


### github.com

We need a place to hold the source code for the radgrad.org website.  The [github.com docusaurus repository](https://github.com/radgrad/docusaurus) does this for us.

You must be a member of the radgrad github organization with commit privileges to edit the documentation.

### netlify.com

We could use GitHub to build and publish the radgrad website as radgrad.github.io/docusaurus. But, this does not allow us to use a custom domain (i.e. radgrad.org) and get https encryption at the same time.  So, we use Netlify.

The [netlify.com radgrad account](https://app.netlify.com/sites/radgrad/) performs multiple functions:

  * Builds and deploys the radgrad.org site whenever commits are made to the master branch of the github docusaurus repo.
  * Provides https via Let's Encrypt.
  * Netlify DNS servers are used to manage the radgrad.org domain and provide MX records for email. See the [netlify radgrad DNS settings page](https://app.netlify.com/account/dns/radgrad.org)

You must have login to netlify using the philipmjohnson account. See Philip for details if you need access.

### domains.google.com

We need a domain name service to define the radgrad.org domain.  We use Google Domains for this purpose. See [radgrad.org domain name management](https://domains.google.com/m/registrar/radgrad.org).

Because we use Netlify to build and publish radgrad.org with https, we have to override the default hostname management provided by Google Domains. First, the default Google DNS servers are disabled; instead, we follow Netlify instructions to tell Google Domains that the Netlify DNS servers will be used. In addition, we set the @ and www resource records according to Netlify instructions.

You must login to Google Domains using the radgradhosting@gmail.com account. See Philip for details if you need access.

### mailgun.com

We need a way to send emails to our users from the RadGrad application.  We use [MailGun](https://mailgun.com) to send emails.

Currently, we appear to have the DKIM and SPF stuff set up for the "mailgun.radgrad.org" domain. So, emails should be sent with a "From" and "Sender" of that domain in order to prevent a mismatch.

Although we don't configure a way to receive emails, it appears that we can send emails with a from field of something like "donotreply@mailgun.radgrad.org" and things might work fine.

If you need to login to the mailgun account, please see Philip for access.









