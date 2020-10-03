import React from 'react'
import { Link } from 'react-router-dom'
import { getToken } from '../../utils/tokenHandling'

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="landing-inner">
          <h1 className="x-large">Welcome</h1>
          <div className="buttons">
            {
              (getToken()) ?
                (
                  // { 'Buddy!'}
                  <Link to='call' className="btn btn-light">Call your super hero... </Link>
                )
                  :
                  <Link to = 'login' className = "btn btn-light">Login</Link>
            }
          </div>
      </div>
      </div>
    </section >
  )
}

export default Landing;