import React, { Component } from 'react'
import Header from './Header'
import './App.css'

class App extends Component {
	constructor() {
		super()

		this.state = {
			isViewWorks: false,
			viewWorksText: 'See My Works'
		}

		this.handleViewWorks = this.handleViewWorks.bind(this)
	}

	handleViewWorks(e) {
		this.setState({
			isViewWorks: !this.state.isViewWorks,
			viewWorksText: this.state.isViewWorks ? 'See My Works' : 'Hide My Works'
		})

		this.fadeElements.forEach(each => (each.style.opacity = 0))
		setTimeout(() => {
			this.fadeElements.forEach(each => (each.style.opacity = 1))
		}, 500)
	}

	componentDidMount() {
		// DOM references
		this.fadeElements = document.querySelectorAll('.fade')
	}

	render() {
		return (
			<div>
				<Header
					onClick={this.handleViewWorks}
					isViewWorks={this.state.isViewWorks}
					viewWorksText={this.state.viewWorksText}
				/>
			</div>
		)
	}
}

export default App

// TODO:
// --- Create works pages for projects showcase.
// --- Use semantic's Card component for project's showcase.
// --- Animate with AOS animation.
// --- hook up with firebase DB and storage.
