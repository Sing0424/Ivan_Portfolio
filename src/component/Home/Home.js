import "./Home.css";
import ProfilePic from "../../images/ProfilePic.jpg";
import Github from "../../images/github_icon.svg";
import LinkedIn from "../../images/linkedin_icon.svg";

export default function Home() {
  return (
    <div className="home">
      <title>Home | Ivan's portfolio</title>
      <section className="left">
        <div className="title">
          <h1>
            Hi, I am <br />
            Ivan Tung
          </h1>
          <div className="icon">
            <a
              className="github"
              href="https://github.com/Sing0424"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="githubicon" src={Github} alt="github" />
            </a>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/tat-sing-tung-7400b9227/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="linkedinicon" src={LinkedIn} alt="linkedin" />
            </a>
          </div>
        </div>
        <p>
          I am a web developer after graduating from the Generation X CLAP@JC
          Front-end Web Developer Program funded by the Hong Kong Jockey Club.
        </p>
        <p>
          Before that, I graduated from Bachelor of Communication Art, Chaoyang
          University of Technology, as well as Higher Diploma of Multimedia:
          Information of Technology, Institute of Vocational Education.
        </p>
        <p>
          In 2022 to 2023, I worked in ITPRO2 Limited as a Junior web Developer,
          owned program development, data analysis and also testing related from
          MYSQL, Python, .NET(C#) and Javascript
        </p>
        <p>
          I have developed a proficient understanding of web technology and
          worked on projects using Python, SQL, HTML, CSS, Javascript, Github
          and React. I hope to combine the skills gained in my design,
          photography and digital marketing experience and technical knowledge
          to build a web developer career.
        </p>
      </section>
      <section className="right">
        <img src={ProfilePic} alt="IvanPic" />
      </section>
    </div>
  );
}
