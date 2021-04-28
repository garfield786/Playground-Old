# Git Setup from Scratch

``` Bash
yum install -y git && \
git config --global user.name "Kareem" && \
git config --global user.email "kareem@kodekloud.com" && \
mkdir /opt/apps.git; cd /opt/apps.git; git init --bare && \
cp /tmp/update ./hooks && \
cd /usr/src/kodekloudrepos && \
git clone /opt/apps.git && cd apps && \
git checkout -b xfusioncorp_apps && \
cp /tmp/readme.md .; git add readme.md && \
git commit -m "added readme.md" && \
git push origin xfusioncorp_apps
git checkout -b master
touch test; git add test && git commit -m "test"
git push origin master
```
