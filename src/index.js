import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

// For React-particles canvas
const div = document.createElement('div')  
ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.unmountComponentAtNode(div)
registerServiceWorker()
