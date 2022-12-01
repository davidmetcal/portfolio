import React, { useRef } from 'react'
import Logo from '../../assets/svg/Logo'
import './index.scss'

const LogoAnimated = () => {
  return (
    <div className="logo-container">
      <div className="solid-logo">
        <Logo size={800} />
      </div>

      <svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1062.66 1227.06"
        width={800}
        height={800}
      >
        <path
          className="svg-container"
          d="M105,796.03V367.14l212.66-122.77,70.24-40.55-6.74-117.35-116,66.97L0,306.52V920.13l71.19,41.09,104.05-61.3,290.71-171.31,125.05-73.69V156.11l108,62.36v489.52l-423.59,249.61-103.99,61.27,94.38,54.5,29.99,17.31,103.99-61.29,299.23-176.32,125-73.65V290.68l133,76.77v492.37l-212.66,122.77-212.66,122.77-101.39,62.7,101.39,58.55,265.16-153.09,265.16-153.09V306.59l-237.92-137.36-27.59-15.93-97.5-56.29-107.91-62.31L530.98,0l-64.98,37.52V583.31L105,796.03h0Zm106-197.93l128.56-84.67-6.13-131.29-121.43,83.44-1,132.52h0Z"
          fill="none"
        />
      </svg>
    </div>
  )
}

export default LogoAnimated
