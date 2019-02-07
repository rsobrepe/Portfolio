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
                        <p style={{width: '75%', margin: 'auto', paddingTop: '1em'}}>Feel free to use this form to either contact me or find me on any one of my socials!</p>
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