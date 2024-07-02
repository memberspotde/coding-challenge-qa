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
3. Start the frontend `nx serve frontend` will be hosted on `http://localhost:4200/`
4. Start the backend `nx serve backend`will be hosted on `http://localhost:3000/api`

Optional:
You can also start both with one command `nx run-many --target=serve --projects=frontend,backend --parallel=4`

## About the project

The project contains a stripped down feature that we added to out app for a few weeks.

It is a view that can be used to create own preview images for our courses, chapters and lectures. The user can add some pictures and text, format them and then generate a preview png image out of it.

## Your task

You should checkout the project and test the project. You should find all bugs that you can and show document how to reproduce it by taking a video or in textual form.

## For one of the bugs hidden there is a stacktrace how to get it:

---
