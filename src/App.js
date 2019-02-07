import React, { Component } from 'react';
import { Layout, Header, Textfield, Drawer, Navigation, Content} from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
<div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
          <div className = "page-content" />
          <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
