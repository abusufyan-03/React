- Everything working fine

but Is our code clean?
is our code written in better way
Is there way to write better way of code?
Yesssss!!

we will also be getting indroduce to `custom hooks`  

Important concept of Computer science Engneering
- single responsibiltiy principle

- let's creat our own custom hook so in Restaurant menu we doing two things
    - fetching the restaurant menu data
    - displaying the fetched data

so what we will do is will create a custome hook for fetching the restaurantMenu data which will be only responsible for fetching the data and nothing else this will split our code in more modular way which is good way of writting code


part02

now we will build online/offline indicator feature
---------------
part04

why do we write always write "use" in custom hook

- it's a nameing convention so when a someone else read our code so he will get to know that it's a hooks which has it's own useState, life cycle, managing things in react way
-----------------
part05

now lets see how can we optimise our app even more

what is the problem with large application?

when our app grows their size become large which make a perfomace issue 

optimisation technique:
- chunking
- code splitting
- Dynamic bundeling
- lazy loading
- on demand loading
- dynamic import

to reduce the bundle size of our application we do chunking/code splitting

let's do lazy loading paractice

suppose we have a very large application (hypothetical situation) when we have a grocoery function which has a lot of stuff it's a whole another service which increase our bundle size so what we will do is we will chunk this service or we will split this service code into another file

let's first create a grocery component though rn it will have only one h1 tag but just suppose it's a whole another service which has a lot of component and all














- What I did:
- learned how to create custom hook
- single responsibility principle

improved my existed code by creating custom hook and splititng code into modular way

wrote a custom hooks for indicating offline/online onto the Header
implemented lazy loading for optimisation