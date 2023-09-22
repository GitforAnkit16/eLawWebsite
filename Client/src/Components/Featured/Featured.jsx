import React from 'react'
import "./Featured.css"
function Featured() {
  return (
    <div className='featured'>
        <div className='container'>
        <div className="left">
            <p>Attorneys in a single click</p>
            <div className="search">
                <div className="searchInput">
                    <img src="./images/search.svg" alt = "ok"/>
                    <input type ="text" placeholder='Search' />
                </div>
                <button>Search</button>
            </div>
                <div className="popular">
                    <span>Popular: </span>
                        <button>Criminal Lawyer</button>
                        <button>Civil Lawyer</button>
                        <button>Trademark and Ip</button>
                </div>
           
        </div>
         </div>
    </div>
  )
}

export default Featured