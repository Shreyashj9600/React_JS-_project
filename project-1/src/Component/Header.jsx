const Header = () => {
    return (
        <>
            {/* Header Part */}
            <nav>
                <div className="logo">
                    <img src="Image/brand_logo.png" alt="header-logo" />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>
                </ul>
                <button>Login</button>
            </nav>
        </>
    )
};
export default Header;