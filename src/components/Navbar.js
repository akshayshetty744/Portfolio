import myPic from '../Assets/myPic.jpeg'
export default function Navbar() {
    return (
        <div className="navBar">
            <ul className="list">
                <div className="listItems">
                    <li >HOME</li>
                    <li>ABOUT</li>
                    <li>CONTACT</li>
                    <li>PROJECTS</li>
                </div>
                <div className="listItemspic">
                   <li><img className='myPic' src={myPic} /></li>
                </div>
            </ul>
            <div className="mySelf">
                <h4 className="name">My name is</h4>
                <h2 className='name1'>Akshay Shetty</h2>
                <div>I am Web Developer </div>
                <p className='content'>FullStack developer & Passion for Building new Projects
                            with new Challenges to solve with full functionality.
                            Strong Javascript & React Js. There are three responses to
                            a piece of design – yes, no, and WOW! Wow is the one to
                            aim for.
                </p>
                <hr></hr>
                <span className='contact'>Contact: </span> <a className='phone' href="tel:+918007859409">+918007859409</a>
                <br></br>
                <span className='gmail'>Gmail: </span><a className='mail' href="mailto:shettyakshay744@gmail.com">shettyakshay744@gmail.com</a>
            </div>
        </div>
    )
}