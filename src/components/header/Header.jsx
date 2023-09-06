import Logo from "./Logo";
import Navigation from "./Navigations";
import Cart from "./Cart";
import Profile from "./Profile";
import FixFloat from "./FixFloat";
function Header() {
    return (
        <>
            <header>
                <Logo />
                <Navigation />
                <Cart />
                <Profile />
                <FixFloat />
            </header>
        </>
    )
}
export default Header;