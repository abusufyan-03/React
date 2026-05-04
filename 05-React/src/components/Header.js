const logoUrl = new URL("../assets/img.png", import.meta.url).href;

export const Header = () => {
    console.log("logo value: ", logoUrl)
    return (
        <header className="header">
            <nav className="navbar">
                <img className="logo" src={logoUrl} />
                <ul className="nav-items">
                    <li>Home</li>
                    <li>Foods</li>
                    <li>About Us</li>
                    <li>Contact US</li>
                </ul>
            </nav>
        </header>
    )
}

/* export default Header */