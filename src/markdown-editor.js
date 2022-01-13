import React from 'react';
import PropTypes from 'prop-types'

const MarkdownEditor = ({ value, handleChange, getMarkup }) => {
  return (
    <div className='editor'>
      <form>
        <textarea 
          value={value} 
          onChange={handleChange} 
          autoFocus
        />
      </form>
      <div className='view' dangerouslySetInnerHTML={getMarkup()} />
    </div>
  )
}

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
}

export default MarkdownEditor