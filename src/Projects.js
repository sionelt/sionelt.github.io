import React from 'react'
import './Projects.css'

const Projects = ({ projects, isViewWorks }) => (
	<div className="projects_container" style={{ display: isViewWorks ? 'block' : 'none' }}>
		<ul className="projects_list">
			{projects.map(project => (
				<li key={project.name}>
					<div className="project_card">
						<div
							className="project_img_holder"
							style={{ backgroundImage: `url(${require(`${project.image}`)})` }}
						/>
						<div className="project_content">
							<h4>{project.name}</h4>
							<h5>{project.stackUsed}</h5>
							<p>{project.description}</p>
							<div className="project_btn_group">
								<a href={project.repo} className="project_repo">
									<i className="fab fa-github fa-lg" /> Code
								</a>
								<a href={project.demo} className="project_repo">
									<i className="fas fa-play-circle fa-lg" /> Demo
								</a>
							</div>
						</div>
					</div>
				</li>
			))}
		</ul>
	</div>
)

export default Projects

