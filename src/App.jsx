import React, { Component } from 'react';
import { Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import Main from './Components/main';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
<div className="demo-big-content">
    <Layout fixedHeader>
        <Header className="header-color" title={<span><span style={{ color: '#ddd' }}></span><strong>Raymon Sobrepena</strong></span>}>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="Raymon Sobrepena">
            <Navigation>
                <Link to="/resume">Home</Link>
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
