# Deploy Nagios on Kubernetes

```YAML
---
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: nagios-deployment
    spec:
      selector:
        matchLabels:
          app: nagios-deployment
      template:
        metadata:
          labels:
            app: nagios-deployment
        spec:
          containers:
          - name: nagios-container
            image: jasonrivers/nagios
---
kind: Service
apiVersion: v1
metadata:
  name:  nagios-service
spec:
  selector:
    app:  nagios-deployment
  ports:
  - name:  nagios
    port:  80
    nodePort:  30008
```

- kubectl get pods
- kubectl exec -it nagios-deployment-74ccd9c66d-966n5 -- bash
- echo xFusionCorp:LQfKeWWxWD >> /opt/nagios/etc/htpasswd.users
