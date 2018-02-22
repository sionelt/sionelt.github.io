import React from 'react'
import './Header.css'

const Header = () => (
   <div className="header_container">
      <div>
         <h4>Malo lelei (hello), I'm &mdash;</h4>
         <h1>Sione Tafegnatoto</h1>
         <h4 style={{ textAlign: 'right' }}>&mdash; front-end developer</h4>
      </div>
      <div className="header_subheading">
         <p>
            I hope to make the world a better place with coding. <br /> 
            Current stack of expertise: <br />
            HTML5, CSS3, JS, jQuery, Reactjs, Redux, Nodejs, Expressjs 
         </p>
      </div>
      <hr className="divider" />
      <ul className="icon_nav">
         {ICONS_NAV.map((nav)=>(
            <li key={nav.icon}>
               <a href={nav.url}><i className={`${nav.icon} fa-2x icon_nav_item`} style={{color: nav.color, padding: nav.size }}/></a>
            </li>
         ))}                
      </ul>
      <div className="link_to_works">
         <h3>See My Works</h3>
         <a href="#"><i className="fas fa-angle-down fa-2x"></i></a>
      </div>
   </div>
)

export default Header;

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
