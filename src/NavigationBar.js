import React, { Component } from 'react';
import {Link} from 'react-router-dom';



import './App.css';

export default class NavigationBar extends Component {
    componentDidMount(){
        let prevScrollpos = window.pageYOffset;
        let expandNavBar = ()=>{
            document.getElementById("nav-logo").style.height = "150%";
            document.getElementById("nav-logo").style.marginTop = "25px";
            document.getElementById("nav-left-side").style.marginTop = "0px";
            document.getElementById("nav-right-side").style.marginTop = "0px";
        }
        let shrinkNavBar = () => {
            document.getElementById("nav-logo").style.height = "100%";
            document.getElementById("nav-logo").style.marginTop = "0px";
            document.getElementById("nav-left-side").style.marginTop = "-70px";
            document.getElementById("nav-right-side").style.marginTop = "-70px";
        }
		window.onscroll = () => {

            let currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos  ) {
                expandNavBar();
            } else {
                shrinkNavBar();
            }
            if(currentScrollPos < 1){
                expandNavBar();
            }
            prevScrollpos = currentScrollPos;
		}
	}
    render() {
        return (
        <div className="NavigationBar">

            <div id="nav-left-side">
                <Link className="nav-link" to="/">Approach</Link>
                <Link className="nav-link" to="/">Portfolio</Link>
                <Link className="nav-link" to="/">Work</Link>
                <Link className="nav-link" to="/">School</Link>
                <Link className="nav-link" to="/">Spaces</Link>
            </div>
            <Link id="nav-logo" to="/"><img height="100%" width="auto" src="https://www.thedive.com/wp-content/themes/thedive/images/thedive-logo-2x.png" alt="TheDive Logo" /></Link>
            <div id="nav-right-side">
                <Link className="nav-link" to="/">People</Link>
                <Link className="nav-link" to="/">Peers</Link>
                <Link className="nav-link" to="/">Business Poetry</Link>
                <Link className="nav-link" to="/">Kontakt</Link>
            </div>
        </div>
        );
    }
}

