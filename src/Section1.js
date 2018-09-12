import React, { Component } from 'react';
import {Link} from 'react-router-dom';




import './App.css';

export default class Section1 extends Component {
    
    render() {
        return (
            
        <div className=" section Section1">

            <div className="section-header">
                Bereit für den Sprung ins Neue?
            </div>

            
            <div className="section-body">
                Es ist Zeit, Organisationen und Unternehmen neu zu denken.
            </div>
            <div className="section-body">
                Es ist Zeit, wirtschaftlichen Erfolg neu zu definieren.
            </div>
            <div className="section-body">
                Es ist Zeit, die Kraft der Wirtschaft zu nutzen, um das Gute in die Welt zu bringen.
            </div>
            <div className="section-body">
                Es ist Zeit zu erkennen, dass alles mit allem zusammenhängt.
            </div>
            <div className="section-body">
                Es ist Zeit, den Sinn unseres Seins und Tuns wieder zu entdecken.
            </div>
            <div className="section-body">
                Es ist Zeit, unser echtes Potenzial zu nutzen. Es ist Zeit.
            </div>
        </div>

        );
    }
}

