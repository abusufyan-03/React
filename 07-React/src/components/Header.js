import { useEffect, useState } from "react";
import { useState } from "react";
import {Link} from "react-router"

const logoUrl = new URL("../assets/img.png", import.meta.url).href;

export const Header = () => {

    // let loginbtn = 'Login'

    const [loginbtn, setLoginBtn] = useState("login")

    useEffect(()=>{
        console.log('useEffect called')
    },[])
    // *if no dependency array => useEffect will call whenever component render
    // * if dependency array is empty => useEffect will call only once initial
    // * if dependency array [loginBtn] => useEffect will be called whenever that state will update
    return (
        <header className="header">
            <nav className="navbar">
                <img className="logo" src={logoUrl} />
                <ul className="nav-items">
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <button className="login-btn" onClick={() => {
                        loginbtn==='login'? setLoginBtn('logout'): setLoginBtn('login')
                    }}>{loginbtn}</button>
                </ul>
            </nav>
        </header>
    )
}

/* export default Header */