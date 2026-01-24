/* const heading = React.createElement(
    'h1', 
    {id: "heading", xyz: 'abc'}, 
    'Hello world form react'
);

console.log(heading) // it doesn't give the HTML Element */
/* 
It gives us the React H1 Element 
and what is React Element?
React Element is nothign but a js object

it has also something known as props
props are children + attribute that we pass in
*/

/* const root = ReactDOM.createRoot(document.getElementById('root')); */

/* root.render(heading);  */
/* 
here we are passing the React Element/obj
render methdo is basically will be responsible to take this obj and put it up convert it into heading tag and put it into the DOM
*/

/* 
Reacts gives super powerfull ways to manipulates DOM

the most costly operation in the Web Page is when we do something, when our webpage is interactive so, the most costly operation is when the DOM nodes need to manupulated

Suppose there is a webpage and you click the button and soemthign shown in hte page someting hide in the page so what's happening is the DOM tree is getting change that is the most expensive operaion that putting some node inside the DOM and removing form the DOM it's a costly opration and all the library is trying to optimize it React also comes wtih the phylosphy that whenever you need to do anything on a webpage do it using JS that is why React gives us this helper funtion to make this things work in a very effiecient way   

*/

/* 
The 2nd argument in the  createElement function is where we pass attribute to the created Elements
*/

/* 
part: 04
How do we create nested Element?
like:
<div id parent>
  <div id child> 
    <h1> I'm an H1 tage</h1>
    <h2> I'm an H2 tage</h2>
  </div>
</div>

ReactElement is an object that becomes HTML that browser understand
*/



/* const parent = React.createElement(
    'div', {id: 'parent'},
    React.createElement(
    'div', {id: 'child'}, 
    React.createElement('h1', {}, "I'm an H1 tag")
));
console.log(parent)
root.render(parent) */

// case: 02
/* How do we add sibling inside the child div simply by passing an array */

/* const parent = React.createElement(
    'div', { id: 'parent' },
    React.createElement('div', { id: 'child' }, [
        React.createElement('h1', { id: 'h1' }, "I'm an H1 tag"),
        React.createElement('h2', { id: 'h2' }, "I'm an H2 tag")
    ])
    // if we give children as an array it will come in the same level
);
const root = ReactDOM.createRoot(document.getElementById('root'));

console.log(parent)
root.render(parent) */

/*
 we got the Warnign in the console that will be fixed later let's not focus right now

 as for now just understand this if you have to give two elements as the sibling then what you need to do is?
 => you have to basically create an array of children not just one children
 */

// case: 03
/*
Now suppose we have to create a more nested Element 
like:
<div id=parent>
    <div id=child> 
   <h1> I'm an H1 tage</h1>
   <h2> I'm an H2 tage</h2>
    </div>

    <div id=child> 
   <h1> I'm an H1 tage</h1>
   <h2> I'm an H2 tage</h2>
    </div>
</div>
*/
/* 
how do we create?
*/
const parent = React.createElement(
    'div',
    { id: 'parent' },
    [React.createElement('div', { id: 'child' }, [
        React.createElement('h1', {}, 'H1 tag'),
        React.createElement('h2', {}, 'h2 tag')
    ]), React.createElement('div', { id: 'child2' }, [
        React.createElement('h1', {}, 'H1 tag'),
        React.createElement('h2', {}, 'h2 tag')
    ])]
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent)

/* 
Now that's code look very complicated and hard to read that's why there something known as JSX 

The myth is people only think they can write React only inside JSX but the core react is what we have written ubove which complex and hard to read and to over come form this we have JSX

JXS will make our life easy when have to create tags (we'll learn about JSX in the next time )

This is the last time that we are creating our tag using React.createElement() bye bye React.createElement we will no longer using React.createElement

but that was the core React this is how we create HTML tag using core react

The core React is what we wrote ubove but we're going to use JSX that will make our life easy
*/

/* 
// part 05:

In HTML file

make sure to have first two CDN link for react then this file app.js order matters 

if we take the app.js script ubove the CDN link then it will throw Error the CDN link should be first the order of file should be sequence

- Have curiosity  

- if we write anything insdie root div it will be replace by root.render(parent)

So, what happens is first of all when the browser reads our HTML so it will print whatever we have inside root div (eg. Sasuke Uchiha) in the  but as soon as it goes to script it will load React, it load React into our app then it will load ReactDOM into our app when it reaches React DOM CDN link then it will go to app.js it will load our app.js into our app then it will start executing code line by line and when it will reach the line 
root.render()
it will just render that parent inside root div then it will just replace whatever we are passing 

Note: it render not append

What if we write Hello word ubove root div and below root div will it get replace? 

No it will not get replace root.render() only render inside root div it does not effect other part of HTML other part of html will work as usual 

And this is why we call React as a library also

There is a two terms 
- library 
- framework

what are the difference between them?
=> React is a library cause it can work even any small portion of the code just a div, header, sidebar, navBar it's not a full fledge framework

=> a framework is which comes all loads of things React is minimal js library it is just some piece of js code which is written by Facebook developer

In the end of the day React is just a Javascript

it is just given us some helper method that we need to use to develop fast application and we can do that in a small portion of code this is not the case w ith other framework not all framework are like this

all framework will require you to create a whole app using that framwork but react can work existing app as well
*/


