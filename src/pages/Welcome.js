import Snorlax from '../images/snorlax.png';

function Welcome () {
    return (
        <div className="Welcome">
            <div className="content">
                <div className="introduction">
                    <h1>Hello, I am Gyuwon Do</h1>
                    <h3>안녕하세요, 도규원입니다</h3>
                </div>
                <div className="image-container">
                    <img className="welcome-image" src={Snorlax} alt="Snorlax-Munchlax" />                
                </div>
            </div>
           
        </div>
    )
}

export default Welcome;
