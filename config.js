System.config({
  "paths": {
    "*": "*.js",
    "app/*": "lib/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "fkit": "npm:fkit@0.16.2"
  }
});

