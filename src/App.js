import { useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import HeadPicture from './images/head-picture.jpg';
import Resume from './Do_Gyuwon_Resume.pdf';


function App () {
  useEffect(() => { 
    pdfjs.GlobalWorkerOptions.workerSrc =`https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  }, []);
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
                    Filling up space
                  </div>
                  <div className="resume pure-u-1-2">
                  <Document file={Resume} >
                    <Page pageNumber={1} renderTextLayer={false}/>
                  </Document>
                  </div>
                </div>   
            </div>
           
        </div>
    )
}

export default App;
