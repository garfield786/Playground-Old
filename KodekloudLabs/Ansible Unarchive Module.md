# Ansible Unarchive Module

``` Yaml
---
- hosts: stapp01,stapp02,stapp03
  gather_facts: true
  tasks:
  - name: Unzip
    become: yes
    unarchive:
      src: /usr/src/finance/devops.zip
      dest: /opt/finance/
      mode: 0655
      owner: "{{ ansible_real_user_id }}"
      group: "{{ ansible_real_group_id }}"
```
