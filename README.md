# Project for IPC Challange

This project is the solution for IPC Challange requirements.

# TEST MY SOLUTION

Application is up, you can access with this link: 

```sh
https://balan-pmr.github.io/ipc-challenge/
```

User and password for initial users are shared into an email.

# Application's Screenshots 

You can see some screenshots in the link below:
https://docs.google.com/document/d/e/2PACX-1vSflu92IBOUBmq6clthYVRfPEiEd6ML_8QMtTbFhmcwW1yI-hMJhm9_fBoHtUALuTFHCcV-9od3vDRH/pub

# LEVELS COMPLETED

LEVEL ONE: COMPLETED
LEVEL TWO: PARTIAL COMPLETED*

Note: Authentication by user and password is working in a mock api services, so be gently in order to test the login and admin operations. oAUTH 2 was evaluated but, because of the admin flows time could not be integrated.

# FEATURES
- This applications runs in local the same as in the url shared.
- It has a user/password authentication
- Full responsive app with the necessary CSS
- Timeout session after 2 minutos 
- Multiple category options to present IPC Data
- Multiple time filters to present IPC Data
- Multiples Grphs in order to compare all the categoris at the same time in the same range of time
- Administration page for updating password to locked users

# Technical Description

- This project was made with React and Typescript template with the next command:

```sh
npx create-react-app my-app --template typescript
```

- The reason for using TS was a very recomended to use in order to type data and is vere useful for testing and autocomplete into IDE.

- Application is using hooks, customHooks, context and fetch for API calls.
- Routing is configured in order to protect resources depending the rol (admin, non-


# Folder Description

- adapters: Ensure data will work with a typed template and not depending with a specific source, any other connection can be set here
- components: Components can be used in any part of the project
- context: List all the context hook using in the project
- models: Interfaces definitions for strong data typed used for Typescript
- pages: All the components for bussiness logic
- utils: Utils functions

# Testing

Before running this project is a must to execute App.test.tsx with the next command:

```sh
npm test
```

# Instructions on how to build/run the app

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

```sh
npm start
```

# External Libraries

```sh
 "chart.js": "^4.2.1"
```

# Enjoy!

Thanks for reading until the end, hope you like it!.

