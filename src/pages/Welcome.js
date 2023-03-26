import HeadPicture from '../images/head-picture.jpg';

function Welcome () {
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
            </div>
            <div className="">

            </div>
           
        </div>
    )
}

export default Welcome;
