import React from 'react'
import PropTypes from 'prop-types'

function Button({ onClick, children, kind }) {
    return (
        <button onClick={onClick} className={`button -${kind}`}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    kind: PropTypes.oneOf(['primary', 'remove'])
}

export default Button
