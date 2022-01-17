import React from 'react'
import Button from './button'
import SaveMessage from './save-message'

function MarkdownEditorAside({ isSaving, handleRemove, handleCreate }) {
    return (
        <aside>
            <h1>MarkdownEditor</h1>
            <SaveMessage isSaving={isSaving} />
            <Button onClick={handleCreate} kind='primary' >
                Criar novo
            </Button>
            <Button onClick={handleRemove} kind='remove' >
                Remover
            </Button>
            <ul>
                <li className='active'>Arquivo 1</li>
                <li>Arquivo 2</li>
                <li>Arquivo 3</li>
            </ul>
        </aside>
    )
}

export default MarkdownEditorAside
