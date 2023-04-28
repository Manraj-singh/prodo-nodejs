# Prodo Nodejs app

**Overview :**

This is a Node.js project that provides an API for managing categories and products.

**Tech Stack :**

*Nodejs, Expressjs, MongoDB*



 



## Run Locally

1) Clone the project

```bash
  git clone https://github.com/Manraj-singh/prodo-nodejs.git

```
alternatively , download the code zip file

2) install the dependencies  :

```bash
    cd prodo-nodejs
    npm install
```

3) create a .env file and provide your mongodb credentials

```bash
    MONGOURI = "<your-mongodb-uri>"
    PORT = 8001
```
4) Good to go , start the server  
```bash
    npm start
```



Open [http://localhost:8001](http://localhost:8001) to view it in your browser.




## Folder structure

```bash
README.md
config
   |-- mongoose.js
controllers
   |-- category-controller.js
   |-- index.js
   |-- product-controller.js 
index.js
middlewares
   |-- error.js
models
   |-- Category.js
   |-- Product.js
   |-- index.js
package-lock.json
package.json
routes
   |-- category.js
   |-- index.js
   |-- product.js
```

walkthrough of folder Structure(MVC pattern) : 
- config:   contains configurations like mongoose
- controller:   contains logic for each routes
- index.js: entry point where server is defined
- middlewares:  contains custom middle ware defined
- models:  all the schema defined here
- routes:   express routes defined here

## API endpoints:
### categories:
- /categories
- /categories/:id
- /categories/add
- /categories/update/:id
- /categories/delete/:id

### products:
- /products
- /products/:id
- /products/add
- /products/update/:id
- /products/delete/id
- /products/category/:id?limit=10&page=1


