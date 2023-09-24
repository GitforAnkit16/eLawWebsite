import React from 'react'
import "./Home.css"
import Featured from '../../Components/Featured/Featured'
import Slider from "../../Components/Slider/Slider"
import Internships from '../../Components/Internships/Internships'
import AboutUs from '../../Components/AboutUs/AboutUs'
import Guide from '../../Components/guide/guide'
export default function Home() {
  return (
    <div className="home">
      <Featured />
      <Guide />
      <Slider />
      <Internships />
      <AboutUs />
    </div>
  )
}
