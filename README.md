![cf](https://i.imgur.com/7v5ASc8.png) Lab 08: REST - Haley Mendoza
[![Build Status](https://travis-ci.com/hjmendoza/08-rest.svg?branch=master)](https://travis-ci.com/hjmendoza/08-rest)
======

## Heroku & Travis
* Travis-CI Build: https://travis-ci.com/hjmendoza/08-rest
* Heroku Server: https://haley-rest.herokuapp.com/

## Configuration 
* **index.js** - entry point for the application
* **src/** - contains core application files and folders
  * **src/app.js** - contains core application bootstrap
  * **src/api/js** - contains HTTP RESTful methods
  * **src/lib/** - contains module definitions
* **\_\_test\_\_/** - contains unit tests

## About the Applicaiton
* This is a vanilla RESTful API. Implements promise constructs to manage asynchronous code
 
## Server Endpoint
### `/api/v1/cats`

* `POST` request
 * receives data as stringifed JSON in the body of a **POST** request 
 * returns a 200 response with the POST'd JSON as the content
* `PUT` request
 * receives `?id=<uuid>` as a query string parameter to identify a specific resource
 * passes data as stringifed JSON in the body of a **PUT** request 
 * returns a 200 response with the JSON as the content
* `GET` request
 * receives `?id=<uuid>` as a query string parameter to identify a specific resource
 * returns a 200 response, and a message that states "ID: <id>" was requested
 * `DELETE` request
  * receives `?id=<uuid>` as a query string parameter to identify a specific resource
  * returns a 200 response, and a message that states "ID: <id>" was deleted
  
## To Start Application
Clone down code. Define port in .env. Run application usine `nodemon`. 
  * `localhost:<PORT>` will start at a simple Hello page
  * `localhost:<PORT>/api/v1/cats` will start at endpoint of API
  * add `?id=<uuid>` to register GET requests.
  * Use postman or httpie to register other HTTP requests.
