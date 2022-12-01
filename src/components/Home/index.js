import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import LogoAnimated from '../LogoAmimated'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = [
    'D',
    'a',
    'v',
    'i',
    'd',
    ' ',
    'M',
    'e',
    't',
    'c',
    'a',
    'l',
    'f',
    'e',
  ]
  const jobArray = [
    'f',
    'u',
    'l',
    'l',
    ' ',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <LogoAnimated />
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>&nbsp;
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={29}
            />
          </h1>
          <h2>Full Stack Developer / JavaScript Expert / Cloud Architect</h2>
          <Link to="contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="ball-clip-rotate-multiple" />
    </>
  )
}

export default Home
