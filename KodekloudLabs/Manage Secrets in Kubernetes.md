# Run this command

```bash
kubectl create secret generic beta --from-file=/opt/beta.txt
```

```YAML
apiVersion: v1
kind: Pod
metadata:
  name: secret-xfusion
spec:
  containers:
    - name: secret-container-xfusion
      image: ubuntu:latest
      command: ["/bin/bash", "-c", "sleep 10000"]
      volumeMounts:
        - name: secret-volume-xfusion
          mountPath: /opt/games
          readOnly: true
  volumes:
    - name: secret-volume-xfusion
      secret:
        secretName: beta
```
