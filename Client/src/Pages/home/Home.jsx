import React from 'react'
import "./Home.css"
import Featured from '../../Components/Featured/Featured'
import Slider from "../../Components/Slider/Slider"
import Internships from '../../Components/Internships/Internships'
export default function Home() {
  return (
    <div className="home">
      <Featured />
      <Slider />
      <Internships />
    </div>
  )
}
