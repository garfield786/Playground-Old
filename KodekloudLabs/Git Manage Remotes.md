# Git Manage Remotes

- ssh to the storage server and elevate to root, then run the following commands:
- `cd /usr/src/kodekloudrepos/apps/`
- `git remote add dev_apps /opt/xfusioncorp_apps.git/`
- `cp /tmp/index.html .`
- `git add index.html`
- `git commit -m "Adding index.html"`
- `git push -u dev_apps master`
