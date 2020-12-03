- create a file rc.yml in the home directory
- `vi ~/rc.yml`
- and paste the following yaml script in it
```YAML
apiVersion: v1
kind: ReplicationController
metadata:
  name: httpd-replicationcontroller
spec:
  replicas: 3
  template:
    metadata:
      name: httpd_app
      labels:
        app: httpd_app
        type: front-end
    spec:
      containers:
        - name: httpd-container
          image: httpd
```
- run the following command:
```bash
kubectl create -f ~/rc.yml
```
- check the pods with the below command and wait until they are create and are 1/1 Ready
```bash
kubectl get pods
```