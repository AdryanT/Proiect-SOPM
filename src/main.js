import React from 'react';
import ReactDOM from 'react-dom/client';
import'./bootstrap.css';
import'./responsive.css';
import'./style.css';
import'./style.css.map';
import'./style.scss';
import About from './about.js';
import Contact from './contact.js'
import Download from './download.js'
import HeroArea from './hero_area.js'
import Info from './info.js'
import Section from './section.js'
import Subscribe from './subscribe.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Navbar />
        <h1 className='app-title'>Uxos</h1>
        <About />
        <Contact />
        <Download />
        <HeroArea />
        <Info />
        <Section />
        <Subscribe />
    </React.StrictMode>
)