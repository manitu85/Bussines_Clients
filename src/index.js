import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// For React-particles
const div = document.createElement('div')  
ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.unmountComponentAtNode(div)
registerServiceWorker()
