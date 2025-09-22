import "../stylesheets/navbar.css";
function Navbar() {
    return(
        <nav className="navbar">
            <a className="item" href="/blog/#/"><h1>My Website</h1></a>
            <a className="item" href="/blog/#/"><h2>Start</h2></a>
            <a className="item" href="/blog/#/blogoverview"><h2>Blog</h2></a>
        </nav>
    );
}
export default Navbar;