import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import Logo from '../../assets/svg/Logo'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <Logo size={40} />

        <p>Metcalfe</p>
      </Link>
      <nav>
        <NavLink exact={true} activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact={true}
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          exact={true}
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/david-metcalfe-0b0a1b12/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/davidmetcal"
          >
            <FontAwesomeIcon color="#4d4d4e" icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
