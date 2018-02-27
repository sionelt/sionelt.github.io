import React from 'react'
import './Projects.css'

const Projects = ({ isViewWorks }) => (
	<div className="projects_container" style={{ display: isViewWorks ? 'block' : 'none' }}>
		<ul className="projects_list">
			{PROJECTS_DETAILS.map(project => (
				<li key={project.name}>
					<div className="project_card">
						<div
							className="project_img_holder"
							style={{ backgroundImage: `url(${require(`${project.image}`)})` }}
						/>
						<div className="project_content">
							<h4>{project.name}</h4>
							<h5>{project.stack}</h5>
							<p>{project.description}</p>
							<div className="project_btn_group">
								<button className="project_repo">
									<i className="fab fa-github fa-lg" /> Code
								</button>
								<button className="project_repo">
									<i className="fas fa-play-circle fa-lg" /> Demo
								</button>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	</div>
)

export default Projects

const PROJECTS_DETAILS = [
	{
		image: './assets/calculatorApp.png',
		name: 'Calculator App',
		stack: 'Reactjs, AOS Animation',
		description:
			'A cloned of the iphone default calculator app but with addition features; CE button, scrollable top display for all entries and navigation arrows for top display.',
		repo: '#',
		demo: '#'
	},
	{
		image: './assets/calculatorApp.png',
		name: 'Calculator App',
		stack: 'Reactjs, AOS Animation, Firebase',
		description:
			'A cloned of the iphone default calculator app but with addition features; CE button, scrollable top display for all entries and navigation arrows for top display.',
		repo: '#',
		demo: '#'
	},
	{
		image: './assets/calculatorApp.png',
		name: 'Calculator App',
		stack: 'Reactjs, AOS Animation, Firebase',
		description:
			'A cloned of the iphone default calculator app but with addition features; CE button, scrollable top display for all entries and navigation arrows for top display.',
		repo: '#',
		demo: '#'
	},
	{
		image: './assets/calculatorApp.png',
		name: 'Calculator App',
		stack: 'Reactjs, AOS Animation, Firebase',
		description:
			'A cloned of the iphone default calculator app but with addition features; CE button, scrollable top display for all entries and navigation arrows for top display.',
		repo: '#',
		demo: '#'
	}
]
