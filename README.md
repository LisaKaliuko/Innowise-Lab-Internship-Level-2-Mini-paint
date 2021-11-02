# Mini-Paint application

## Task

[https://docs.google.com/document/d/1K79_NA4lMYfqQiIJGqLDek1K9z-oc2qg8n4AvrN1PXE/edit](https://docs.google.com/document/d/1K79_NA4lMYfqQiIJGqLDek1K9z-oc2qg8n4AvrN1PXE/edit)

## Installation

`git clone https://github.com/LisaKaliuko/Innowise-Lab-Internship-Level-2-Mini-paint`

`cd Innowise-Lab-Internship-Level-2-Mini-paint`

`npm install`

## How to run the app (dev)

Go to folder `Innowise-Lab-Internship-Level-2-Mini-paint`

Command `npm install` in console

Command `npm start`

## How to run the app (build)

Go to folder `Innowise-Lab-Internship-Level-2-Mini-paint`

Command `npm build` in console

## Database snapshot

In this project there are 1 collection: `pics`.

Collection `pics` contains pictires and users, who draw this pictures and consists of next fields:

| Field name |   Type |      Example | Description                   |
| ---------- | -----: | -----------: | ----------------------------- |
| picData    | string |              | DOMString containing data URL |
| user       | string | lisa@mail.ru | User email                    |

## Application stack

React

React-app-rewire-alias

React-app-rewired

React-dom

React-redux

React-redux-dom

React-redux-firebase

Redux

Redux-actions

Redux-firestore

Redux-saga

Firebase

Styled-components

Typescript

Reselect

Bootstrap-icons

Eslint

## Project structure

`src/components` - folder contains all components. Every component is in separate folder. All components named in kebab-case.prefix.extension and has extension .tsx. Every folder contains component file, style file and export file.

`src/core` - folder contains elements which related to Redux

`src/core/actions` - folder contains .ts files with actions

`src/core/hooks` - folder contains .ts files with hooks every in separate folder

`src/core/interfaces` - folder contains .ts files with interfaces

`src/core/reducers` - folder contains .ts files with reducers

`src/core/saga` - folder contains .ts files with sagas

`src/core/selectors` - folder contains .ts file with selectors

`src/core/services` - folder contains .ts files with services(functions and methods) for work with Firebase authentications and Firestore database

`src/pages` - folder contains react components for router, every in separate folder, files with extension .tsx

`src/shared` - folder contains elements that different components use

`src/shared/components` - folder contains components that are used in many places

`src/shared/constants` - folder contains files with constants

`src/shared/helpers` - folder contains .ts files with functions and methods that different components use

`src/theme` - folder contains .ts files with themes for app
