# Coding Challenge QA

This is a [nx](https://nx.dev/getting-started/installation) project that is based on angular 18 and nestjs 10.

## Prerequisites

To run it, you need to have the following dependencies:

- node 18.19.1 || 20.11.1 || 22.0.0 [angular deps](https://angular.dev/reference/versions#actively-supported-versions)
- nx 19.3.2
- npm 10.2.4
- sqlite3

## Installation

1. Checkout the repository
2. Go to the project folder and run `npm install`
3. Make sure you have all dependencies
4. Start the frontend `npx nx serve frontend` will be hosted on `http://localhost:4200/`
5. Start the backend `npx nx serve backend` will be hosted on `http://localhost:3000/`
6. You can find the api documentation on `http://localhost:3000/api`

Optional:
You can also start both with one command `npx nx run-many --target=serve --projects=frontend,backend --parallel=4`

## About the project

The project should be used to test the testing skills of a candidate. It is a simple gallery that contains some visual and functional bugs. Those are issues that we are often confronted with.

It should be possible to add a infinite number of images to the thumbnail gallery. It should be able to do so from desktop and mobile devices.

You can upload a image. This image will be uploaded and written into `dist/apps/uploads` folder. The file path will be written together with the name and the description into a sqlite3 database. This is a file database and you can find it in you root project folder. The file is called `database.sqlite`

## Your task

You should checkout the project and test the project. You should find all bugs that you can and show document how to reproduce it by taking a video or in textual form.
