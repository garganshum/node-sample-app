Node-Sample-App
-
Simple starter node app with error handling and logging middleware built on Koa to get you started quickly with building
node microservice.

The files are currently separated into Api and Domain layer

Getting Started
-
Run the following command inside the git repository.

`npm install`

The project depends on Babel to transpile it to target appropriate node version.
Change as necessary in `.babelrc` 

Configurations
-
Following environment variables are available for configuration

`SAMPLE_APP_LOGGING` set to true/false to enable disable logging.

`SAMPLE_APP_LOGSTASH_HOST` and `SAMPLE_APP_LOGSTASH_PORT` to define logstash host and port if you are
running Logstash.

Change as necessary in `config.js` file

