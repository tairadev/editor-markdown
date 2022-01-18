import React from 'react'
import PropTypes from 'prop-types'
import Button from './button'
import SaveMessage from './save-message'
import Files from '../../views/files'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';

function MarkdownEditorAside({ title, isSaving, handleRemove, handleCreate, files, handleOpenFile, handleChange }) {
    return (
        <aside>
            <h1>MarkdownEditor</h1>
            <div className='title-container'>
                <label htmlFor='title'>
                    <FontAwesomeIcon icon={faPen}></FontAwesomeIcon>
                </label>
                <input type='text' name='title' id='title' placeholder='Digite o seu título...' onChange={handleChange('title')} value={title} />
            </div>
            <SaveMessage isSaving={isSaving} />
            <Button onClick={handleCreate} kind='primary' >
                Criar novo
            </Button>
            <Button onClick={handleRemove} kind='remove' >
                Remover
            </Button>
            <Files files={files} handleOpenFile={handleOpenFile} />
        </aside>
    )
}

MarkdownEditorAside.propTypes = {
    title: PropTypes.string.isRequired
}

export default MarkdownEditorAside
