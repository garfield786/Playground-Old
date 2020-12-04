# IPtables Installation and Configuration

- Run these commands on all app servers:
- Change the port number `<port>` to the appropriate one

```bash
sudo yum install -y iptables-services
sudo systemctl start iptables
sudo systemctl enable iptables
sudo iptables -I INPUT -p tcp -m tcp -s 0.0.0.0/0 --dport `<port>` -j DROP
sudo iptables -I INPUT -p tcp -m tcp -s 172.16.238.14 --dport `<port>` -j ACCEPT
sudo iptables-save > /etc/sysconfig/iptables
sudo service iptables restart
sudo iptables -nvL
```
