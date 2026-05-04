import React from 'react'

class UserClass extends React.Component {
    constructor(props){
        super(props);
        // console.log(props);

        this.state = {
            /* count: 0,
            count2: 2 */
            userInfo: {
                name: "dummy",
                location: "dummy location"
            }
        }
        // console.log( this.props.name + "Child Construtor")
    }

    async componentDidMount(){
        // console.log( this.props.name + "Child Component did Mount")
        const data = await fetch('https://api.github.com/users/abusufyan-03');
        const json = await data.json();
        console.log(json)

        this.setState({userInfo: json})
    }
    render() {
        // const {name, location} = this.props;
        // const {count, count2} = this.state;
        // console.log( this.props.name + "child render");

        const {name, location, avatar_url, twitter_username} = this.state.userInfo;

        return (
            <div>
                {/* <h1>COUNT: {count}</h1>
                <button onClick={()=>{
                    // NEVER UPDATE STATE VARIABLE DIRECTLY
                    this.setState({
                        count: count + 1
                    })
                }}>Count Increase</button> */}
                <img src={avatar_url} width={100} />
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <h2>twitter_username: @{twitter_username}</h2>
            </div>
        )
    }
}

export default UserClass;
