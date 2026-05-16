# Test cases

We are going to learn write test cases

before writting test cases let's see:

what do we need test cases
what's the importance of test cases
what are type of testing

There are so many type of testing
But we are only going to see develper testing 


let's see what are the different type of testing that a develper can do:
- manual testing

manual testing isn't effeicient cause suppose we do some changes in a pariticualr component it can reduce error in other component of out application cause a application as so many components that interact with eachother

even a single line of code can messup the whole application

when we work on small project we may not realize the importance of testing but when we are working with large produciton project then testing is a must thing

cause you will never know what code you're changing and what impact you're creatin in your application

types of developer testing:
- Unit testing
- integration testing
- end to end testing  - e2e testing
Unit testing:
we test our application in isolation just one component

integration testing:
we testin our application in few components that interact with eachother and perfom some task for example 
searhbox and body compenet is when we search somethign then we see some changes in body like getting the desred restaurants and when want to see if that thing is working or not then we need to to inegration testing 

end to end tesing - e2e testing:
when we test from landing to page to ending the page 


inthis episode we will focusing on only first two type of testing:


react testing comes in built with create create app but as we used parcel we need to set up testing for ourselves 


React testing library built on top of dom testing library

React testing library uses something known as jest

Jest is a standard way to write test cases when it comes to javascript

we need two thing react testing libary and jest into our apps

# setting up testing in our app
- install react testing library
- Install jest
- Install bebel dependecies (from jest docs)
- Configure Babel (from jest docs)
- Configure Parcel config file to use to disable default babel transpilation (from parcel docs )


now let's install the react testing library using this cmd:
`npm i -D @testing-library/react`


now install jest:
`npm i -D jest`


we are using jest along with bebel
so now we are going to install bebel
`npm install --save-dev bebel-jest @bebel/core @bebel/preset-env

now on the root level create a new file called
bebel.config.js
and copy this:
```js
module.exports = {
  presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};
// get this from jest docs

// we need to do this config cause we already have bebel with parcel that will conflict with jest bebel

// Go read about jest in parcel official docs
```

and as we have to use parcel in jest copy this into a file called .parcelrc in root
go to this url  
`https://parceljs.org/languages/javascript/#babel` read about this and paste the code in .parcelrc file (root me)
```js
{
  "extends": "@parcel/config-default",
  "transformers": {
    "*.{js,mjs,jsx,cjs,ts,tsx}": [
      "@parcel/transformer-js",
      "@parcel/transformer-react-refresh-wrap"
    ]
  }
}
```
this will allow other tools to continue using your Babel config, but disable Babel transpilation in Parcel.

Now do this ubove configuration for test and then we will write some test cases
----------------------------------------------------------------------------------------

let's write test cases
but before that we need to make one configuration which is a jest configuraion:

above steps + this
- jest configuration

cmd:
`npx create-jest `

What is jsdom?
the test cases doesn't run on chrome, browser so they need a environment to run

IT's not a browser but it gives a feature like a browser

NOW WE NEED TO INSTALL JSDOM LIBRARY

if we use use it with `react testing library`

if we are using jest version greater than 28 than you have to install the package `jest-environment-jsdom` separatly

now install the `jest-environment-jsdom` as well
using cmd:
`npm install --save-dev jest-environment-jsdom`

# Now let's write test cases:

let's first write test cases for basic js program

write sum funtion in sum.js file

now where do we write test cases it turned out that we have a dedicated folder for that:
`__tests__


if we have Header.test.js || Header.spec.js => test file
if we have a Header.js inside a __tests__ folder => test file
__(two underscore) => dundar method

writting test case for sum.js:

```js
import { sum } from "../sum"

test("sum function should calculate the sum of two numbers", ()=>{
    const result = sum(3, 4);

    //Assertion
    expect(result).toBe(7);
})
```

# now let's see how to write test case for React:

let's write test for contact component if it;s render or not

```js
import { render } from "@testing-library/react"
import Contact from "../Contact.js";


test("Should laod contact us component", ()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInDocument();
})


```
it will give one error:
`Support for the experimental syntax 'jsx' isn't currently enabled (6:12):`
we need to add:
` Add @babel/preset-react (https://github.com/babel/babel/tree/main/packages/babel-preset-react) to the 'presets' section of your Babel config to enable transformation.`

install `@babel/preset-react` to make jsx work in test cases
include `@babel/preset-react` inside my babel config

update babel.config.js file:
```js
module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', {runtime: 'automatic'}] //update
  
  ],
};
```

now let's run test case again: 

we will get error again
we need to install another library to be able to use `toBeInDocument`

Install:
`@testing-library/jest-dom`

updated contact.test.js file:
```js
import { render, screen } from "@testing-library/react"
import Contact from "../Contact.js";
import "@testing-library/jest-dom"


test("Should laod contact us component", ()=>{
    render(<Contact/>);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
})
```