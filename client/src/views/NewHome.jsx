import { Link } from 'react-router-dom';
import { useState } from "react";
import { Nav } from '../components/nav';
import salesPinner from '../static/images/salesPinnerSS.png'
import constellation from '../static/images/Frame 4.png'

export const NewHome = (props) => {


    return (
        <main>
            <Nav></Nav>
            <div className="heroSection container-fluid">
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-3"></div>
                    <div className="heroText col-6">
                        <h1 class="fs-xl">
                            Michael Gonzalez<br></br>
                            Fullstack Developer & Full Dog Lover
                        </h1>
                        <button className="codeWithMe">
                            <p class="fs-s">Code with me</p>
                        </button>
                    </div>
                </div>
            </div>
            {/* <div className="aboutMeNew">
                <h2 class="fs-l">About Me</h2>
                <div className="aboutMeNewText container-fluid">
                    <div className="row">
                        <div className="col-2 col-sm-1"></div>
                        <div className="col-8 col-sm-10">
                            <p class="fs-s">
                                Software Developer with 5 years of experience in Marketing. I am passionate about building scalable applications in 2 full stacks (Python, MERN).
                                <br></br>
                                <br></br>
                                I've always orbited toward computers and tech in general, starting at age 6 as a Windows 95 expert :). When my childhood friends and I started a band, even though I played guitar, I wanted to be the producer. Learning new programs, and troubleshooting issues that would arise, are things I'd find fun.
                                My previous career in Marketing allowed me the opportunity to learn how to build genuine connections. It allowed me the opportunity to work in teams, even from afar. It allowed me the opportunities to follow and to lead, knowing the ins and outs of both aspects, all skills that are essential to software engineering as well.
                                <br></br>
                                <br></br>
                                Once I started my own marketing agency and learned how to manage my team and grow our client base, it was the opportunity to solve real-life problems involving technology that struck a chord. I felt the same way I did when I turned on my Windows 95 computer for the first time. I self-taught myself WordPress, CSS, and SEO. With these tools, I self-taught myself how to improve a business's online presence and boost its bottom line by generating more leads. Through business development and the lack of cohesive sales tracking software, I came up with my current project. I'm developing a sales tool using Python & Flask to provide territory visibility for outside sales reps using Google Maps API.
                            </p>
                        </div>
                        <div className="col-2 col-sm-1"></div>
                    </div>
                </div>
            </div> */}
            <div className="aboutMeNew">
                <h2 class="fs-l">About Me</h2>
                <div className="aboutMeNewText container-fluid">
                    <p class="fs-s">
                        Software Developer with 5 years of experience in Marketing & Sales. I am passionate about building scalable applications in 3 full stacks (Python, MERN, C#).
                        <br></br>
                        <br></br>
                        I've always orbited toward computers and tech in general, starting at age 6 as a Windows 95 expert :). Learning new programs, and troubleshooting issues that would arise, are things I'd find fun.

                        My previous career in Marketing allowed me the opportunity to learn how to build genuine connections. It allowed me the opportunity to work in teams, even from afar. It allowed me the opportunities to follow and to lead, knowing the ins and outs of both aspects, all skills that are essential to software engineering as well.
                        <br></br>
                        <br></br>
                        Once I started my own marketing agency and learned how to manage my team and grow our client base, it was the opportunity to solve real-life problems involving technology that struck a chord. I felt the same way I did when I turned on my Windows 95 computer for the first time. I self-taught myself WordPress, CSS, and SEO. With these tools, I self-taught myself how to improve a business's online presence and boost its bottom line by generating more leads. Through business development and the lack of cohesive sales tracking software, I came up with my current project. I'm developing a sales tool using Python & Flask to provide territory visibility for outside sales reps using Google Maps API.
                    </p>
                </div>
            </div>
            <div className="tasteOfCode container-fluid">
                <h2 class="fs-l">A Little Taste of Code</h2>
                <div className="row projectCards">
                    <div className="projectCard">
                        <div className="d-flex justify-content-center">
                            <img className="boxTest" src={salesPinner}></img>
                        </div>
                        <p class="fs-m">Sales Pinner</p>
                    </div>
                    <div className="projectCard">
                        <div className="d-flex justify-content-center">
                            <img className="boxTest" src={salesPinner}></img>
                        </div>
                        <p class="fs-m">Easier Apply</p>
                    </div>
                    <div className="projectCard">
                        <div className="d-flex justify-content-center">
                            <img className="boxTest" src={salesPinner}></img>
                        </div>
                        <p class="fs-m">Portfolio</p>
                    </div>
                </div>
            </div>
            <div className="constellation d-flex justify-content-center">
                <img src={constellation}></img>
            </div>
        </main>
    )
}