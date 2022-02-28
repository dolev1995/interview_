import React, {Component} from 'react'
import './App.css';
//import Arrow from './images/arrow.png'
import LogOrReg from './LogOrReg'

import {Link} from 'react-router-dom'

class OpeningScreen extends Component{
 

render(){

    return(
		<div className="welcome">
					<div id="mainWelcome">
						<h1>ברוכים הבאים</h1>

                      <Link to="/LogOrReg">
                        <button className="next" type="button" >

                            <span>התחל</span>
                             </button> </Link>
                          
					</div>
                    </div>

    )
}


}

export default OpeningScreen;