# node-with-workspaces repository

This repo was created to test an api importing external libraries imported as workspaces.
Please check the tag workspaces at package.json.
In this case we would have the api_1, api_2, ..., api_n, importing common libraries.
The libraries could be to general middlewares, authenticators, and others.

### How to install

```bash
cd api && npm i && cd ..
```

### How to start

```bash
node (or nodemon) api/index.js
```

### How to build

```bash
docker build -t node-with-workspaces -f ./api/Dockerfile .
```

### How to start image

```bash
docker run -d -p 3751:3751 node-with-workspaces
```

### Make requests

```bash
GET http://localhost:3751
```
