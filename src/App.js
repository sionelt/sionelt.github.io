import React, { Component } from 'react'
import Header from './Header'
import Projects from './Projects'
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
		this.projectsContainer.style.opacity = 0
		this.iconsNavMobile.style.opacity = 0
		this.fadeElements.forEach(each => (each.style.opacity = 0))
		setTimeout(() => {
			this.fadeElements.forEach(each => (each.style.opacity = 1))
			this.projectsContainer.style.opacity = 1
			this.iconsNavMobile.style.opacity = 1
		}, 500)
	}

	componentDidMount() {
		// DOM references
		this.fadeElements = document.querySelectorAll('.fade')
		this.projectsContainer = document.querySelector('.projects_container')
		this.iconsNavMobile = document.querySelector('.icons_nav')
	}

	render() {
		return (
			<div className="app_container">
				<Header
					onClick={this.handleViewWorks}
					isViewWorks={this.state.isViewWorks}
					viewWorksText={this.state.viewWorksText}
				/>
				<Projects isViewWorks={this.state.isViewWorks} />
			</div>
		)
	}
}

export default App

// TODO:
// --- return arrow to header in mobile/tablet
// --- 
// --- Animate with AOS animation.
// --- hook up with firebase DB and storage.
