import React from 'react';
import './Home.css';
import ProfilePic from '../../images/Profile.jpg'

export default function Home() {
    return (
        <html>
            <head>
                <title>Home | Ivan's portfolio</title>
            </head>

            {/* header and navbar */}
            <body>
                <header>
                    <nav>
                        <ul>
                            <li><a href=''>Home</a></li>
                            <li><a href=''>Resume</a></li>
                            <li><a href=''>Collection</a></li>
                            <li><a href=''>Contact</a></li>
                        </ul>
                    </nav>
                </header>
            </body>

            {/* introduction and picture */}
            <main>
                <section className='left'>
                    <h1>
                        Hi, I am <br/>
                        Ivan Tung
                    </h1>
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
                </section>
            </main>
        </html>
    )
}