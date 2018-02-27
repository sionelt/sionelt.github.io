import React from 'react'
import './Header.css'

const Header = ({ onClick, isViewWorks, viewWorksText }) => (
	<div className={isViewWorks ? 'header_fixed_wrapper_left' : 'header_fixed_wrapper_center'}>
		<div
			className={`header_container ${
				isViewWorks ? 'header_container_left' : 'header_container_center'
			}`}
		>
			<div className="fade">
				<h4>Malo lelei (hello), I'm &mdash;</h4>
				<h1>Sione Tafengatoto</h1>
				<h4 style={{ textAlign: 'right' }}>&mdash; front-end developer</h4>
			</div>
			<div
				className={`fade ${
					isViewWorks ? 'header_subheading_left' : 'header_subheading_center'
				}`}
			>
				<p>
					I'm originally from Tonga, living in Utah. I'm currently a junior CS student at BYU. 
					I hope to make the world a better place with coding. <br />
					Current stack of expertise: <br />
					HTML5, CSS3, JS, jQuery, Reactjs, Redux, Nodejs, Expressjs
				</p>
			</div>
			<hr
				className={`fade divider ${isViewWorks ? 'divider_left' : 'divider_center'}`}
				align={`${isViewWorks ? 'left' : 'center'}`}
			/>
			<ul className={`fade icons_nav ${isViewWorks ? 'icons_nav_left' : 'icons_nav_center'}`}>
				{ICONS_NAV.map(nav => (
					<li key={nav.icon}>
						<a href={nav.url}>
							<i
								className={`${nav.icon} fa-lg icons_nav_item`}
								style={{ color: nav.color, padding: nav.size }}
							/>
						</a>
					</li>
				))}
			</ul>
			<button className="fade link_to_works" onClick={onClick}>
				<h3>{viewWorksText}</h3>
				<i className="fas fa-angle-right fa-lg" />
			</button>
		</div>
	</div>
)

export default Header

const ICONS_NAV = [
	{
		url: 'https://www.linkedin.com/in/sioneltafengatoto',
		icon: 'fab fa-linkedin-in',
		color: '#0077b5',
		size: '16px 18px'
	},
	{
		url: 'https://github.com/sionelt',
		icon: 'fab fa-github-alt',
		color: '#14171a',
		size: '16px 17px'
	},
	{
		url: 'https://medium.com/@sionelt',
		icon: 'fab fa-medium-m',
		color: '#00ab6c',
		size: '16px'
	},
	{
		url: 'https://twitter.com/sionelt',
		icon: 'fab fa-twitter',
		color: '#1da1f2',
		size: '16px'
	},
	{
		url: 'mailto:sltafengatoto@gmail.com',
		icon: 'fas fa-envelope',
		color: '#ea4335',
		size: '16px'
	}
]
