import React from 'react';
import PropTypes from 'prop-types'
import Aside from '../components/markdown-editor/aside';

const MarkdownEditor = ({ value, handleChange, getMarkup, textareaRef, ...props }) => {
  return (
    <section className='editor'>
      <Aside {...props} handleChange={handleChange} />
      <textarea 
        value={value} 
        onChange={handleChange('value')} 
        ref={textareaRef}
        autoFocus
      />
      <article 
        className='view' 
        dangerouslySetInnerHTML={getMarkup()} 
      />
    </section>
  )
}

MarkdownEditor.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  getMarkup: PropTypes.func.isRequired,
  textareaRef: PropTypes.func.isRequired
}

export default MarkdownEditor