import { Fragment } from "react";
import { Outlet } from "react-router-dom";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'


import './navigation.style.jsx';

import { signOutUser } from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationContainer, LogoContainer, NavLink, NavLinks } from "./navigation.style.jsx";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../components/store/user/user.selector";
import { selectIsCartOpen } from "../../components/store/cart/cart.selector";


const Navigation = () => {

    const currentUser = useSelector(selectCurrentUser)



    const isCartOpen = useSelector(selectIsCartOpen);

    return (
        <Fragment>
            <NavigationContainer>

                <LogoContainer to='/'>
                    <CrwnLogo className="logo" />
                </LogoContainer>

                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ?
                            (

                                <span className="nav-link" onClick={signOutUser}>
                                    {' '} SIGN OUT  {' '}
                                </span>
                            )
                            :
                            (
                                <NavLink to='/auth'>
                                    SIGN IN
                                </NavLink>
                            )
                    }

                    <CardIcon />
                </NavLinks>
                {
                    isCartOpen && <CartDropdown />
                }

            </NavigationContainer>
            <Outlet />
        </Fragment>
    )
}


export default Navigation;