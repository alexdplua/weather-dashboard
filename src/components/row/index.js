import React from 'react';
import PropTypes from 'prop-types';

const Row = ({
                 children,
                classOfChild
             }) => {
    return (
        <div className="row">
            <div className={classOfChild}>
                {children}
            </div>
        </div>
    )
}

export default Row

Row.propTypes = {
    children: PropTypes.any,
    classOfChild: PropTypes.string
}
