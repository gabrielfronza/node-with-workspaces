# node-with-workspaces repository

This repo was created to test an api importing external libraries imported as workspaces.
Please check the tag workspaces at package.json.
In this case we would have the api_1, api_2, ..., api_n, importing common libraries.
The libraries could be to general middlewares, authenticators, and others.

### How to use
```bash
node (or nodemon) api/index.js
```

### How to build
```bash
docker build -f Dockerfile.api .
```

### How to start image
```bash
docker run -d -p 3751:3751 IMAGE_ID
```

### Make requests
```bash
GET http://localhost:3751
```

