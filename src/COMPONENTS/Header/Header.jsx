import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className="header">
            {/* logo */}
            <Link to="/">
                <img className="header_logo" src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="amazon_logo" />
            </Link>

            {/* search box */}
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className="header_searchIcon" />
            </div>

            {/*3 links  */}
            <div className="header_nav">
                {/* 1st link */}
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="header_option_one">Hello,</span>
                        <span className="header_option_two">Sign In</span>
                    </div>
                </Link>

                {/* 2nd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_option_one">Returns</span>
                        <span className="header_option_two">& Orders</span>
                    </div>
                </Link>

                {/* 3rd link */}
                <Link to="/" className="header_link">
                    <div className="header_option">
                        <span className="header_option_one">Your</span>
                        <span className="header_option_two">Prime</span>
                    </div>
                </Link>

                {/* Basket icon with number */}
                <Link className="header_link" to="/checkout">
                    <div className="header_optionBasket">
                        <span className="shoppingBasket"><ShoppingBasketIcon /></span>
                        <span className="header_option_two header_basketCount">0</span>

                    </div>
                </Link>
            </div>



        </div>

    )
}

export default Header;
