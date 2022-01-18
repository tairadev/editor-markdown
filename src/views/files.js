import React from 'react'
import PropTypes from 'prop-types';

function Files({ files, handleOpenFile }) {
    return (
        <ul>
            {Object.keys(files).map((id) => (
                <li className='active' key={id}>
                    <button onClick={handleOpenFile(id)}>{files[id].title}</button>
                </li>
            ))}
        </ul>
    )
}

Files.propTypes = {
    files: PropTypes.object.isRequired,
    handleOpenFile: PropTypes.func.isRequired
}

export default Files
