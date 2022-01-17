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
      id: this.randomKey()
    })

    this.randomKey = () => {
      return Math.floor(100000 + Math.random() * 900000) + '-' + Math.floor(100000 + Math.random() * 900000) + '-' + Math.floor(100000 + Math.random() * 900000)
    }
    
    this.state = {
      ...this.clearState(),
      isSaving: null
    }

    this.createNew = () => {
      this.setState(this.clearState())
      this.textarea.focus()
    }

    this.handleChange = (e) => {
      this.setState({
        value: e.target.value,
        isSaving: true
      })
    }

    this.getMarkup = () => {
      return { __html: marked(this.state.value) }
    }

    this.handleSave = () => {
      if(this.state.isSaving) {
        localStorage.setItem(this.state.id, this.state.value)
        this.setState({ isSaving: false })
      }
    }

    this.handleRemove = () => {
      localStorage.removeItem(this.state.value)
      this.createNew()
    }

    this.handleCreate = () => {
      this.createNew()
    }

    this.textareaRef = (node) => {
      this.textarea = node
    }
  }

  componentDidUpdate() {
    clearInterval(this.timer)
    this.timer = setTimeout(this.handleSave, 500)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
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
      />
    );
  }
}

export default App;
