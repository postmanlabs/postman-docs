---
title: "What are the different variable scopes?"
order: 3
page_id: "what-are-the-different-variable-scopes?"
warning: false
---

The following [scopes](https://www.getpostman.com/docs/postman/environments_and_globals/variables) are available for use:

+ [Global](https://www.getpostman.com/docs/postman/environments_and_globals/manage_globals)
+ Environment
+ Collection
+ Local
+ [Data](http://blog.getpostman.com/2014/10/28/using-csv-and-json-files-in-the-postman-collection-runner/)

Scopes can be thought of as different "buckets" in which values reside. If a variable is in multiple "buckets", the scope with a higher priority wins and the variable gets its value from there. Postman resolves scopes using this hierarchy progressing from broad to narrow scope.
