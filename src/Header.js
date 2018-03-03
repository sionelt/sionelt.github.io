import React from 'react'
import './Header.css'


const IconsNav = ({ navIcons=[], styles }) => (
	<ul className={styles}>
		{navIcons.map(nav => (
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
)

const Header = ({ header, onClick, isViewWorks, viewWorksText }) => (
	<div className={isViewWorks ? 'header_fixed_wrapper_left' : 'header_fixed_wrapper_center'}>
		<div
			onClick={onClick}
			className={`return_arrow ${
				isViewWorks ? 'return_arrow_mobile_view' : 'return_arrow_mobile_hide'
			}`}
		>
			<i className="fas fa-arrow-left fa-lg" />
		</div>
		<IconsNav styles={`icons_nav ${isViewWorks ? 'icons_nav_mobile' : 'icons_nav_desktop'}`} />
		<div
			className={`header_container ${
				isViewWorks ? 'header_container_left' : 'header_container_center'
			}`}
		>
			<div className="fade">
				<h4>Malo lelei (hi), I'm &mdash;</h4>
				<h1>Sione Tafengatoto</h1>
				<h4 style={{ textAlign: 'right' }}>&mdash; {header.title}</h4>
			</div>
			<div
				className={`fade ${
					isViewWorks ? 'header_subheading_left' : 'header_subheading_center'
				}`}
			>
				<p>
					I'm originally from Tonga, living in Provo, UT. {header.currentJob} and a junior at
					BYU Provo.&nbsp;
					<mark> {header.highlight} </mark>
					&nbsp;Check out my works. <br />
					<span style={{ color: 'yellow' }}>
						Current stack of expertise: <br />
						{header.stacks}
					</span>
				</p>
			</div>
			<hr
				className={`fade divider ${isViewWorks ? 'divider_left' : 'divider_center'}`}
				align={`${isViewWorks ? 'left' : 'center'}`}
			/>
         <IconsNav
            navIcons={header.navIcons}   
				styles={`fade icons_nav ${isViewWorks ? 'icons_nav_left' : 'icons_nav_center'}`}
			/>
			<button className="fade link_to_works" onClick={onClick}>
				<h3>{viewWorksText}</h3>
				<i className="fas fa-angle-right fa-lg" />
			</button>
		</div>
	</div>
)

export default Header
