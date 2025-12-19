import { ReactComponent as Copy } from "../Assets/copyright-regular.svg"
import { ReactComponent as GitHub } from '../Assets/github.svg'
import { ReactComponent as Linkedin } from '../Assets/linkedin.svg'
import { ReactComponent as Gmail } from '../Assets/Gmail.svg'
import { ReactComponent as User } from '../Assets/user-regular.svg'
import { ReactComponent as Phone } from '../Assets/phone-solid.svg'
import { ReactComponent as Location } from '../Assets/location-dot-solid.svg'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footerItems">
                <div className="linksicon">
                    <a className="Gittext" href="https://github.com/akshayshetty744"  target='_blank'><GitHub className="github" /> </a>
                    <br></br>
                    <a className="Gittext" href="https://www.linkedin.com/in/akshayshetty744/"  target='_blank'><Linkedin className="linkedin" /> </a>
                    <br></br>
                    <a className="Gittext" href="mailto:shettyakshay744@gmail.com"  target='_blank'><Gmail className="Gmail"/> </a>
                </div>
                <div className="textData">
                    <ul>
                            <li><i class="fad fa-user-check"></i> <span className="Services">Services</span> </li>
                            <li><a  href="#"> HTML</a></li>
                            <li><a  href="#"> CSS</a></li>
                            <li><a href="#"> JavaScript</a></li>
                            <li><a  href="#"> React Js</a></li>
                    </ul>
                </div>
                <div className="textData">
                    <ul   >
                            <li ><i class="fad fa-user-check"></i> <span className="Contact">Contact</span> </li>
                            <li ><a href="#"><User className="User"/> Name : Akshay Shetty </a></li>
                            <li><a  href="mailto:shettyakshay744@gmail.com"  target='_blank'><Gmail className="User"/> Email : shettyakshay744@gmail.com</a></li>
                            <li><a  href="tel:+918007859409"  target='_blank'><Phone className="User" /> Contact : +91-8007859409</a></li>
                            <li><a  href="#"><Location class="User" /> Address : Pune, India</a></li>
                    </ul>
                </div>
                
            </div>
            <div className="copyRight"> <Copy className="c"  /> 2023 Copy rights: Akshay Shetty</div>
        </div>
    )
}