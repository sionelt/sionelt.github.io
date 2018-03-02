import React, { Component } from 'react'
import Header from './Header'
import Projects from './Projects'
import './App.css'
import * as firebase from 'firebase'

const Pending = () => (
	<div className="pending_container">
		<i className="fas fa-circle-notch fa-spin fa-5x" />
	</div>
)

class App extends Component {
	constructor() {
		super()

		this.state = {
			isViewWorks: false,
			viewWorksText: 'See My Works',
			dataIsPending: false,
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
      
      // initial opacities
		this.projectsContainer.style.opacity = 0
		this.iconsNavMobile.style.opacity = 0
		this.returnArrowMobile.style.opacity = 0
      this.fadeElements.forEach(each => (each.style.opacity = 0))
      
      //final opacities
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
      
      // pending spinner when there's no data
      this.setState({
         dataIsPending: true
      })

		// data reads from firebase DB
		firebase
			.database()
			.ref('/')
			.once('value')
			.then(snap => {
            this.setState({
               dataIsPending: false,
					homeData: snap.val().home,
					projectsData: snap.val().projects
				})
			})
	}

	render() {
		return (
			<div className="app_container">
				{this.state.dataIsPending ? <Pending /> : ''}
				<Header
					header={this.state.homeData}
					onClick={this.handleViewWorks}
					isViewWorks={this.state.isViewWorks}
					viewWorksText={this.state.viewWorksText}
				/>
				<Projects projects={this.state.projectsData} isViewWorks={this.state.isViewWorks} />
			</div>
		)
	}
}

export default App
