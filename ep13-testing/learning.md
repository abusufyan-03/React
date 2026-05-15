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
- Install bebel dependecies
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

