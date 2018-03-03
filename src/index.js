import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import * as firebase from 'firebase'

const config = {
	apiKey: 'AIzaSyAnyt9SQ_0Bqd1SnG0zrQ4DObQuSyulnNU',
	authDomain: 'sionelt-af508.firebaseapp.com',
	databaseURL: 'https://sionelt-af508.firebaseio.com',
	projectId: 'sionelt-af508',
	storageBucket: 'sionelt-af508.appspot.com',
	messagingSenderId: '115412098260'
}
firebase.initializeApp(config)

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
