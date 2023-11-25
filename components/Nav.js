import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div className="nav-bar">
          <div className="title">BasicsAdmin</div>
          <ul className="top-nav">        
             <li>
             <Link href='/'>Logout</Link>
             </li>
           </ul>
        </div>
    )
}

export default Nav