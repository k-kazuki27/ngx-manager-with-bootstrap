# Simple Admin App in Angular7 and Bootstrap 4

Simple Admin App built using Angular 7 and Bootstrap 4
This project is a port of the famous Free Admin Bootstrap Theme SB Admin v7.0 to Angular7 Theme.
Powered by StartAngular & StrapUI

## Base
- https://github.com/start-angular/SB-Admin-BS4-Angular-6


## Demo
- [DEMO](https://k-kazuki27.github.io/ngx-manager-with-bootstrap/)

### Introduction

Provides fast, reliable and extensible starter for the development of Angular projects.

`sb-admin-bs4-angular7` provides the following features:

- Developed using boostrap-v4.0.0
- angular-v7.2.0
- angular/cli-v7.3.8
- jest-v24.7.1
- [ngx-bootstrap-v4.0.0](https://github.com/valor-software/ngx-bootstrap/)
- Following the best practices.
- Ahead-of-Time compilation support.
- Production and development builds.
- Tree-Shaking production builds.

### How to start

**Note** that this seed project requires **node >=v8.9.0 and npm >=4**.

In order to start the project use:

```bash
$ git clone https://github.com/k-kazuki27/ngx-manager-with-bootstrap.git
$ cd ngx-manager-with-bootstrap
# install the project's dependencies
$ npm install
# watches your files and uses livereload by default run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
$ npm start
# prod build, will output the production application in `dist`
# the produced code can be deployed (rsynced) to a remote server
$ npm run build
```

### OpenAPI Generator
- [openapi-generator](https://github.com/OpenAPITools/openapi-generator)

#### Installation

```
$ npm install @openapitools/openapi-generator-cli -g
```

#### Generate

```
$ openapi-generator generate \
-i openapi.yaml  \
-g typescript-angular \
-o src/app/shared/api-clients \
--additional-properties ngVersion=7.0.0 \
--additional-properties fileNaming=kebab-case \
--additional-properties serviceSuffix=Api \
--additional-properties serviceFileSuffix=-api \
--additional-properties modelSuffix=DTO \
--additional-properties modelFileSuffix=-dto
```

#### Help Config

```
$ openapi-generator config-help -g typescript-angular
```
