import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
 

class Contact extends Component {
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Raymon Sobrepena</h2>
                        <img 
                            src="assets/myAvatar.png"
                            alt="avatar"
                            style={{height: '250px'}}
                        />
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>
                        Feel free to contact me via work phone or email! I try my best to reply whenever I can!
                        If you have questions either about my website or about me in general feel free to contact! 
                        I am always learning and always looking to improve my skills in terms of Web Development so I am 
                        open to any form of criticism. Programming and working on various projects is one of my greatest interest 
                        in life and I enjoy doing it! If you want to work with me on a certain project please let me know. I am always 
                        looking for new cool projects to do and learn from! 
                        </p>
                    </Cell>
                    
                    
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>
                      
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i className="fa fa-phone-square" aria-hidden="true"/>
                                    (647) 309-0904
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize: '25px', fontFamily: 'Anton'}}>
                                    <i class="fa fa-envelope" aria-hidden="true"></i>
                                    raymon.p.sobrepena@gmail.com
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>

                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Contact;