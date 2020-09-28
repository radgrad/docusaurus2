---
title: Setup HTTPS
---

RadGrad needs to run on HTTPS. Here is a procedure to request SSL certificates for your domain (from Let's Encrypt) so that it can run over HTTPS.

In addition to Meteor and MongoDB services, the RadGrad Docker services include `nginx` and `certbot`. The Nginx web server on port 80 is configured to forward HTTP traffic to an HTTPS web server on port 443, which subsequently reverse proxies traffic to the RadGrad application on port 8888.

So, please make sure that your host machine has port 80 and 443 open to the outside world. It is also recommended that you setup a firewall on port 8888 once you have HTTPS up and running, otherwise the RadGrad application will still be accessible over HTTP on port 8888.

## Modify the nginx.env configuration file

To begin, you will need to modify some of the configuration variables in the `radgrad-docker/config/nginx/nginx.env` file on the production server. This configuration file should have already been copied over from the `sample-config` directory earlier during the setup process.

This file contains three variables that you will need to modify. It defaults to this:

```shell
export NGINX_SERVER_NAME=example.org
LETSENCRYPT_EMAIL=user@example.org
LETSENCRYPT_STAGING_MODE=1
```

Modify the `NGINX_SERVER_NAME` variable with the domain name pointing to your host machine.

Modify the `LETSENCRYPT_EMAIL` variable with an email address that should be associated with the SSL certificate generated for the given domain name.

Finally, leave the `LETSENCRYPT_STAGING_MODE` variable set to `1` for the time being. This will ensure that you do not hit any certificate request limit while testing your HTTPS configuration.

Your `nginx.env` file should now look something like this:

```shell
export NGINX_SERVER_NAME=radgrad2.ics.hawaii.edu
LETSENCRYPT_EMAIL=johnson@hawaii.edu
LETSENCRYPT_STAGING_MODE=1
```

## Perform a test run

Before we begin, ensure that all RadGrad services are shut down by changing into the `radgrad-docker` directory and invoking `docker-compose down`.

Then, invoke the `init-letsencrypt.sh` script and follow the prompts. It should look something like this:

```shell
radgrad@radgrad2:~/radgrad-docker$ ./init-letsencrypt.sh
#!/bin/bash -v

# Source the nginx.env file so we can use its variables here
. ./config/nginx/nginx.env
# Required for Nginx's server_name directive (in app.conf.template), as well as RadGrad's ROOT_URL env var.
# Also used by the init-letsencrypt.sh script for setting up SSL certs for https.
export NGINX_SERVER_NAME=radgrad2.ics.hawaii.edu

# Used by the init-letsencrypt.sh script for setting up SSL certs for https.
# It is recommended to set a valid email address when requesting a certificate from LetsEncrypt.
# Set LETSENCRYPT_STAGING_MODE to 1 while testing your setup to avoid hitting cert request limits. Set it back to 0
# when you are ready to request real certificates.
LETSENCRYPT_EMAIL=johnson@hawaii.edu
LETSENCRYPT_STAGING_MODE=1

# Configurable Variables
domains=("$NGINX_SERVER_NAME")
email="$LETSENCRYPT_EMAIL" # Adding a valid address is strongly recommended
staging="$LETSENCRYPT_STAGING_MODE" # Set to 1 if testing your setup to avoid hitting request limits

# Do not touch anything else below unless you really know what you're doing!
rsa_key_size=4096
data_path="./data/certbot"

if [ -d "$data_path" ]; then
  read -p "Existing data found for $domains. Continue and replace existing certificate? (y/N) " decision
  if [ "$decision" != "Y" ] && [ "$decision" != "y" ]; then
    exit
  fi

  # Re-create data path directory to ensure that it is owned by the current user
  echo "Deleting existing files in $data_path. Sudo is used in case the $data_path files are owned by root, which can occur if Docker Compose has already been previously spun-up prior to running this script."
  sudo rm -rf "$data_path"
fi
Existing data found for radgrad2.ics.hawaii.edu. Continue and replace existing certificate? (y/N) y
Deleting existing files in ./data/certbot. Sudo is used in case the ./data/certbot files are owned by root, which can occur if Docker Compose has already been previously spun-up prior to running this script.

# Create data path directory
mkdir -p "$data_path"

# If SELinux is enabled and enforced on the current system, label the directory with the 'container_file_t' policy type.
if [ $(sestatus | awk '/SELinux status:/ {print $3}') == "enabled" ] && [ $(sestatus | awk '/Current mode:/ {print $3}') == "enforcing" ]; then
  echo "SELinux is enabled! Labeling $data_path with the container_file_t policy type."
  chcon -R -t container_file_t "$data_path"
fi
./init-letsencrypt.sh: line 30: sestatus: command not found
./init-letsencrypt.sh: line 30: [: ==: unary operator expected

if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ] || [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
  echo "### Downloading recommended TLS parameters ..."
  mkdir -p "$data_path/conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "$data_path/conf/options-ssl-nginx.conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "$data_path/conf/ssl-dhparams.pem"
  echo
fi
### Downloading recommended TLS parameters ...


echo "### Creating dummy certificate for $domains ..."
### Creating dummy certificate for radgrad2.ics.hawaii.edu ...
path="/etc/letsencrypt/live/$domains"
mkdir -p "$data_path/conf/live/$domains"
docker-compose run --rm --entrypoint "\
  openssl req -x509 -nodes -newkey rsa:1024 -days 1\
    -keyout '$path/privkey.pem' \
    -out '$path/fullchain.pem' \
    -subj '/CN=localhost'" certbot
Starting radgrad-docker_nginx_1 ... done
Creating radgrad-docker_certbot_run ... done
Generating a RSA private key
.....+++++
......+++++
writing new private key to '/etc/letsencrypt/live/radgrad2.ics.hawaii.edu/privkey.pem'
-----
echo



echo "### Starting nginx ..."
### Starting nginx ...
#docker-compose up --force-recreate -d nginx
docker-compose down && . ./docker-compose-run.sh
Stopping radgrad-docker_certbot_1 ... done
Stopping radgrad-docker_radgrad_1 ... done
Stopping radgrad-mongo            ... done
Removing radgrad-docker_certbot_1 ... done
Removing radgrad-docker_nginx_1   ... done
Removing radgrad-docker_radgrad_1 ... done
Removing radgrad-mongo            ... done
Removing network radgrad-docker_default
#!/usr/bin/env bash

# Set additional environment variables for Docker-Compose that cannot be defined in the .env file.
# When 'docker-compose up' is invoked, Compose automatically looks for environment variables set in the shell and
# substitutes them into the docker-compose.yml configuration file.
# See: https://docs.docker.com/compose/compose-file/#variable-substitution

# Source and export NGINX_SERVER_NAME for Nginx and View services in docker-compose.yml. Passed on to View as ROOT_URL.
. ./config/nginx/nginx.env
# Required for Nginx's server_name directive (in app.conf.template), as well as RadGrad's ROOT_URL env var.
# Also used by the init-letsencrypt.sh script for setting up SSL certs for https.
export NGINX_SERVER_NAME=radgrad2.ics.hawaii.edu

# Used by the init-letsencrypt.sh script for setting up SSL certs for https.
# It is recommended to set a valid email address when requesting a certificate from LetsEncrypt.
# Set LETSENCRYPT_STAGING_MODE to 1 while testing your setup to avoid hitting cert request limits. Set it back to 0
# when you are ready to request real certificates.
LETSENCRYPT_EMAIL=johnson@hawaii.edu
LETSENCRYPT_STAGING_MODE=1
export NGINX_SERVER_NAME

# View Config Environment Var
export METEOR_SETTINGS=$(cat ./config/settings.production.json)

# Startup Docker-Compose. Note: Be sure that docker-compose.yml is same directory as this script.
docker-compose up -d --remove-orphans
Creating network "radgrad-docker_default" with the default driver
Creating radgrad-mongo ... done
Creating radgrad-docker_radgrad_1 ... done
Creating radgrad-docker_nginx_1   ... done
Creating radgrad-docker_certbot_1 ... done
echo


echo "### Deleting dummy certificate for $domains ..."
### Deleting dummy certificate for radgrad2.ics.hawaii.edu ...
docker-compose run --rm --entrypoint "\
  rm -Rf /etc/letsencrypt/live/$domains && \
  rm -Rf /etc/letsencrypt/archive/$domains && \
  rm -Rf /etc/letsencrypt/renewal/$domains.conf" certbot
Creating radgrad-docker_certbot_run ... done
echo



echo "### Requesting Let's Encrypt certificate for $domains ..."
### Requesting Let's Encrypt certificate for radgrad2.ics.hawaii.edu ...
#Join $domains to -d args
domain_args=""
for domain in "${domains[@]}"; do
  domain_args="$domain_args -d $domain"
done

# Select appropriate email arg
case "$email" in
  "") email_arg="--register-unsafely-without-email" ;;
  *) email_arg="--email $email" ;;
esac

# Enable staging mode if needed
if [ $staging != "0" ]; then staging_arg="--staging"; fi

docker-compose run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    $staging_arg \
    $email_arg \
    $domain_args \
    --rsa-key-size $rsa_key_size \
    --agree-tos \
    --force-renewal" certbot
Creating radgrad-docker_certbot_run ... done
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator webroot, Installer None

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing, once your first certificate is successfully issued, to
share your email address with the Electronic Frontier Foundation, a founding
partner of the Let's Encrypt project and the non-profit organization that
develops Certbot? We'd like to send you email about our work encrypting the web,
EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: n
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for radgrad2.ics.hawaii.edu
Using the webroot path /var/www/certbot for all unmatched domains.
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/radgrad2.ics.hawaii.edu/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/radgrad2.ics.hawaii.edu/privkey.pem
   Your cert will expire on 2020-12-27. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
echo


echo "### Reloading nginx ..."
### Reloading nginx ...
docker-compose exec nginx nginx -s reload
2020/09/28 20:46:31 [notice] 10#10: signal process started
radgrad@radgrad2:~/radgrad-docker$
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
radgrad@radgrad2:~/radgrad-docker$ ./init-letsencrypt.sh
#!/bin/bash -v

# Source the nginx.env file so we can use its variables here
. ./config/nginx/nginx.env
# Required for Nginx's server_name directive (in app.conf.template), as well as RadGrad's ROOT_URL env var.
# Also used by the init-letsencrypt.sh script for setting up SSL certs for https.
export NGINX_SERVER_NAME=radgrad2.ics.hawaii.edu

# Used by the init-letsencrypt.sh script for setting up SSL certs for https.
# It is recommended to set a valid email address when requesting a certificate from LetsEncrypt.
# Set LETSENCRYPT_STAGING_MODE to 1 while testing your setup to avoid hitting cert request limits. Set it back to 0
# when you are ready to request real certificates.
LETSENCRYPT_EMAIL=johnson@hawaii.edu
LETSENCRYPT_STAGING_MODE=0

# Configurable Variables
domains=("$NGINX_SERVER_NAME")
email="$LETSENCRYPT_EMAIL" # Adding a valid address is strongly recommended
staging="$LETSENCRYPT_STAGING_MODE" # Set to 1 if testing your setup to avoid hitting request limits

# Do not touch anything else below unless you really know what you're doing!
rsa_key_size=4096
data_path="./data/certbot"

if [ -d "$data_path" ]; then
  read -p "Existing data found for $domains. Continue and replace existing certificate? (y/N) " decision
  if [ "$decision" != "Y" ] && [ "$decision" != "y" ]; then
    exit
  fi

  # Re-create data path directory to ensure that it is owned by the current user
  echo "Deleting existing files in $data_path. Sudo is used in case the $data_path files are owned by root, which can occur if Docker Compose has already been previously spun-up prior to running this script."
  sudo rm -rf "$data_path"
fi
Existing data found for radgrad2.ics.hawaii.edu. Continue and replace existing certificate? (y/N) y
Deleting existing files in ./data/certbot. Sudo is used in case the ./data/certbot files are owned by root, which can occur if Docker Compose has already been previously spun-up prior to running this script.

# Create data path directory
mkdir -p "$data_path"

# If SELinux is enabled and enforced on the current system, label the directory with the 'container_file_t' policy type.
if [ $(sestatus | awk '/SELinux status:/ {print $3}') == "enabled" ] && [ $(sestatus | awk '/Current mode:/ {print $3}') == "enforcing" ]; then
  echo "SELinux is enabled! Labeling $data_path with the container_file_t policy type."
  chcon -R -t container_file_t "$data_path"
fi
./init-letsencrypt.sh: line 30: sestatus: command not found
./init-letsencrypt.sh: line 30: [: ==: unary operator expected

if [ ! -e "$data_path/conf/options-ssl-nginx.conf" ] || [ ! -e "$data_path/conf/ssl-dhparams.pem" ]; then
  echo "### Downloading recommended TLS parameters ..."
  mkdir -p "$data_path/conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot-nginx/certbot_nginx/_internal/tls_configs/options-ssl-nginx.conf > "$data_path/conf/options-ssl-nginx.conf"
  curl -s https://raw.githubusercontent.com/certbot/certbot/master/certbot/certbot/ssl-dhparams.pem > "$data_path/conf/ssl-dhparams.pem"
  echo
fi
### Downloading recommended TLS parameters ...


echo "### Creating dummy certificate for $domains ..."
### Creating dummy certificate for radgrad2.ics.hawaii.edu ...
path="/etc/letsencrypt/live/$domains"
mkdir -p "$data_path/conf/live/$domains"
docker-compose run --rm --entrypoint "\
  openssl req -x509 -nodes -newkey rsa:1024 -days 1\
    -keyout '$path/privkey.pem' \
    -out '$path/fullchain.pem' \
    -subj '/CN=localhost'" certbot
Creating radgrad-docker_certbot_run ... done
Generating a RSA private key
...............+++++
.........................................................+++++
writing new private key to '/etc/letsencrypt/live/radgrad2.ics.hawaii.edu/privkey.pem'
-----
echo



echo "### Starting nginx ..."
### Starting nginx ...
#docker-compose up --force-recreate -d nginx
docker-compose down && . ./docker-compose-run.sh
Stopping radgrad-docker_certbot_1 ... done
Stopping radgrad-docker_nginx_1   ... done
Stopping radgrad-docker_radgrad_1 ... done
Stopping radgrad-mongo            ... done
Removing radgrad-docker_certbot_1 ... done
Removing radgrad-docker_nginx_1   ... done
Removing radgrad-docker_radgrad_1 ... done
Removing radgrad-mongo            ... done
Removing network radgrad-docker_default
#!/usr/bin/env bash

# Set additional environment variables for Docker-Compose that cannot be defined in the .env file.
# When 'docker-compose up' is invoked, Compose automatically looks for environment variables set in the shell and
# substitutes them into the docker-compose.yml configuration file.
# See: https://docs.docker.com/compose/compose-file/#variable-substitution

# Source and export NGINX_SERVER_NAME for Nginx and View services in docker-compose.yml. Passed on to View as ROOT_URL.
. ./config/nginx/nginx.env
# Required for Nginx's server_name directive (in app.conf.template), as well as RadGrad's ROOT_URL env var.
# Also used by the init-letsencrypt.sh script for setting up SSL certs for https.
export NGINX_SERVER_NAME=radgrad2.ics.hawaii.edu

# Used by the init-letsencrypt.sh script for setting up SSL certs for https.
# It is recommended to set a valid email address when requesting a certificate from LetsEncrypt.
# Set LETSENCRYPT_STAGING_MODE to 1 while testing your setup to avoid hitting cert request limits. Set it back to 0
# when you are ready to request real certificates.
LETSENCRYPT_EMAIL=johnson@hawaii.edu
LETSENCRYPT_STAGING_MODE=0
export NGINX_SERVER_NAME

# View Config Environment Var
export METEOR_SETTINGS=$(cat ./config/settings.production.json)

# Startup Docker-Compose. Note: Be sure that docker-compose.yml is same directory as this script.
docker-compose up -d --remove-orphans
Creating network "radgrad-docker_default" with the default driver
Creating radgrad-mongo ... done
Creating radgrad-docker_radgrad_1 ... done
Creating radgrad-docker_nginx_1   ... done
Creating radgrad-docker_certbot_1 ... done
echo


echo "### Deleting dummy certificate for $domains ..."
### Deleting dummy certificate for radgrad2.ics.hawaii.edu ...
docker-compose run --rm --entrypoint "\
  rm -Rf /etc/letsencrypt/live/$domains && \
  rm -Rf /etc/letsencrypt/archive/$domains && \
  rm -Rf /etc/letsencrypt/renewal/$domains.conf" certbot
Creating radgrad-docker_certbot_run ... done
echo



echo "### Requesting Let's Encrypt certificate for $domains ..."
### Requesting Let's Encrypt certificate for radgrad2.ics.hawaii.edu ...
#Join $domains to -d args
domain_args=""
for domain in "${domains[@]}"; do
  domain_args="$domain_args -d $domain"
done

# Select appropriate email arg
case "$email" in
  "") email_arg="--register-unsafely-without-email" ;;
  *) email_arg="--email $email" ;;
esac

# Enable staging mode if needed
if [ $staging != "0" ]; then staging_arg="--staging"; fi

docker-compose run --rm --entrypoint "\
  certbot certonly --webroot -w /var/www/certbot \
    $staging_arg \
    $email_arg \
    $domain_args \
    --rsa-key-size $rsa_key_size \
    --agree-tos \
    --force-renewal" certbot
Creating radgrad-docker_certbot_run ... done
Saving debug log to /var/log/letsencrypt/letsencrypt.log
Plugins selected: Authenticator webroot, Installer None

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
Would you be willing, once your first certificate is successfully issued, to
share your email address with the Electronic Frontier Foundation, a founding
partner of the Let's Encrypt project and the non-profit organization that
develops Certbot? We'd like to send you email about our work encrypting the web,
EFF news, campaigns, and ways to support digital freedom.
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
(Y)es/(N)o: n
Obtaining a new certificate
Performing the following challenges:
http-01 challenge for radgrad2.ics.hawaii.edu
Using the webroot path /var/www/certbot for all unmatched domains.
Waiting for verification...
Cleaning up challenges

IMPORTANT NOTES:
 - Congratulations! Your certificate and chain have been saved at:
   /etc/letsencrypt/live/radgrad2.ics.hawaii.edu/fullchain.pem
   Your key file has been saved at:
   /etc/letsencrypt/live/radgrad2.ics.hawaii.edu/privkey.pem
   Your cert will expire on 2020-12-27. To obtain a new or tweaked
   version of this certificate in the future, simply run certbot
   again. To non-interactively renew *all* of your certificates, run
   "certbot renew"
 - Your account credentials have been saved in your Certbot
   configuration directory at /etc/letsencrypt. You should make a
   secure backup of this folder now. This configuration directory will
   also contain certificates and private keys obtained by Certbot so
   making regular backups of this folder is ideal.
 - If you like Certbot, please consider supporting our work by:

   Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
   Donating to EFF:                    https://eff.org/donate-le

echo


echo "### Reloading nginx ..."
### Reloading nginx ...
docker-compose exec nginx nginx -s reload
2020/09/28 20:51:46 [notice] 10#10: signal process started
```

Verify that the SSL certificate was properly generated by opening up your web browser and visiting the RadGrad application at the domain name that you specified. On Chrome, it should look similar to this:

![](https://openpowerquality.org/docs/assets/cloud/https-setup-2.png)

## Debugging

### Check service status

Check to make sure all required services are running:

```shell
$radgrad@radgrad2:~/radgrad-docker$ docker ps
CONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS              PORTS                                      NAMES
536005ec471f        certbot/certbot         "/bin/sh -c 'trap ex…"   27 seconds ago      Up 25 seconds       80/tcp, 443/tcp                            radgrad-docker_certbot_1
89376ec0e6a9        nginx:1.15-alpine       "/bin/sh -c 'while :…"   28 seconds ago      Up 26 seconds       0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp   radgrad-docker_nginx_1
7bb923963c49        radgrad/radgrad:2.0.0   "docker-entrypoint.s…"   29 seconds ago      Up 27 seconds       80/tcp, 0.0.0.0:8888->8888/tcp             radgrad-docker_radgrad_1
1ffaad0fa3b5        mongo:4.0.5             "docker-entrypoint.s…"   30 seconds ago      Up 28 seconds       127.0.0.1:27017->27017/tcp                 radgrad-mongo
radgrad@radgrad2:~/radgrad-docker$
```

### Check Docker logs

Sometimes they reveal problems. For example:

```shell
radgrad@radgrad2:~/radgrad-docker$ docker logs radgrad-docker_nginx_1
2020/09/28 20:39:16 [emerg] 1#1: host not found in upstream "boxupdateserver:8151" in /etc/nginx/conf.d/app.conf:6
radgrad@radgrad2:~/radgrad-docker$
```




