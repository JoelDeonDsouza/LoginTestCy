
# LoginTestCy 

A brief intro on "Cypress" is an end-to-end testing framework, mainly used for the setup test, run tests, record test, and so on. Thus this example test Login code uses cypress to run the login featured automation on the demo site.


![Logo](https://www.cypress.io/static/33498b5f95008093f5f94467c61d20ab/59c46/cypress-logo.webp)


## Deployment

To deploy this project run install npm init to the file. 
```bash
  npm init
```
Once completed install node.js to the project. 
```bash
  npm install node
```
Once installed the test framework run the command given below. 
```bash
  npm install cypress
```

## Running LoginTestsWith Cypress

To run tests, run the following command

```bash
  npx cypress open
```


## Documentation

[Cypress](https://docs.cypress.io/guides/overview/why-cypress)


## API Reference

#### Demo LoginPage

```http
  https://opensource-demo.orangehrmlive.com/index.php/auth/login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `/opensource-demo.orangehrmlive.com/index.php/auth/login` | `string` | **Required**. Demo API key, This is an cypress test run following automated Login |


## Optimizations-LoginTest.js-LoginTest2.js
In the folder, cypress contains another folder called integration which has two tests  LoginTest.js & LoginTest2.js.

The first test, Contains the process of how a login process is tested and recorded.

The second test, Contains How a user can Reset his her password.


