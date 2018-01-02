# DataEntry-Vue.js
This repository contains a demo application used to showcase integration of [DataEntry forms validation library](https://github.com/RobertoPrevato/DataEntry) with [Vue.js](https://vuejs.org).
It also contains a project template for Vue.js applications using Browserify and Gulp, alternative to official templates.

### Side note, something personal
I personally don't like the magic of Hot Reload module for Vue.js during development, I don't think it dramatically improves development like its authors say: refreshing the page was never a problem to me and it reproduces exactly the same scenario I will see in production environment. I never met a single developer who complained about having to refresh the web browser page after changing JavaScript (only those who didn't know about "Disable Cache" feature of browsers). What should otherwise say programmers using languages that require compilation step, having to recompile the source code before running unit tests or the application? This is why I am using custom made boiler-plate code with Browserify and Gulp.

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

