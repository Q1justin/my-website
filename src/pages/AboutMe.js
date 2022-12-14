import Navbar from '../components/Navbar';
import LifeProgression from '../components/LifeProgression';

import MyPicture from '../images/my-picture.jpg';

function AboutMe () {
    return (
        <div className="AboutMe">
            <div className="navigation">
                <Navbar />
            </div>
            <div className="content-container pure-g">
                <div className="image-container pure-u-1-2">
                    <img src={MyPicture} />
                </div>
                <div className="text-container pure-u-1-2">
                    <h1>Who Am I?</h1>

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
                </div>
            </div>
            <LifeProgression />
           
        </div>
    )
}

export default AboutMe;
