# Git Setup from Scratch

``` Bash
yum install -y git && \
git config --global user.name "Kareem" && \
git config --global user.email "kareem@kodekloud.com" && \
mkdir /opt/official.git; cd /opt/official.git; git init --bare && \
cp /tmp/update ./hooks && \
cd /usr/src/kodekloudrepos && \
git clone /opt/official.git && cd official && \
git checkout -b xfusioncorp_official && \
cp /tmp/readme.md .; git add readme.md && \
git commit -m "added readme.md" && \
git push origin xfusioncorp_official
git checkout -b master
touch test; git add test && git commit -m "test"
git push origin master

```
