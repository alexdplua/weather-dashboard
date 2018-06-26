import React from 'react';
import PropTypes from 'prop-types';

const Header = ({}) => {
    return (
        <div className="header">
            <nav className="navbar top-navbar navbar-expand-md navbar-light">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">
                        <b><img src="../../images/logo.png" alt="homepage" className="dark-logo"/></b>
                        <span><img src="../../images/logo-text.png" alt="homepage" className="dark-logo"/></span>
                    </a>
                </div>
            </nav>
        </div>

    )
}

export default Header

Header.propTypes = {
}
