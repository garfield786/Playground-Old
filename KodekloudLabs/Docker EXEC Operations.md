# Docker EXEC Operartions

- Follow these steps to install and configure apache inside docker container
&nbsp;

- SSH to the app server and elevate to root `sudo -s`
- List docker containers: `docker ps`
- Note the container name for example `kkloud`
- Get into the container's bash: `docker exec -it kkloud bash`
- Install apache, vim and lsof: `apt install -y apache2 vim lsof`
- Open Port configuration file `vim /etc/apache2/ports.conf`
- change the `Listen 8082` to `Listen port` where `port` is the port number given in instruction
- Open Site Configuration file `vim /etc/apache2/sites-available/000-default.conf`
- change the hostname and port number and change `<VirtualHost *:8082>` to `<VirtualHost 127.0.0.1:port>` where `port` is the port number given in instruction
- Start the apache server: `service start apache2`
- List open ports using lsof and verify that the port is open: `lsof -i`
