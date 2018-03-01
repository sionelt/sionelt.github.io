import React, { Component } from 'react'
import Header from './Header'
import Projects from './Projects'
import './App.css'
import * as firebase from 'firebase'

class App extends Component {
	constructor() {
		super()

		this.state = {
			isViewWorks: false,
			viewWorksText: 'See My Works',
			homeData: {},
			projectsData: []
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
		this.returnArrowMobile.style.opacity = 0
		this.fadeElements.forEach(each => (each.style.opacity = 0))
		setTimeout(() => {
			this.fadeElements.forEach(each => (each.style.opacity = 1))
			this.projectsContainer.style.opacity = 1
			this.iconsNavMobile.style.opacity = 1
			this.returnArrowMobile.style.opacity = 1
		}, 500)
	}

	componentDidMount() {
		// DOM references
		this.fadeElements = document.querySelectorAll('.fade')
		this.projectsContainer = document.querySelector('.projects_container')
		this.iconsNavMobile = document.querySelector('.icons_nav')
		this.returnArrowMobile = document.querySelector('.return_arrow')

		// data reads from firebase DB
		firebase
			.database()
			.ref('/')
			.once('value')
			.then(snap => {
				this.setState({
					homeData: snap.val().home,
					projectsData: snap.val().projects
				})
				console.log(snap.val())
			})
	}

	render() {
		return (
			<div className="app_container">
				<Header
					header={this.state.homeData}
					onClick={this.handleViewWorks}
					isViewWorks={this.state.isViewWorks}
					viewWorksText={this.state.viewWorksText}
				/>
            <Projects
               projects={this.state.projectsData}
               isViewWorks={this.state.isViewWorks}
            />
			</div>
		)
	}
}

export default App

// TODO:
// --- zoom out active or selected project card.
// --- hook up with firebase DB and storage.
// --- add projects to it.
// --- deploy with github pages.
