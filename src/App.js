import HeadPicture from './images/head-picture.jpg';
import Resume from './Do_Gyuwon_Resume.pdf';

function App () {
    return (
        <div className="Welcome">
            <div className="intro-box">
                <h1>Justin Do</h1>
                <h3>안녕하세요, 도규원입니다</h3>                

                <div className="intro-container pure-g">
                  <div className="left-column pure-u-1-2">
                      <div className="image-container">
                          <img src={HeadPicture} className="my-picture"/>
                      </div>
                  </div>
                  <div className="right-column pure-u-1-2">
                      <div className="note">
                          <h2>What I Do</h2>
                          <p>Programmer</p>
                      </div>
                      <div className="note">
                          <h2>What I Do</h2>
                          <p>Programmer</p>
                      </div>
                      <div className="note">
                          <h2>Who am I?</h2>
                          <p>Programmer, Writer, and Wannabe Guitarist</p>
                      </div>
                  </div>
                  <div className="subtext">
                      <p>I'm happy you wanted to get to know me! Scroll down to learn more about me!</p>
                  </div>
                </div>     
                <div className="main-container">
                  <div className="about-me pure-u-1-2">
                    <h2>Personal</h2>
                        <li>My name is Gyuwon Do, but I like to go by Justin</li>
                        <li>I am from South Korea, but grew up in Germany and the Czech Republic</li>
                        <li>I came to the U.S. in 2015 to attend NYU</li>
                        <li>I love to exercise and love the outdoors</li>
                        <li>I am a <b>HUGE</b> cat person</li>

                    <h2>Professional</h2>
                        <li>I am a frontend developer primarily using React and Javascript</li>
                        <li>I have been in the tech industry for 3 years</li>
                        <li>I get motivated by projects that are widely used by different people</li>
                        <li>I want to work for a company that has a clear and righteous mission</li>
                    <h2>Proficiencies</h2>
                        <div className="proficiencies-container">
                            <div className="pure-u-1-3">
                                <ul>Javascript</ul>
                                <ul>Python</ul>
                                <ul>Java</ul>
                                <ul>C</ul>
                            </div>
                            <div className="pure-u-1-3">
                                <ul>React.js</ul>
                                <ul>React Native</ul>
                                <ul>Next.js</ul>
                                <ul>Node.js</ul>
                            </div>
                            <div className="pure-u-1-3">
                                <ul>PostgreSQL</ul>
                                <ul>MySQL</ul>
                                <ul>Postman</ul>
                                <ul>Heroku</ul>
                            </div>
                        </div>
                  </div>
                  <div className="resume-container pure-u-1-2">
                    <iframe src='https://drive.google.com/file/d/1yTkp77avWGa3BwQJQiSrqqH2W-hn4GQm//preview#zoom=20' className="resume" />
                  </div>                  
                </div>   
            </div>
            <div className="projects-container pure-u-1-2">
                    <div className="projects-left">

                    </div>
                    <div className="projects-right">

                    </div>

                  </div>
        </div>
    )
}

export default App;
