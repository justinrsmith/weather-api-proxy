# Weather API Proxy

### What is it?
A simple [Express](https://expressjs.com/) powered server that proxies the [OpenWeatherMap API](https://openweathermap.org/api).

### Why?
To be able to leverage the [OpenWeatherMap API](https://openweathermap.org/api) in an application that will be distributed without
having to have users configure their own API key for the service.

### Google App Engine
Base configuration for quick deployment to [Google App Engine](https://cloud.google.com/appengine/) is included as well. So,
you can easily spin up your own instance!


## Quickstart

### Local Development

Export your OpenWeatherMap `APP_ID` environment variable:

```sh
export APP_ID=<your openweathermap app id>
```

Start the local server:

```sh
node server.js
```

### [Google App Engine](https://cloud.google.com/appengine/)

Make sure you have a Google Cloud project setup for App Engine. Quickstart instructions can be
found [here](https://cloud.google.com/appengine/docs/standard/nodejs/quickstart).

Copy `app.yaml.example` to `app.yaml` for usage with App Engine:

```sh
cp app.yaml.example app.yaml
```

Inside the newly setup `app.yaml` set your `APP_ID` provided by OpenWeatherMap.

Initialize your App Engine app with your project:

```sh
gcloud app create --project=[YOUR_PROJECT_ID]
```

Deploy the application:

```sh
gcloud app deploy
```
