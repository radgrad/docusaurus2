---
title: Setup HTTPS
---

Although the RadGrad application is available over HTTP on port 8888, with a few simple steps, you can easily request SSL certificates for your domain (from Let's Encrypt) and have your application running over HTTPS instead.

As part of your RadGrad installation, we include the `nginx` and `certbot` services to handle the legwork of setting up HTTPS. More specifically, an Nginx web server on port 80 is automatically configured to forward HTTP traffic to an HTTPS web server on port 443, which subsequently reverse proxies traffic to the RadGrad application on port 8888.

As such, please make sure that your host machine has port 80 and 443 open to the outside world. It is also recommended that you setup a firewall on port 8888 once you have HTTPS up and running, otherwise the View application will still be accessible over HTTP on port 8888.

## Modify the nginx.env configuration file

To begin, you will need to modify some of the configuration variables in the `radgrad-docker/config/nginx/nginx.env` file on the production server. This configuration file should have already been copied over from the `sample-config` directory earlier during the setup process.

This file contains a few variables that you will need to modify. It looks like this:

```shell
NGINX_SERVER_NAME=example.org
LETSENCRYPT_EMAIL=user@example.org
LETSENCRYPT_STAGING_MODE=1
```

Modify the `NGINX_SERVER_NAME` variable with the domain name pointing to your host machine.

Then, modify the `LETSENCRYPT_EMAIL` variable with an email address that should be associated with the SSL certificate generated for the given domain name.

Leave the `LETSENCRYPT_STAGING_MODE` variable set to `1` for the time being. This will ensure that you do not hit any certificate request limit while testing your HTTPS configuration.

Your `nginx.env` file should now look something like this:

```shell
NGINX_SERVER_NAME=radgrad2.ics.hawaii.edu
LETSENCRYPT_EMAIL=johnson@hawaii.edu
LETSENCRYPT_STAGING_MODE=1
```

## Perform a test run

Before we begin, ensure that all RadGrad services are shut down by changing into the `radgrad-docker` directory and invoking `docker-compose down`.

Then, invoke the `init-letsencrypt.sh` script and follow the prompts. It should look something like this:

```shell
opquser@emilia:~/opq-docker$ ./init-letsencrypt.sh
Existing data found for emilia.ics.hawaii.edu. Continue and replace existing certificate? (y/N) y
### Creating dummy certificate for emilia.ics.hawaii.edu ...
WARNING: The NGINX_SERVER_NAME variable is not set. Defaulting to a blank string.
Creating network "opq-docker_default" with the default driver
Creating opq-docker_boxupdateserver_1 ... done
Creating opq-mongo                    ... done
Creating opq-docker_view_1            ... done
Creating opq-docker_nginx_1           ... done
Generating a RSA private key
........................+++++
............+++++
writing new private key to '/etc/letsencrypt/live/emilia.ics.hawaii.edu/privkey.pem'
-----

### Starting nginx ...
WARNING: The NGINX_SERVER_NAME variable is not set. Defaulting to a blank string.
Stopping opq-docker_view_1            ... done
Stopping opq-mongo                    ... done
Stopping opq-docker_boxupdateserver_1 ... done
Removing opq-docker_nginx_1           ... done
Removing opq-docker_view_1            ... done
Removing opq-mongo                    ... done
Removing opq-docker_boxupdateserver_1 ... done
Removing network opq-docker_default
Creating network "opq-docker_default" with the default driver
Creating opq-mongo                    ... done
Creating opq-docker_boxupdateserver_1 ... done
Creating opq-docker_view_1            ... done
Creating opq-docker_makai_1           ... done
Creating opq-docker_nginx_1           ... done
Creating opq-docker_mauka_1           ... done
Creating opq-docker_certbot_1         ... done
Creating opq-docker_health_1          ... done

### Deleting dummy certificate for emilia.ics.hawaii.edu ...
Starting opq-docker_boxupdateserver_1 ... done
Starting opq-mongo                    ... done
Starting opq-docker_view_1            ... done
Starting opq-docker_nginx_1           ... done

### Requesting Let's Encrypt certificate for emilia.ics.hawaii.edu ...
Starting opq-docker_boxupdateserver_1 ... done
Starting opq-mongo                    ... done
Starting opq-docker_view_1            ... done
Starting opq-docker_nginx_1           ... done
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator webroot, Installer None

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing to share your email address with the Electronic Frontier
Foundation, a founding partner of the Let's Encrypt project and the non-profit
organization that develops Certbot? We'd like to send you email about our work
encrypting the web, EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: Y
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for emilia.ics.hawaii.edu
Using the webroot path /var/www/certbot for all unmatched domains.
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/emilia.ics.hawaii.edu/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/emilia.ics.hawaii.edu/privkey.pem
   Your cert will expire on 2019-06-29. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"

### Reloading nginx ...
2019/03/31 21:58:34 [notice] 10#10: signal process started
```

Now, verify that the (fake) SSL certificate was properly generated by opening up your web browser and
visiting the RadGrad application at the domain name that you specified. Each web browser application should have a way to display the SSL certificates of the web site being visited. On Chrome, it should look similar to this:

![](https://openpowerquality.org/docs/assets/cloud/https-setup-1.png)


## Request real SSL certificate

Now that everything looks good, we can now go ahead and request a real SSL certificate!

First, shut down all RadGrad services by changing into the `radgrad-docker` directory and invoking `docker-compose down`.

Then, open the `opq-docker/config/nginx/nginx.env` file and set the `LETSENCRYPT_STAGING_MODE` variable to `0`. The file should now look something like this:

```shell
NGINX_SERVER_NAME=emilia.ics.hawaii.edu
LETSENCRYPT_EMAIL=admin@openpowerquality.org
LETSENCRYPT_STAGING_MODE=0
```

Finally, invoke the `init-letsencrypt.sh` script and follow the prompts. The output should be nearly identical to that of the test run that was performed earlier:

```shell
opquser@emilia:~/opq-docker$ ./init-letsencrypt.sh
Existing data found for emilia.ics.hawaii.edu. Continue and replace existing certificate? (y/N) y
### Creating dummy certificate for emilia.ics.hawaii.edu ...
WARNING: The NGINX_SERVER_NAME variable is not set. Defaulting to a blank string.
Creating network "opq-docker_default" with the default driver
Creating opq-docker_boxupdateserver_1 ... done
Creating opq-mongo                    ... done
Creating opq-docker_view_1            ... done
Creating opq-docker_nginx_1           ... done
Generating a RSA private key
.............................................+++++
............................+++++
writing new private key to '/etc/letsencrypt/live/emilia.ics.hawaii.edu/privkey.pem'
-----

### Starting nginx ...
WARNING: The NGINX_SERVER_NAME variable is not set. Defaulting to a blank string.
Stopping opq-docker_view_1            ... done
Stopping opq-mongo                    ... done
Stopping opq-docker_boxupdateserver_1 ... done
Removing opq-docker_nginx_1           ... done
Removing opq-docker_view_1            ... done
Removing opq-mongo                    ... done
Removing opq-docker_boxupdateserver_1 ... done
Removing network opq-docker_default
Creating network "opq-docker_default" with the default driver
Creating opq-docker_boxupdateserver_1 ... done
Creating opq-mongo                    ... done
Creating opq-docker_view_1            ... done
Creating opq-docker_makai_1           ... done
Creating opq-docker_nginx_1           ... done
Creating opq-docker_mauka_1           ... done
Creating opq-docker_certbot_1         ... done
Creating opq-docker_health_1          ... done

### Deleting dummy certificate for emilia.ics.hawaii.edu ...
Starting opq-docker_boxupdateserver_1 ... done
Starting opq-mongo                    ... done
Starting opq-docker_view_1            ... done
Starting opq-docker_nginx_1           ... done

### Requesting Let's Encrypt certificate for emilia.ics.hawaii.edu ...
Starting opq-docker_boxupdateserver_1 ... done
Starting opq-mongo                    ... done
Starting opq-docker_view_1            ... done
Starting opq-docker_nginx_1           ... done
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator webroot, Installer None
Obtaining a new certificate

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/emilia.ics.hawaii.edu/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/emilia.ics.hawaii.edu/privkey.pem
   Your cert will expire on 2019-06-29. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le


### Reloading nginx ...
2019/03/31 22:03:14 [notice] 10#10: signal process started
```

Verify that the SSL certificate was properly generated by opening up your web browser and visiting the RadGrad application at the domain name that you specified. On Chrome, it should look similar to this:

![](https://openpowerquality.org/docs/assets/cloud/https-setup-2.png)

You're done!

