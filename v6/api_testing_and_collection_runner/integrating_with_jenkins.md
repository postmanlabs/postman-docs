---

title: "Integrating automated API tests with Jenkins"
page_id: "integrating_with_jenkins"
tags: 
  - "newman"
  - "app"
warning: false
---

Postman contains a full-featured testing sandbox that lets you write and execute Javascript based tests for your API. You can then hook up Postman with your build system using Newman, our command line companion. Newman is Postman's Collection Runner engine that sends API requests, receives the response and then runs your tests against the response.

Newman and Jenkins are a perfect match. Lets start setting this up. We are using Ubuntu as a target OS as in most cases your CI server would be running on a remote Linux machine.

1\. [Install Jenkins][0]

2\. Install NodeJS and npm. Newman is written in NodeJS and we distribute the official copy through npm. Install nodejs and npm for Linux [here][1]

3\. Install Newman through 
    
    npm install -g newman

This would set up newman as a command line tool in Ubuntu.

Run a sample Postman Collection. We are assuming that you already have a Postman Collection with some tests. This is what the output looks in Postman's Collection Runner.

[![](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_1.png)
][2]

Some of my tests are failing intentionally in the screenshot so we can show you the instructions for troubleshooting.

4\. Run this collection inside newman, using the command `newman run jenkins_demo.postman_collection`. If everything is set up nicely, you should see the output below.

[![](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_2.png)
][3]

Jenkins exposes an interface at http://localhost:8080\.

[![](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_3.png)
][4]

5\. Create a new job by clicking on the "New Item" link on the left sidebar \> Select a "Freestyle Project" from the options \> Name your project.

[![](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_4.png)
][5]

6\. Add a build step in the project. The build step executes a Shell command (for linux and Mac OS) and execute Windows batch command (for windows).

[![](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_5.png)
][6]

The command is

    newman run jenkins_demo.postman_collection.

Click the save button to finish creating the project.

[![](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_6.png)
][7]

7\. Run this build test manually by clicking on the "Build Now" link in the sidebar.

[![](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_7.png)
][8]

Jenkins indicates that the build has failed with a red dot in the title. We can check why with the console output from newman.

[![](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_8.png)
][9]

8\. Click on the "Console Output" link in the sidebar to see what newman returned.

[![](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_9.png)
][10]

9\. Fix these tests inside Postman and then try again.

[![](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_10.png)
][11]

You can move on once you see green pass icons for all your tests like the screenshot above.

[![](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_11.png)
][12]

Jenkins indicates that the build succeeded with a blue ball.

10\. To set up the frequency with which Jenkins runs newman, click on "Configure project" in the main project window and then scroll down.=. The syntax for setting the frequency is H/(number of minutes after which there's a Jenkins build trigger) \* \* \* \*

[![](https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_12.png)
][13]

Jenkins will now run newman at your desired frequency and will tell you whether the build failed or succeeded. In a bigger set up, newman will be part of your build process and probably not the entire process. You can set up notifications and customise Jenkins as per your needs.

You can use a wide variety of other configurations to make your collection more dynamic.


[0]: https://wiki.jenkins-ci.org/display/JENKINS/Installing+Jenkins+on+Ubuntu
[1]: https://docs.npmjs.com/getting-started/installing-node
[2]: https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_1.png
[3]: https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_2.png
[4]: https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_3.png
[5]: https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_4.png
[6]: https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_5.png
[7]: https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_6.png
[8]: https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_7.png
[9]: https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_8.png
[10]: https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_9.png
[11]: https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_10.png
[12]: https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_11.png
[13]: https://www.getpostman.com/img/v1/docs/integrating_with_jenkins/integrating_with_jenkins_12.png
