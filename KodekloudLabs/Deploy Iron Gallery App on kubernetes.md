# Deploy Iron Gallery App on Kubernetes

``` YAML
apiVersion: v1
kind: Namespace
metadata:
  name:  iron-namespace-nautilus
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: iron-gallery-deployment-nautilus
  namespace: iron-namespace-nautilus
  labels:
    run: iron-gallery
spec:
  replicas: 1
  selector:
    matchLabels:
      run: iron-gallery
  template:
    metadata:
      labels:
        run: iron-gallery
    spec:
      containers:
      - name: iron-gallery-container-nautilus
        image: kodekloud/irongallery:2.0
        resources:
          limits:
            memory: "100Mi"
            cpu: "50m"
        volumeMounts:
          - name: config
            mountPath: /usr/share/nginx/html/data
          - name: images
            mountPath: /usr/share/nginx/html/uploads
        ports:
        - containerPort: 80
      volumes:
        - name: config
          emptyDir: {}
        - name: images
          emptyDir: {}
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: iron-db-deployment-nautilus
  namespace: iron-namespace-nautilus
  labels:
    db: mariadb
spec:
  replicas: 1
  selector:
    matchLabels:
      db: mariadb
  template:
    metadata:
      labels:
        db: mariadb
    spec:
      containers:
      - name: iron-db-container-nautilus
        image: kodekloud/irondb:2.0
        env:
          - name: MYSQL_DATABASE
            value: database_blog
          - name: MYSQL_ROOT_PASSWORD
            value: k0d3kl0d3!
          - name: MYSQL_PASSWORD
            value: k0d3kl0d3!
          - name: MYSQL_USER
            value: jim
        volumeMounts:
          - name: db
            mountPath: /var/lib/mysql
        ports:
        - containerPort: 3306
      volumes:
        - name: db
          emptyDir: {}
---
apiVersion: v1
kind: Service
metadata:
  name: iron-db-service-nautilus
  namespace: iron-namespace-nautilus
spec:
  type: ClusterIP
  selector:
    db: mariadb
  ports:
  - port: 3306
    targetPort: 3306
    protocol: TCP
---
apiVersion: v1
kind: Service
metadata:
  name: iron-gallery-service-nautilus
  namespace: iron-namespace-nautilus
spec:
  type: NodePort
  selector:
    run: iron-gallery
  ports:
  - port: 80
    targetPort: 80
    protocol: TCP
    nodePort: 32678
```
