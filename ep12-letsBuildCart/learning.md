# Redux

Let's see how can we
- create our own Redux store
- we manage state in our application using redux 
- manage data in redux

there is UI layer and data layer
- Redux work in data layer of our application

UI and data layer works in sync and builds our own react app

Redux works in data layer

we'll see how can we manage data effectivly using redux
we'll also see how can we put data retrive data from redux store

all those app which is built using redux can be build without redux

redux is not mandatory for small app which has few components only

we should use redux when our application is quite medium/large where a lot's of component are there and many component need some data
We need redux when keeping everthing sync feel painfull


Use redux wisely use only when required

Alternative:
Zustand

Redux offer easy debugging

Part 02:
We'll be using redux toolkit and react redux

part 03:
we'll be building cart; so in restaurant menu when we will click to a food then it should add to cart page

Let's see the architechture

What is redux store?
=> it's like a big js obj with a lot data inside it and it is kept in a global center place

Jorgan
- disPatcher
- calling reducer functio n

FLOW:
When we hit the add btn it dispatches the action which calls the reducer function which updates the slice of our redux store
(it's about to write data)
Why are we doing this? to makes thing easy which will get to know later

now let's see how to read data flow:
we will use selector and that selector will give the data in our header

last one jorgans:
subcribing to the store

We says Header component is subcribe to store and when we say subscibe to store it means it is sync with the store

if the data inside the store changes then header comonent will update automatically

How do we subscibe? 
using selector

part04:
let's now see in action

steps to do
- install @reduxjs/toolkit and react-redux
- build store
- connect our store to our app
- slice(cartSlice)
- dispatch(action)
- Selector

# Redux Example:
let's create appStore file inside utitls

```js
/* 
we will use configureStore function
*/

import{ configureStore} from "@reduxjs/toolkit";
// this fun will give us store to our react applicatoin

const appStore = configureStore({

}); 

export default appStore;

/* for now we have just created our store now let's provide this store to our component 

Now go to the app.js file 
now we need to provide our store to our application to do that
we will need provider 
so import provider from react-redux 

import Provider from react-redux
import appstore
Wrap whole app inside the Provider component

This Provider componen will take store as props where we will pass appStore that we just imported

*/

<Provider store={appStore}> 
    <Header />
    <Outlet />
<Provider/>


import {createSlice} from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name: "cart",
    initialState = {
        items: []
    },
    reducers: {
        addItem: (state, action) =>{
            state.items.push(action.playload);
        },
        removeItems: (state, action) =>{
            state.items.pop();
        },
        clearCart: (state, action) =>{
            state.items.length = 0; //[]
            state = [] // will not work
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.action;
export default cartSlice.reducer;

/* Now as we built this slice now we will add this slice to our store */
```

```js
/* appstore.js */

import{ configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "./cartSlice";
const appStore = configureStore({
    reducer: {
        cart: cartReducer
    }
}); 

export default appStore;

```