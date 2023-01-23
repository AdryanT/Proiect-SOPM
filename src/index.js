import React from 'react';
import ReactDOM from 'react-dom/client';
import'./css/bootstrap.css';
import'./css/responsive.css';
import'./css/style.css';
import'./css/style.css.map';
import'./css/style.scss';
import HeroArea from './hero_area.js'
import About from './about.js';
import Contact from './contact.js'
import Download from './download.js'

import Info from './info.js'
import Section from './section.js'
import Subscribe from './subscribe.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <h1 className='app-title'>Uxos</h1>
        <HeroArea />
        <About />
        <Section />
        <Download />
        <Contact />
        <Info />
        
        <Subscribe />
    </React.StrictMode>
)