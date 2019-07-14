# Storybook Zone Issue

Recreates Storybook.js issue https://github.com/storybookjs/storybook/issues/7004


While creating this project I realized that if I use yarn, Storybook does not have any issues, but if I use npm I get the zone errors described in the issue.

```
  yarn version: 1.16.0
  npm version: 6.4.1
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Steps taken to create this project:

```bash
ng new storybook-zone-issue --create-application=false
ng generate library component-library --prefix=complib
npx -p @storybook/cli sb init --type angular
ng generate component button --project=component-library --style=scss
npm run storybook 
```


