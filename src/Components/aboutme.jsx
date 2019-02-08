import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class About extends Component {
    render(){
        return(
            <div className="about-grid">
                <Grid>
                   
                    {/*Left Side of the About me Page*/}
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img                                 
                                src="assets/profile.jpg"
                                alt="avatar"
                            style={{height: '200px', borderRadius: '25px'}}/>
                        </div>                                                                                
                        <h2 style={{paddingTop: '2em', textAlign: 'center'}}>Raymon Sobrepena</h2>
                        <h4 style={{color: 'grey', textAlign: 'center', fontWeight:'bolder'}}>Developer</h4>
                        <hr style={{borderTop: '3px solid #5274a1', width: '100%'}}/>
                        <p>
                        Computer Science Graduate from Ryerson University (2014-2018). Knowledgeable in programming in languages such
                         as C, C++, C#, Java, Python, SQL, HTML, CSS, JavaScript, React.js, MongoDB, SQL and Android SDK. Interests in 
                         Computer Science include developing Mobile Applications, Java Applications/Software as well as Web Development.
                         Eager and willing to learn and try new things in the world of Computer Science.
                        </p>
                        <hr style={{borderTop: '3px solid #5274a1', width: '100%'}}/>
                        <h5>Address</h5>
                        <p>17 Mauve Drive, Brampton</p>
                        <h5>Phone</h5>
                        <p>(647) 309-0904</p>
                        <h5>Email</h5>
                        <p>raymon.p.sobrepena@gmail.com</p>
                    </Cell>
                    
                    {/*Right Side of the About me Page*/}
                    <Cell className="about-right-col" col={8}>
                        <h2>Education</h2>
                        <Education 
                            startYear={2010}       
                            endYear={2014}
                            schoolName="Cardinal Ambrozic Catholic Secondary School"
                            schoolDescription="Catholic Secondary High School, Main jobs/work include; Basketball Team, Baseball Team, Football Team, Track Team, AV Club, Orientation Leadership, Think Fast Volunteering"                 
                        />  
                        
                        <Education 
                            startYear={2014}       
                            endYear={2018}
                            schoolName="Ryerson University"
                            schoolDescription="Majored in Computer Science. Involvement include; General Manager of Table Tennis Club, Orientation Crew leader."                 
                        />      

                        <hr style={{borderTop: '3px solid white'}}/> 
                        <h2>Experience</h2>
                        <Experience
                            startYear={2014}
                            endYear={2015}
                            jobName="L3 Wescam Applied Physics Specialties"
                            jobPosition="Engineering Intern"
                            jobDescription="Edited and created Assembly Model/Drawings using AutoCad (SolidWorks). Developed small software (Python) for Engineering use. Cleaned up archived Files for Engineers. Handled and organized parts and lenses for assembly."
                        />

                        <Experience
                            startYear={2016}
                            endYear={"Present"}
                            jobName="Perplexity Escape Games"
                            jobPosition="Team Lead/Programmer"
                            jobDescription="Provide exceptional Customer Service. Manages and leads team. Opening and closing duties such as managing cash and transactions. Deal with customer/game issues. Host private corportate events.Program games and software solutions for both Customers and Team Needs (C#, Java, Arduino/Raspberry Pi, Python, AndroidSDK)"
                        />

                        <hr style={{borderTop: '3px solid white'}}/> 
                        <h2>Skills</h2>
                       
                        <Skills
                            skill="HTML"
                            progress={100}
                        />

                        <Skills
                            skill="CSS"
                            progress={100}
                        />

                        <Skills 
                            skill="Java"
                            progress={100}
                        />

                        <Skills 
                            skill="C#"
                            progress={85}
                        />                                                                      

                        <Skills
                            skill="JavaScript"
                            progress={75}
                        />

                        <Skills 
                            skill="Python"
                            progress={65}
                        />

                        <Skills
                            skill="React.js"
                            progress={60}
                        />
                        
                        <Skills 
                            skill="AndroidSDK"
                            progress={60}
                        />                        

                        <Skills
                            skill="SQL"
                            progress={50}
                        />    

                        <Skills
                            skill="MongoDB"
                            progress={45}
                        />
                    </Cell>
                </Grid>                    
            </div>
        )
    }

}

export default About;