
import profileP from './profile.jpeg';

function About(){
    return(
        <div className= "sectionAbout" id="sectionAbout">
            <div className="mobile">
            <img className ="profilePic" src={profileP} alt="profile"/>
            <h1>Hi, I`m Erick Narvaez</h1>
            <h2>a starting web developer</h2>

            </div>
            <div className="desktop">
                <p>I´m starting a new journey in the web developer career. 
                    This new journey has a lot of challeges. 
                    All you need is creativity and some code to made excellent web pages.
                    My first goal is being a Frontend Developer.
                </p>

            </div>

        </div>
    );
    
    }
    
    
    export default About;