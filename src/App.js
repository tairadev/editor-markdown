import { Component } from 'react';
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css'
import { marked } from 'marked';
import MarkdownEditor from './views/editor';

import 'normalize.css'

marked.setOptions({
  highlight: (code, lang) => {
    if(lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code).value
    }
    return hljs.highlightAuto(code).value
  }
})

class App extends Component {

  constructor() {
    super()
    
    this.clearState = () => ({
      value: '',
      title: '',
      id: this.randomKey()
    })

    this.randomKey = () => {
      return Math.floor(100000 + Math.random() * 900000) + '-' + Math.floor(100000 + Math.random() * 900000) + '-' + Math.floor(100000 + Math.random() * 900000)
    }
    
    this.state = {
      ...this.clearState(),
      isSaving: null,
      files: {}
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.handleChange = (field) => (e) => {
      this.setState({
        [field]: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      if(this.state.isSaving) {
        const files = {
          ...this.state.files,
          [this.state.id]: {
            title: this.state.title || 'Sem título',
            content: this.state.value
          }
        }
        localStorage.setItem('markdown-editor', JSON.stringify(files))
        this.setState({ 
          isSaving: false,
          files
        })
      }
    }

    this.handleRemove = () => {
      const { [this.state.id]: id, ...files } = this.state.files
      localStorage.setItem('markdown-editor', JSON.stringify(files))
      this.setState({ files })
      this.createNew()
    }

    this.handleCreate = () => {
      this.createNew()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }
  
    this.handleOpenFile = (id) => () => {
      this.setState({
        title: this.state.files[id].title,
        value: this.state.files[id].content,
        id
      })
    }
  }

  componentDidUpdate() {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 250)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  componentDidMount() {
    const files = JSON.parse(localStorage.getItem('markdown-editor'))
    this.setState({ files })
  }
  
  render() {
    return (
      <MarkdownEditor 
        value={this.state.value} 
        handleChange={this.handleChange} 
        getMarkup={this.getMarkup}
        isSaving={this.state.isSaving}
        handleRemove={this.handleRemove}
        handleCreate={this.handleCreate}
        textareaRef={this.textareaRef}
        files={this.state.files}
        handleOpenFile={this.handleOpenFile}
        title={this.state.title}
      />
    );
  }
}

export default App;
