import React from 'react'
import PropTypes from 'prop-types'

const SaveMessage = ({ isSaving }) => (
    isSaving !== null && isSaving !== undefined && (
        <p className='save'>
            {isSaving? 'Salvando...' : 'Salvo!'}
        </p>
    )
)

SaveMessage.prop = {
    isSaving: PropTypes.bool
}

export default SaveMessage
