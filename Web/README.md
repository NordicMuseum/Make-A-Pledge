# Make-A-Pledge - Web

## Installation

```sh
npm install
```

## Development

```sh
npm run build # needed first time to build the applications
npm run watch
```

Pages are available here
- [http://localhost:3000//se/poll](http://localhost:3000//se/poll)
- [http://localhost:3000//en/poll](http://localhost:3000//en/poll)
- [http://localhost:3000//se/vote](http://localhost:3000//se/vote)
- [http://localhost:3000//en/vote](http://localhost:3000//en/vote)


## Build/Assemble

Each page is defined in the `pages/` directory. Some of the assets are however
compiled from other parts of the general project. To gather all required data
you must "build" the web application.

```sh
npm run build
```

### Caveats

The Poll-application is compiled from the original source (`../Poll`). However,
the VoteingApplication is a manual copy-paste from `../VotingApplication` into
`../Web`. This is due to the setup of the original VotingApplication source.

Some of the VotingApplication assets are copied during `build` into `../Web`
such as `../VotingApplication/data` and secrets.

## Start Server

Once built, you may serve the web-based content by the following command:

```sh
npm start
```

## Publishing

When you are ready to publish your web applications, simply run the following
command:

```sh
npm run create:publishable
```

This command will generate a zip-file with all the content needed to deploy your
web application.

**REMEMBER: When deploying your web applications, install the required
dependencies on the server using the `production` flag!** This will ensure that
no development specific dependencies are installed.

```sh
npm install --production
```