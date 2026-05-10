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
built only one accordian open at a time feature

---

part02 | part 04

# React context

in React we pass data from parent to child

read about what is prop drilling

How to create a react context?
=> create a(UserContext) file and import `createContext` from `React`
=>

```js
const UserContext = createContext({
  loggedInUser: "Default User",
});
```

How do you use react context?
import context hook called `useContext` then
const {loggedInUser} = useContext(UserContext)
now you got the data

Now how do we read reactContext inside a class-base component?
using :

```js
<UserContext.Consumer>
  {({ loggedInUser }) => {
    <h1>{loggedInUser}</h1>;
  }}
</UserContext.Consumer>
```

it takes a callback function and that callback function gives us the accesss of userContext

# how to modify the react-context

```js
// app.js

const AppLayout = () => {
    const [userName, setUserName] = useState()

    useEffect(()=>{
        const data = {
            name: "Abu Sufiyan"
        }
        setUserName(data.name)
    }, [])
    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <>
        <Header />
        <Outlet/>
        </>
        </UserContext.Provider>

    )
}

// body.js
import UserContext, {useContext} from "../utils/UserContext";
    const {setUserName} = useContext(UserContext)
    <input 
    placeholder="react-context-ex"
    className="p-2 border rounded-lg ml-2" 
    onChange={(e)=>{setUserName(e.target.value)}}
    />

```
