import React from "react";
import ReactDOM from "react-dom/client";

/* 
//  React Element is like HTML Element but not exactly HTML Element

const heading = React.createElement(
    'h1',
    {id: 'heading'}, 
    'Hello React 🚀'
); 

// it's not a HTML Element
// it creates an js obj 
// when we render this into the DOM then it becomes the HTML Element

const root = ReactDOM.createRoot(document.getElementById('root'));

// - this will become the Root for out React app
// - whatever happens inside the react will happens inside the root
// - if we render something it will happen inside root

root.render(heading);


// - React.createElement creates an obj and when we do root.render() this powerfull library ReactDOM takes this obj and converts it into HTML and pushed it to browser

// NOTE: it will replace everthing with the given argument not append. IT REPLACES 
 */


//-------------------------------------------
/* 
part: 03
*/

/* const heading = React.createElement(
    'h1',
    { id: 'heading' },
    'Hello React 🚀'
);
 */

/* 
- this is not a good way it's very annoying the syntax is terrible  
- when react was built that was the core react that's how we were creating our tag but soon developer realize this is not good way to create html element, it's hard to read, it's not dev friendly
- to help to dev community they create JSX
- JSX is javascript syntax which is used to create HTML Element
myth: 
- ppl think JSX is a part of react | Noooooo
- lots of developer feel React can not be written without JSX
-----
- React is different JSX is different
- we can write React without JSX also
- we can build all the big application without JSX also
- but the JSX makes our life easy 

*/
// console.log(heading);

// JSX
/* 
what is JSX
- how we were building our web apps back then? 
basically there was only html and js and to add interactivity we used to write js logic for it right? so what these framework does is it tries merges things up (HTML & JS) so that we can do same things in same file

- somewhere html is related to js so JSX even React is a convention where we kind of merge html and js together
........

*/
// const jsxHeading = <h1 id="heading">Hello React using JSX</h1> 
/* 
- JSX is not HTML inside JS this is JSX 
- JSX is HTML-like syntax
- JSX - HTML-like or XML-like syntax
- JSX is not HTML inside JS

- this is React Element using JSX | JSX and React are different 



*/

// console.log(jsxHeading);
/* z
- we got an obj just like we were getting for `heading` it's no differece at all 
- JSX is dev friendly it's just make our life easy

- heading and jsxHeading is one and the same thing

- this one look much clear and cleaner than `React.createElement` 
*/

/* const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading) */

/* 
Does this code: 
```
const jsxHeading = <h1 id="heading">Hello React using JSX</h1> 
```
a valid js?

Yes or no

- it's not the valid js it's not a valid js
- js does not come JSX built inside it

- any piece of js code only js engine understands it
- does js engine understand ubove code? noooooo why?
cause js engine only understand ecmaScript 

Then how it's working? how it's able to get the H1 in the page
- it's the parcel that doing it
- a tool like Babel/Parcel transforms it into a normal JS 

// JSX - (transpiled before it reaches the JS Engine)

Let's see how React ELements works 
React.createElement => ReactElement-JS Object => HTMLElement(render)

// JSX
- It's converts it into React.createElement => ReactElement-JS Object => HTMLELement(render)

- behind the scene JSX is React.createElement 

- it's all thanks to babel
- Babel takes all of our JSX code and convert it into React.createELement and now React understand Reac.createElement now it can render jsxHeading properply
That's how our code is running behind the scene

GOOO on babeljs.org and play with it see how it's converting it

- some older browser doesn't understand ES6 The newer version of js
- babel transpiled that ES6 code to a code that older browser understand it

what is bebel?
- bebel is just a js piece of code it's a js library  npm which takes a piece of code read that code and then convert that code to something else
*/


/* 
Let's see how it's not an HTML
```
const jsxHeading = <h1 id="heading">Hello React using JSX</h1> 
```

- It's a JSX not an HTML
- It's an HTML and JS mix kind of

let's prove how it's not an HTML

How do we add class attribute to an element?
simply by adding `class="root"` attribute to an html element

But here in JSX we  have give class then we have something like `className` attribute there is a slight difference B/W JSX and HTML and we need to know this
*/

/* const heading2 = <h1 className="head" tabIndex="1">Hello React From JSX</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading2) */

/* 
if you have to give any attribute then we write it with camelCase

- it's very similar to HTML but not an HTML

*/

/* 
const heading2 = (
    <h1 className="head"
        tabIndex="1">Hello React From JSX
    </h1>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading2) 
*/

/* 
* JSX => bebel transpiled it to React.createElement => ReactElement-JS Object => render HTMLElement
*/

// ? part: 04 15/12/25

const heading = (
    <h1 className="head"
        tabIndex="1">Hello React From JSX
    </h1>
);

/* 
React Component:
- Class Based Componenet - OLD
- Functional Based Component - NEW 

? React Functional Component:
- it's just normal js function
*/
const HeadingComponent = () => {
    return <h1>Hello React Functional Component</h1>;
    
    // - a function that return some peice of jsx code is functional component 
    // - a function that return React Element  
   
}
//or

/* const Title = () => (
    <h1 className="head" tabIndex='5'>
        Hello React using JSX hEADING
    </h1>
)
const HeadingComponent2 = () => (
    <div id="container">
        <Title/>
        <h1 className="heading">Hello React Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent2/>)  */


/* 
This is how we render a component

- and this is also known as component composition when we compose one component into another componenet
*/

/* 
? part: 05

- we can also use normal function instead of regular function 
*/

/* const elem = (
    <span>This is a span element</span>
) */

const Title = () => (
    <h1 className="head" tabIndex='5'>
        Hello React using JSX 
    </h1>
);
// const data = api.getData();

const HeadingComponent2 = () => (
    <div id="container">
        { /* {data} 
         suppose that api return some malicious code that let 
         an attacker to execute any js code that can be very harmful 
         for the user but here jsx takes care of it it kinds of sanitize 
         the data then run it, it prevents the cross site scripting attack  
         */}

         {Title()}
         <Title></Title>
         <Title/>
        <h1 className="heading">Hello React Component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent2/>)

/* 
- inside a component we can write any js expression but only inside curly braces {}
- even console.log will work
*/