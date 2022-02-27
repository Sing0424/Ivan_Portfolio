import './Resume.css';

export default function Resume() {
    return (
        <div className="resume">
        <title>Resume | Ivan's portfolio</title>
            <div className='resumeInner'>
                <h1 className='resumeTitle'>Introduction</h1>
                <p>
                    Passionate and innovative junior front-end web developer seeking entry level positions in the areas of the front-end and user experience design using Javascript, HTML5, and React or similar Javascript framework for mobile websites and applications development.
                </p>
                <h1 className='resumeTitle'>Experience </h1>
                <div className='listDiv'>
                    <ul>
                        <li><p>Creative Design and Photographer</p></li>
                        <li><p>Digital Marketing Specialist / Photographer in KBLHK (Amateur Basketball League)</p></li>
                        <li><p>VR & AR School Projects</p></li>
                        <li><p>Todo List WebApp School Project</p></li>
                    </ul>
                </div>
                <h1 className='resumeTitle'>Education & Training</h1>
                <p>
                    Front-End Web Developer Program
                    <br/>
                    Generation x CLAP@JC
                    <br/>
                    <br/>
                    Bachelor of Communication Art : Communication Art
                    <br/>
                    Chaoyang University of Technology
                    <br/>
                    TaiChung, Taiwan
                    <br/>
                    <br/>
                    Higher Diploma of Multimedia: Information of Technology
                    <br/>
                    Hong Kong Institute of Vocational Education
                </p>
                <h1 className='resumeTitle'>Skills</h1>
                
                    <div className='skills'>
                        <div className='ProgrammingSkills'>
                            <h4>Programming skills</h4>
                            <div className='listDiv'>
                                <ul>
                                    <li><p>HTML</p></li>
                                    <li><p>CSS</p></li>
                                    <li><p>Javascript</p></li>
                                    <li><p>Github</p></li>
                                    <li><p>React</p></li>
                                </ul>
                        </div>
                        </div>
                        <div className='AdobeSoftware'>
                            <h4>Adobe Software</h4>
                            <div className='listDiv'>
                                <ul>
                                        <li><p>Photoshop</p></li>
                                        <li><p>Lightroom</p></li>
                                        <li><p>illustrator</p></li>
                                        <li><p>Premiere Pro</p></li>
                                        <li><p>AfterEffect</p></li>
                                    </ul>    
                            </div>
                        </div>
                    </div>
                
                <h1 className='resumeTitle'>Languages</h1>
                <p>
                Native: Cantonese
                <br/>
                Proficient: Mandarin
                <br/>
                Conversant: English
                </p>
                <h1 className='resumeTitle'>Certification</h1>
                <p>
                LCCI - HKVEP English Programme (Writing & Speaking)
                <br/>
                Benchmark Level: 4C
                </p>
            </div>
        </div>
    )
}