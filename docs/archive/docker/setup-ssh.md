---
title: Setup SSH access
sidebar_label: Setup SSH (Docker)
---

In order to deploy RadGrad to a production server such as radgrad2.ics.hawaii.edu, you will generally need to configure ssh access to the radgrad account. Here's how to do it.

## Obtain user credentials

RadGrad docker services are deployed using the radgrad account.  You need to obtain the password for radgrad on radgrad2.ics.hawaii.edu in order to do this deployment. Contact Philip for details.

## ssh without password prompt

In order to use the scripts to transfer files, you need to set up SSH login without a password.  You can follow [these instructions](http://www.linuxproblem.org/art_9.html).

To check to make sure you have set up your SSH keys correctly, bring up a new console and run the following command:

```
$ ssh radgrad@radgrad2.ics.hawaii.edu
```

This should log you into radgrad2 without prompting you for a password, with output like the following:

```
Welcome to Ubuntu 18.04.5 LTS (GNU/Linux 4.15.0-118-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

radgrad@radgrad2:~$
```

## ssh port forwarding

In certain situations, you may want to set up ssh port forwarding to create a port on your local machine that acts as if it was the MongoDB port on emilia.  To do this, open a new shell, and execute the following command:

```
$ $ ssh -C -N -L 27017:localhost:27017 radgrad@radgrad2.ics.hawaii.edu
```

The shell will appear to "hang", but that's OK: it just means port forwarding has started. Type control-C to terminate port forwarding.
