# <a name="natureiseverywhere"></a>Future Action

This interactive was designed to encourage individuals to get involved with Pittsburgh organizations that deal with enviromental issues. An illustrated landscape is labeled with five climate-related systems: Water, Food, Energy, Habitat and Transportation. The visitor selects a system and is shown three actions related to that system. The visitor selects an action and pledges to complete it. They can opt to recieve two emails: The first is sent immediately, it provides links to local organizations working on that action. The second email is sent in six months to remind them of the pledge they made. On a seperate screen, we display a tally of which systems visitors have pledged to protect.

This interactive exhibit has three components: 
* [**Voting Application**](#voting)
* [**Poll**](#poll)
* [**Backend**](#backend)

During 2018 & 2019, the code will be adapted for an upcoming exhibition on life in the Arctic region at the Nordic Museum in Stockholm, Sweden.

<br/>

# <a name="voting"></a>Voting Application

Our exhibition has two computers running the voting application. The applications are mostly the same, but have one key difference: a value indicating whether the touchscreen in installed to the left or right of the poll monitor. This information is used by the poll as it animates the vote. The instructions below will set up the left computer.

![Voting app screencaptures](https://github.com/CMP-Studio/WeAreNature/blob/master/_Images/FutureAction_Screens.png)

This application was developed for Mac OS X, but the frameworks used are cross-platform. <br/>
Some of these instructions will require modification to work on a Windows/Linux machine.

## Secrets
To communicate with the database, you will need to provide the API secret in a file called secrets.js. See [VotingApplication/secretsExample.js](https://github.com/CMP-Studio/WeAreNature/blob/master/FutureAction/VotingApplication/secretsExample.js). If you work at the Studio, find the secret in Dropbox. 

## Running

* Just launch [application](https://github.com/CMP-Studio/WeAreNature/tree/master/FutureAction/VotingApplication/future-action-left-darwin-x64)!

&nbsp;&nbsp;&nbsp;&nbsp;OR

* Go to ```WeAreNature/FutureAction/VotingApplication```
* ```npm i```
* ```npm start```

## Building
* In [VotingApplication/FromMeToWe.html](https://github.com/CMP-Studio/WeAreNature/blob/master/FutureAction/VotingApplication/FromMeToWe.html), set ```computerLocation: "Left"```
* In [VotingApplication/package.json](https://github.com/CMP-Studio/WeAreNature/blob/master/FutureAction/VotingApplication/package.json), set ```"name": "future-action-left"```
* Install [electron packager](https://github.com/electron-userland/electron-packager) globally ```npm install electron-packager -g```
* Go to ```WeAreNature/FutureAction/VotingApplication```
* ```electron-packager .```

## [Follow This Installation Guide](https://github.com/CMP-Studio/InstallationComputers)

<br/>

# <a name="poll"></a>Poll

The poll is an application developed with Electron and React. The poll is displayed on a large monitor mounted on the wall between the two voting stations, it is not made to work on a touchscreen. It listens for new votes via a websocket.

![Poll app screencaptures](https://github.com/CMP-Studio/WeAreNature/blob/master/_Images/FutureActionPoll_Screen.png)

This application was developed for Linux, but the frameworks used are cross-platform. <br/>
Some of these instructions will require modification to work on a Windows/Mac machine.

## Secrets
To communicate with the database, you will need to provide the API secret in a file called secrets.js. See [Poll/javascripts/secretsExample.js](https://github.com/CMP-Studio/WeAreNature/blob/master/FutureAction/Poll/javascripts/secretsExample.js). If you work at the Studio, find the secret in Dropbox. 

## Running
* Go to ```WeAreNature/FutureAction/Poll```
* ```npm i```
* ```npm start```
* Open a new Terminal window, go to ```WeAreNature/FutureAction/Poll```
* ```./node_modules/.bin/electron .```

## [Follow This Installation Guide](https://github.com/CMP-Studio/InstallationComputers) and

* You will need to run two scripts to start the app. Add these two lines to your crontab, adjusting the absolute paths to your file structure: <br/>
```* * * * * DISPLAY=:0 run-one /home/studio/WeAreNature/FutureAction/Poll/npmstart.sh ``` and <br/>
```* * * * * DISPLAY=:0 run-one /home/studio/WeAreNature/FutureAction/Poll/electronstart.sh```

<br/>

# <a name="backend"></a>Backend

The backend of this exhibit stores votes, emails, and also handles sending reminder emails. It is hosted on AWS, but managed via [Serverless](https://serverless.com/). Find futher instructions for setting up Serverless on their site.

## Architecture
![Architecture diagram](https://github.com/CMP-Studio/WeAreNature/blob/master/FutureAction/Backend/architectureDiagram.png)

## Emails
There are two emails sent to every visitor who opts-in. One is sent immediately as confirmation and the other is sent in six months as a reminder. All emails are written in HTML and are easy to edit, the source files are located here: [confirmation](https://github.com/CMP-Studio/WeAreNature/tree/master/FutureAction/Backend/src/reminder/emails), [reminder](https://github.com/CMP-Studio/WeAreNature/tree/master/FutureAction/Backend/src/sendReminders/emails). The images included in the emails are stored in an AWS S3 bucket. After making edits to these HTML email files, re-deploy the server. 

## Secrets
To deploy the database, you will need to provide several secrets in a file called serverless.env.yml. See [Backend/serverless.env.sample.yml](https://github.com/CMP-Studio/WeAreNature/blob/master/FutureAction/Backend/serverless.env.sample.yml). If you work at the Innovation Studio, find the secrets in Dropbox. 

## Deploying
* Go to ```WeAreNature/FutureAction/Backend```
* ```serverless deploy --stage production```

<br/>
<br/>
<br/>

![Future Action installation view](https://github.com/CMP-Studio/WeAreNature/blob/master/_Images/FutureAction_Wide.jpg)


