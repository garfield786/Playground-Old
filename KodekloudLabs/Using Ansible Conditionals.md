# Using Ansible Conditionals

``` YAML
- hosts: all
  become: yes
  gather_facts: true
  tasks:
  - name: copy to stapp01
    copy:
      src: /usr/src/devops/blog.txt
      dest: /opt/devops 
      owner: tony
      group: tony
      mode: 0777
    when: ansible_nodename == "stapp01"
  - name: copy to stapp02
    copy:
      src: /usr/src/devops/story.txt
      dest: /opt/devops 
      owner: steve
      group: steve
      mode: 0777
    when: ansible_nodename == "stapp02"
  - name: copy to stapp03
    copy:
      src: /usr/src/devops/media.txt
      dest: /opt/devops 
      owner: banner
      group: banner
      mode: 0777
    when: ansible_nodename == "stapp03"
    ```
