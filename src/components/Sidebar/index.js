import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'

const SideBar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1062.66 1227.06"
          width={40}
          height={40}
        >
          <polygon
            points="105.2 796.15 105.2 367.5 318.27 244.5 388.64 203.86 381.89 86.29 265.67 153.39 0 306.77 0 920.31 71.25 961.43 175.38 900.08 466.31 728.64 591.46 654.9 591.46 156.2 699.44 218.55 699.44 707.83 275.29 957.77 171.17 1019.11 265.67 1073.68 295.69 1091.01 399.82 1029.65 699.44 853.1 824.6 779.36 824.6 290.81 957.46 367.5 957.46 859.56 744.4 982.57 531.33 1105.58 429.75 1168.4 531.33 1227.06 797 1073.68 1062.66 920.31 1062.66 306.77 824.6 169.33 797 153.39 699.44 97.07 591.46 34.73 531.33 0 466.31 37.54 466.31 583.37 105.2 796.15 105.2 796.15"
            fill="#E14D2A"
            fill-rule="evenodd"
          />
          <polygon
            points="211.16 598.2 212.38 465.68 333.86 382.23 339.99 513.53 211.16 598.2 211.16 598.2"
            fill="#E14D2A"
            fill-rule="evenodd"
          />
        </svg>
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
    </div>
  )
}

export default SideBar
