# Troubleshoot Issue with PODs

- List Pods using the below command
- `kubectl get pods`
- Note the pod name and run the command below to edit it.
- Replace `{POD_NAME}` with the name of the pod you noted
- `kubectl describe po {POD_NAME}`
- Change the value of `httpd:latests` to `httpd:latest` (remove the `s`):

``` YAML
spec:
  containers:
  - image: httpd:latests
    imagePullPolicy: IfNotPresent
```

- Save and Exit by presing the ESC KEY, typing `:wq` and presing Enter
- Make sure the Pod is in running state by running
- `kubectl get pods`
