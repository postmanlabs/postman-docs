---
title: "Variables complete reference"
page_id: "variables_complete_reference"
warning: false
---

Variables are used to store information to be referenced and manipulated in programming languages and software tools. The primary purpose of variables is to label and store data in memory. You may think of variables as containers that hold information. Like in programming languages, variables in Postman play a vital role in bringing flexibility to your development environment.

In Postman there are five variable scopes. Among these five set of variable scopes, environment and global variable scopes are touted to be the two most widely used ones. This chapter explores variable scopes in detail and attempts to bring clarity surrounding variable scopes in Postman.

This chapter explains the following topics:

* [Variable scopes in Postman](#variable-scopes-in-postman)
* [Variables' scope pictorially](#variables'-scope-pictorially)
* [Precedence in Postman variables](#precedence-in-postman-variables)
* [A holistic example](#a-holistic-example)

## Variable scopes in Postman

This section describes the following topics:

* [Local/Temporary variables](#local/temporary-variables)
* [Data variables](#data-variables)
* [Collection variables](#collection-variables)
* [Environment variables](#environment-variables)
* [Global variables](#global-variables)

### Local/Temporary variables

Local variables, as the name suggests, are always local to the request being executed and have the highest precedence at any given point in time. Sometimes, they are also referred to as temporary variables. Anything that is transient and needed for collection execution should go as a local variable. Anything that must be persisted or has to be saved after the request execution must go as an environment or a global variable. You can use local variables if you want to override all other variable scopes defined in your Postman settings.

**Note:** You can only create local variables through scripts and the syntax is illustrated below. Remember, the local variable in Postman app will be available only until execution of your request.

Syntax:

```js
// to set a value
pm.variables.set("key", "value");

// to retrieve a value
pm.variables.get("key");

```

### Data variables

The Collection Runner lets you import a CSV or a JSON file, and then use the values from the data file inside HTTP requests and scripts. We call these 'data variables'. You cannot create or set a 'data' variable. You can only 'get', i.e read the value of a data variable. Let's consider an example wherein you want to use a record multiple times with multiple values. In such a scenario, you can use data variables. This is based on the concept of array of objects.

Let’s discuss a collection that on-boards new employees in a company. For one employee to be on-boarded, an email id should be created and a laptop be given. Besides this, an employee id, an access card and various other accounts should also be created to on-board an employee. Let’s assume this is just one workflow having multiple requests to onboard one employee. Now, if you want to onboard 100 employees, you can use data variables. Every single item  must correspond to the whole data of one employee. If you've used the [Collection Runner](/docs/postman/collection_runs/intro_to_collection_runs/) then you may know it allows to import a data file and then use the values from the data file inside HTTP requests. To use them inside Postman, follow the same syntax as environment or global variables:

Syntax:

```js
// To retrieve a value

pm.iterationData.get()

```

**Note:** You can set data variables only from a CSV or a JSON file.

### Collection variables

These variables are a part of your collection. If there are variables that don’t change based on your environment, you can create collection variables. You can create/define your collection variables in the UI by clicking (...) next to the collection name and selecting 'Edit'. You can only get the variable using ```pm.variables.get ()```, you can't set it. Since these variables are read-only, you can use the following syntax to get the value:

Syntax:

```js
// to retrieve a value

pm.variables.get();
...

```

Let’s consider a case in point. A collection has 500 requests in it and all of them have a URL. Let’s say if the URL gets changed then updating this change 500 times for 500 requests is near impossible. So, it’s a good idea to create a collection variable and use accordingly. Another recommendation here is if you have non-sensitive data which is repetitive, it is recommended to go for a collection variable. One point to note though is that you can’t set collection variables using scripts. Remember one of the primary use cases of collection variables is that you can access them from a request within a collection.  

Syntax:

```js

// to retrieve a value

pm.variables.get("key");

```

**Note:** You cannot create or update collection variables from scripts.

### Environment variables

Postman’s environment variables enable you to switch between different setups/environments easily. These are similar to global variables but with a narrow scope. Environment variables are useful if you have multiple environments where testing needs to be done for Dev, Staging and Production environments. You can configure variables as per your needs depending on the environment you set up and Postman replaces these variables when you select the corresponding environment.

Let’s say there are three environments – Development, Staging, and Production. And every environment has a different set of request APIs. Let’s say you are developing an API and for each API you want to set a host and a token variable for authentication purposes. The tokens for Development are D1 and 1, S2 and 2 for Staging, and P3 and 3 for production. When you select Development environment, Postman populates D1 and 1 and likewise.

Syntax:

```js

// to retrieve a value

pm.environment.get("key");

// to set a value

pm.environment.set("key", "value");
```

### Global variables

Global Variables work outside the environment and they are global to a workspace. Which means these variables are common to all collections and environments in that workspace.

Syntax:

```js

// to retrieve a value

pm.globals.get("key");

// to set a value

pm.globals.set("key", "value");

```

## Variables’ scope pictorially

The following image depicts the way variables work in Postman.

[![variables scope pictorially](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Variables-Chart.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/ariables-Chart.png)

As you can see in the above illustration, you can't set data and collection variables. You can only get data variables using a data file from the Runner while collection variables can be set from the Postman UI. You can also see that ```pm.variables.get ()``` is going through all the layers. If a same variable exists in an environment and global scope, you can access using ```pm.environment.get ()``` and ```pm.global.get ()``` respectively. If you use ```pm.variables.get ()```, you will only get the one that has the highest precedence - which is environment. If you have the same variable in an environment, global, and collections scope, then you can directly access global and environment variable but you can't access a collection variable. If you use ```pm.variables.get ()```, Postman will fetch the environment variable as it has higher precedence than collections.

## Precedence in Postman variables

As Postman provides five set of variable scopes, everything works based on precedence. If a variable is in two different scopes, the scope with a higher priority takes precedence. Postman resolves scopes using the following hierarchy, progressing from broad to narrow scope. Look at the following image.

[![collection details view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Variables-Pic.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Variables-Pic.png)

From the above image, it’s clear that the variable with the narrowest scope always takes precedence. There could be a number of scenarios when working with variables. Let’s look at a scenario that has two variables with the same name at different scopes.

We have a variable my_data declared as a local and a global variable respectively. Which one would take precedence now? When a corresponding environment is selected both these variables get activated but the one with higher precedence (narrowest scope) will get the priority. In this case, my_data which is declared as a local variable takes precedence.

## A holistic example

Let’s consider an example that has three collections C1, C2, and C3 and three environments E1 (Dev), E2 (Staging), and E3 (Prod). We have three different URLs for three different environments. Each collection has a timeout variable – 10 for C1, 20 for C2, and 30 for C3. The number of attempts to retry is 3 for all collections in all environments, let’s say whenever a test case fails.

[![collection details view](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Variables-Example1.png)](https://s3.amazonaws.com/postman-static-getpostman-com/postman-docs/Variables-Example1.png)

As the above image illustrates, each environment has a different url. So, an environment variable for url is created. The timeout variable is different for each collection so for three collections three different collection variables are created. Each time a test case fails, a ‘retry’ could be performed three times across collections and environments. So, a global variable is created for retry.
