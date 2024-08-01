import style from "./Navigation.module.css"

const Navbar = () => {
    // console.log(style);
    return (
        <>
            <nav className={`${style.navigation} container`}>
                <div>
                    <img src="/images/Frame 2 1.png" alt="logo" />
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
};

export default Navbar;