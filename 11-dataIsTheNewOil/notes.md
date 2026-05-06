EP-11 part 01

Let's learn a important topic in react which is known Higher order component

Let's see:
what is higher order component
why do we need it?
where do we use it?
how do we use it?

What is higher order component?
=>a higher order component is a function that takes a component and return a component

Takes a componenet as an input and enhance it, it adds some extra feature then return it

it is the function that takes the original compoent and return the new enhanced component

What we are going to do?
=> if we go to swiggy website then we can see there are some res card which has a `promoted` label 

so we will try build the simlar featuer all are same card but only some has promoted label according to data

so to acheive this we will use `higher order component` which will take a new component and will enhanced and then will return the new component iwith added functionality 

first create a higher order component

```js
const withPromotedLabel = (RestaurantCards) =>{
    return(props)=>{
        return(
            <>
            <lable>Promoted</label>
            <RestaurantCard {...props}/>
        )
    }
}

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

{restuarnant.data.promoted? (
    <RestaurantCardPromoted resData={restaurant} />
): (
    <RestaurantCards resData={restaurant}>
)
}
```

part 02

what is controlled and uncontrolled components
lifting the state up
