import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render(){
        return(
            <div styles ={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="assets/myAvatar.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Developer</h1>
                          
                            <hr/>

                            <p>HTML/CSS | JavaScript | React | Bootstrap | SQL</p>

                            <div className="social-links">
                                {/*LinkedIn*/}
                                <a href="https://www.linkedin.com/in/raymon-sobrepena/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>
                                
                                {/*GitHub*/}
                                <a href="https://github.com/rsobrepe" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-github-square" aria-hidden="true"></i>
                                </a>

                                {/*Facebook*/}
                                <a href="https://www.facebook.com/raysobrepena" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                </a>

                                {/*Instagram*/}
                                <a href="https://www.instagram.com/raysobrepena/" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-instagram" aria-hidden="true"></i>
                                </a>

                            </div>
                        </div>
                    </Cell> 
                </Grid>
            </div>
        )
    }

}

export default Landing;