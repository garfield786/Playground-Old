# Rolling Updates And Rolling Back Deployments in Kubernetes

- Create a file called deployment.yaml:
- `vi deployment.yaml`
- and paste the following yaml document onto it.

``` YAML
apiVersion: v1
kind: Namespace
metadata:
  name:  xfusion
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: httpd-deploy
  namespace: xfusion
  labels:
    app: httpd-deployment
spec:
  replicas: 4
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 2
  selector:
    matchLabels:
      app: httpd-container
  template:
    metadata:
      labels:
        app: httpd-container
    spec:
      containers:
      - name: httpd
        image: httpd:2.4.28
```

## Commands

- `kubectl apply -f deployment.yaml`
- `vi deployment.yaml`
- `kubectl apply -f deployment.yaml`
- `watch kubectl rollout status deployment httpd-deploy -n xfusion`
- `kubectl rollout undo deployment httpd-deploy xfusion`
- `watch kubectl rollout status deployment httpd-deploy -n xfusion`
