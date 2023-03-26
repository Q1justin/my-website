import Snorlax from '../images/snorlax.png';
import Navbar from '../components/Navbar';

function Welcome () {
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
                <div>

                </div>
                <div className="note-container">
                    <div className="note">
                        <h2>What I Do</h2>
                        <p>Programmer</p>
                    </div>
                    <div className="note">
                        <h2>What I Do</h2>
                        <p>Programmer</p>
                    </div>
                    <div className="note">
                        <h2>What I Do</h2>
                        <p>Programmer</p>
                    </div>
                </div>
                {/* <div className="image-container">
                    <div className="image-background">
                        <img className="welcome-image" src={Snorlax} alt="Snorlax-Munchlax" />       
                    </div>         
                </div> */}
            </div>
           
        </div>
    )
}

export default Welcome;
