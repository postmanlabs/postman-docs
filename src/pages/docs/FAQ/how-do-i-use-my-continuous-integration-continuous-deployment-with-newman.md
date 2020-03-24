---
title: "How do I use my Continuous Integration/Continuous Deployment with Newman?"
order: 3
page_id: "how-do-i-use-my-continuous-integration-continuous-deployment-with-newman?"
warning: false
---

Newman, by default exits with a status code of 0 if everything runs well i.e. without any exceptions. Continuous integration tools respond to these exit codes and correspondingly pass or fail a build. You can use the --bail flag to tell Newman to halt on a test case error with a status code of 1 which can then be picked up by a CI tool or build system.

[Newman Introduction](https://www.getpostman.com/docs/newman_intro)
