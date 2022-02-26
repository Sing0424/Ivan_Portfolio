import React from 'react';
import './Home.css';
import ProfilePic from '../../images/ProfilePic.jpg';
import Github from '../../images/github_icon.svg';
import LinkedIn from '../../images/linkedin_icon.svg';

export default function Home() {
    return (
        <div>
            <head>
                <title>Home | Ivan's portfolio</title>
            </head>
            <section className='left'>
                <div>
                    <h1>
                        Hi, I am <br/>
                        Ivan Tung
                    </h1>
                    <div>
                        <a href='#'><img className='icon github' src={Github} alt='github' /></a>
                        <a href='#'><img className='icon linkedin' src={LinkedIn} alt='linkedin' /></a>
                    </div>
                </div>
                <p>
                    I am a front-end web developer after graduating from the Generation X CLAP@JC Front-end Web Developer Program funded by the Hong Kong Jockey Club.
                </p>
                <p>
                    Before that, I graduated from Bachelor of Communication Art, Chaoyang University of Technology, as well as Higher Diploma of Multimedia: Information of Technology, Institute of Vocational Education.
                </p>
                <p>
                    I have developed a proficient understanding of web technology and worked on projects using HTML, CSS, Javascript, Github and React. I hope to combine the skills gained in my design, photography and digital marketing experience and technical knowledge to build a web developer career.
                </p>
            </section>
            <section className='right'>
                <img src={ProfilePic} alt='IvanPic' />
            </section>
        </div>
    )
}