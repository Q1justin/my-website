import Snorlax from '../images/snorlax.png';
import Navbar from '../components/Navbar';

function AboutMe () {
    return (
        <div className="Welcome">
            <div className="navigation">
                <Navbar />
            </div>
            <div className="content-box">
                <div className="introduction">
                    <h1>Hello, I am Gyuwon Do</h1>
                    <h3>안녕하세요, 도규원입니다</h3>
                </div>
                <div className="image-container">
                    <div className="image-background">
                        <img className="welcome-image" src={Snorlax} alt="Snorlax-Munchlax" />                
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default AboutMe;
