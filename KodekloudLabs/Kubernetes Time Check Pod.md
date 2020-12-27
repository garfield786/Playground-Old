# Kubernetes Time Check Pod

The Nautilus DevOps team want to create a time check pod in a particular Kubernetes namespace and record the logs. This might be initially used only for existing purposes, but later can be implemented in an existing cluster. Please find more details below about the task and perform it.

- Create a `pod` called `time-check` in the `devops` namespace. This pod should run a container called `time-check` container should use the `busybox` image with `latest` tag only and remember to mention tag `busybox:latest`.

- Create a `config` map called `time-config` with the data `TIME_FREQ=3` in the same namespace, and volume name should be `log-volume`.

- The `time-check` container should run the command: `while true; do date; sleep $TIME_FREQ;done` and should write the result to the location `/opt/data/time/time-check.log`.

- The path `/opt/data/time` on the pod should mount a volume that lasts the lifetime of this pod.

``` YAML
apiVersion: v1
kind: Namespace
metadata:
  name:  devops
---
apiVersion: v1
kind: ConfigMap
metadata:
  name: time-config
  namespace: devops
data:
  TIME_FREQ: "3"
---
apiVersion: v1
kind: Pod
metadata:
  name: time-check
  namespace: devops
  labels:
    name: time-check
spec:
  containers:
  - name: time-check
    image: busybox:latest
    command: ['/bin/sh', '-c', 'while true; do date > /opt/data/time/time-check.log; sleep $TIME_FREQ;done']
    volumeMounts:
      - name:  log-volume
        mountPath:  /opt/data/time
        readOnly: false
    env:
    - name: TIME_FREQ
      valueFrom:
        configMapKeyRef:
          name: time-config
          key: TIME_FREQ
  volumes:
    - name: log-volume
```
