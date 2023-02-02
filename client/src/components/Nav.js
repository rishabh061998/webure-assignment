import react from "react"
import "./Nav.css"
const Nav=()=>{
    return(
        <div className="header">
            <div className="navbar">
               <ul>
                <li className="first">Webure Technology</li>
                <li className="second">About us</li>
                <li className="third">Services</li>
                <li className="fourth">Career</li>
                <li className="fifth">Roi Stories</li>
                <li className="sixth">Blog</li>
                <li className="seventh">Contact us</li>
                <li className="eigth">Lets talk</li>
               </ul>

              
               <p className="sentence">Best Business Platform-World Record 2021</p>
               <p className="sentence2">Reach Your Business Goal in Record Time</p>
               <p className="sentence3">Support small business and join the nationwide movement to encourage commercial support for the millions of minority owned businesses helping world economy.</p>
               <button className="button1">Get Started</button>
           <p className="button2">Book a 30 Min Quick Meeting</p>
             
            </div>

        </div>
    )
}

export default Nav;
