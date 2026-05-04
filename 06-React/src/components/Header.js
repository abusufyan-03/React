import { useEffect, useState } from "react";

const logoUrl = new URL("../assets/img.png", import.meta.url).href;

export const Header = () => {
    // console.log("logo value: ", logoUrl)

    // let loginbtn = 'Login'

    const [loginbtn, setLoginBtn] = useState("login")

    useEffect(()=>{
        console.log("Header useEffect")
    },[])
    return (
        <header className="header">
            <nav className="navbar">
                <img className="logo" src={logoUrl} />
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Foods</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                    <button className="login-btn" onClick={() => {
                        loginbtn==='login'? setLoginBtn('logout'): setLoginBtn('login')
                    }}>{loginbtn}</button>
                </ul>
            </nav>
        </header>
    )
}

/* export default Header */