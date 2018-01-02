# DataEntry-Vue.js
This repository contains a demo application used to showcase integration of [DataEntry forms validation library](https://github.com/RobertoPrevato/DataEntry) with [Vue.js](https://vuejs.org).
It also contains a project template for Vue.js applications using Browserify and Gulp, alternative to official templates.

The demo can be seen here: [https://robertoprevato.github.io/demos/dataentry-vuejs/index.html](https://robertoprevato.github.io/demos/dataentry-vuejs/index.html).

## Getting started
Commands to setup development environment:
```js
npm install

gulp dev-init

gulp watch-es

gulp watch-less
```

Artifacts are generated in a folder `httpdocs`. During development, `gulp watch-es` and `gulp watch-less` can be used to setup watchers that automatically build artifacts upon file change.

### Visiting the demo application
The code of the Vue.js demo application does not require a running web server in order to be used.
It is possible to open and test the demo application by opening the index.html inside the `httpdocs` directly in a browser.
However, it is recommended to work with a web server, to use a more realistic development environment.

The author's recommended way to quickly use a development web server, is to use the Python HttpServer module (requires Python 3 installed):
* `py -3 -m http.server 44660` (under Windows)
* `python3 -m http.server 44660` (under Linux)
 
Or, using Python 2.x:
* `py -2 -m SimpleHTTPServer 44660` (under Windows)
* `python -m SimpleHTTPServer 44660` (under Linux)

## Documentation
Detailed documentation for DataEntry library is available at the [wiki page](https://github.com/RobertoPrevato/DataEntry/wiki).

