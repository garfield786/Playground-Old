# Ansible Facts Gathering

- Create a yaml file as `index.yml` with the blow contents:
- `vi index.yml`

``` YAML
---
  - hosts: stapp01,stapp02,stapp03
    become: yes
    gather_facts: true
    tasks:
      - name: "Create a facts.txt file in /root dir for each app server"
        blockinfile:
          create: yes
          path: /root/facts.txt
          block: Ansible managed node IP is {{  hostvars[inventory_hostname]['ansible_default_ipv4']['address']  }}
      - name: "install httpd"
        yum:
          name: httpd
          state: latest
      - name: "copy facts.txt to /var/www/html/index.html"
        copy:
          src: /root/facts.txt
          dest: /var/www/html/index.html
          remote_src: yes
      - name: "start httpd"
        service:
          name: httpd
          state: started
```

- save and exit `:wq`
- Run the ansible playbook:
- `ansible-playbook -I inventory index.yml`
