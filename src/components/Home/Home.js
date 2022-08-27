import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./Home.css"
import { GrNotes } from "react-icons/gr";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ActivityImg from "../Home/activity.JPG"
import { BsFillBellFill } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";
import { VscDebugStackframeDot } from "react-icons/vsc";
import { FaClipboardList } from "react-icons/fa";
import { AiOutlineDropbox } from "react-icons/ai";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { GiPerson } from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoIosVideocam } from "react-icons/io";
import { IoIosInformationCircle } from "react-icons/io";
import { BiBlock } from "react-icons/bi";
import { FaPrescription } from "react-icons/fa";
import { AiFillClockCircle } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { CgMenuGridR } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import { AiFillSetting } from "react-icons/ai";
import Graph from "../Home/graph.JPG";
import Profile from "../Home/profile-img.JPG";
import {Link} from "react-router-dom";


const Home = () => {
    return (
        <>
            <Container fluid>
                <div className="heading">
                    <header className='welcome'> Welcome <span className='dr'>Anil Kumar</span></header>
                    <br />
                    <span className='designation'>Cardiology</span>
                </div>
            </Container>
            <div className='details-size'>
                <Container fluid>
                    <Row>
                        <Col className='col-1 column-1'>
                            <div>
                                <ul>
                                    <li className='navbar'>
                                        <div className='navbar-icon'>
                                        <CgMenuGridR size={40} />
                                        </div>
                                        
                                    </li>
                                    <li className='navbar'>
                                        <div className='navbar-icon'>
                                        <FaUserAlt size={40}/>
                                        </div>
                                        
                                    </li>
                                    <li className='navbar'>
                                       <Link to="/appointment"><div className='navbar-icon'>
                                        <MdDateRange size={40}/>
                                        </div></Link> 
                                    
                                    </li >
                                    <li className='navbar'>

                                        <div className='navbar-icon'>
                                        <HiCurrencyRupee size={40}/>
                                        </div>
                                        
                                    </li>
                                    <li className='navbar'>
                                        <div className='navbar-icon'>
                                        <CgNotes size={40}/>
                                        </div>
                                        
                                    </li>
                                    <li className='navbar'>
                                        <div className='navbar-icon'>
                                        <AiFillSetting size={40}/>
                                        </div>
                                        
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col className='col-7 column-2' style={{position:"relative"}}>

                            <div className='row1' style={{position:"absolute",top:"-2rem",left:"2rem", width:"90%"}}>
                                <Container fluid>
                                    <Row>

                                        <div className='totalEarning'>
                                            <ul>
                                                <li>
                                                    <GrNotes /> Total Earnings
                                                    <br />
                                                    <br />
                                                    ₹4000
                                                </li>

                                                <li>
                                                    <Form.Group className='unit'>
                                                        Unit
                                                        <Form.Control as="select">
                                                            <option>PRK Hospital</option>
                                                            <option>Inactive</option>
                                                        </Form.Control>
                                                    </Form.Group>
                                                </li>

                                                <li>
                                                    <Form.Group className='timeduration'>
                                                        Time Duration
                                                        <Form.Control as="select">
                                                            <option>Last 7 days</option>
                                                            <option>Inactive</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                </li>


                                            </ul>

                                        </div>
                                    </Row>
                                    <Row>
                                        <ul className='appointement'>
                                            <li className='appoint'>
                                                Appointments
                                                <br />
                                                <br />
                                                54
                                            </li>
                                            <li className='appoint'>
                                                EMR Finalised
                                                <br />
                                                <br />
                                                47
                                            </li>
                                            <li className='appoint'>
                                                Patient Registration
                                                <br />
                                                <br />
                                                120
                                            </li>
                                            <li className='appoint'>
                                                KR4ALL Visits
                                                <br />
                                                <br />
                                                30
                                            </li>
                                        </ul>
                                    </Row>
                                </Container>


                            </div>

                            {/*  */}


                            <div className='app-schedule' >
                                <Container>
                                    <Row style={{marginTop:"15rem"}}>
                                        <Col className='col-7' >
                                            <Card style={{ width: '100%',height:"30rem" }}>
                                                <Card.Header>APPOINTMENTS <span style={{float:"right",color:"grey"}}><BsFillQuestionCircleFill /></span></Card.Header>
                                                <p><span style={{ float: "left", marginLeft: "1rem" }}>Waiting Queue (6)</span><span style={{ float: "right", marginRight: "1rem",color:"red" }}>View Queue</span></p>

                                                <Row>
                                                    <Col className='12'>
                                                        <ul>
                                                            <li>
                                                                <p><span ><img className='profile'src={Profile} alt="profile" /></span> Prajeesh <span style={{float:"right", marginRight:"1rem",color:"red",backgroundColor:"rgb(239, 144, 144)",borderRadius:"10px"}}><FaPrescription/> to be finalized</span></p>
                                                                <p><GiPerson /> <span>In Person</span > <VscDebugStackframeDot /> 2:20pm </p>

                                                            </li>

                                                            <li>
                                                                <p><span ><img className='profile'src={Profile} alt="profile" /></span > Risha Mahin <span style={{float:"right", marginRight:"1rem",color:"brown",backgroundColor:"rgb(245, 199, 116)",borderRadius:"10px"}}><AiFillClockCircle/> Waiting <VscDebugStackframeDot/> 40 min </span></p>
                                                                <p><AiFillThunderbolt /> <span>Anytime Consultaion</span> <VscDebugStackframeDot /> 2:30pm </p>

                                                            </li>

                                                            <li>
                                                                <p><span ><img className='profile'src={Profile} alt="profile" /></span> Riju K <span style={{float:"right", marginRight:"1rem",color:"brown",backgroundColor:"rgb(245, 199, 116)",borderRadius:"10px"}}><AiFillClockCircle/> Waiting <VscDebugStackframeDot/> 40 min </span></p>
                                                                <p><IoIosVideocam /> <span>Video Consultaion</span> <VscDebugStackframeDot /> 2:40pm </p>

                                                            </li>

                                                            <li>
                                                                <p><span ><img className='profile'src={Profile} alt="profile" /></span> Setia S <span style={{float:"right", marginRight:"1rem",color:"brown",backgroundColor:"rgb(245, 199, 116)",borderRadius:"10px"}}><AiFillClockCircle/> Waiting <VscDebugStackframeDot/> 40 min </span></p>
                                                                <p><IoIosVideocam /> <span>Video Consultaion</span> <VscDebugStackframeDot /> 2:40pm </p>

                                                            </li>
                                                        </ul>
                                                        
                                                        <hr />
                                                        <p style={{color:"red"}}>View  all Apointments <AiOutlineArrowRight/></p>
                                                    </Col>
                                                   
                                                    
                                                </Row>








                                              
                                            </Card>
                                        </Col>
                                        <Col className='col-5' >
                                            <Card style={{ width: '100%',}}>
                                                <Card.Header>SCHEDULE <span style={{float:"right",color:"grey"}}><BsFillQuestionCircleFill /> </span></Card.Header>

                                                <div className='schedule-heading'>
                                                    <p><span>Receive</span> <AiFillThunderbolt /> Anytime Consult <IoIosInformationCircle />
                                                        <span ><Form style={{ width: '20%',display:"inline",float:"right" }}>
                                                            <Form.Check
                                                            style={{ width: '20%', display:"inline" }}
                                                                type="switch"
                                                                id="custom-switch"
                                                                label=""
                                                            />
                                                            Yes
                                                        </Form>
                                                        </span> </p>
                                                        </div>

                                                        <div>
                                                        <ul>
                                                            <p style={{color:"grey",fontWeight:"bold"}}>TODAY <VscDebugStackframeDot /> MONDAY </p>
                                                            <li className='scheduleLi'><span style={{color:"green",fontSize:"12px",fontWeight:"bold"}}>9:30 AM - 9:40 AM <VscDebugStackframeDot /> 40 minutes</span>
                                                            <span><AiFillThunderbolt/>AnyTime</span></li>

                                                            <li className='scheduleLi'><span style={{color:"green",fontSize:"12px",fontWeight:"bold"}}>3:30 PM - 7:30 PM <VscDebugStackframeDot /> 4 hours</span>
                                                            <span><IoIosVideocam/>Video</span></li>
                                                        </ul>
                                                        <div></div>
                                                        <ul>
                                                        <p style={{color:"grey",fontWeight:"bold"}}>TODAY <VscDebugStackframeDot /> TUESDAY </p>
                                                            <li className='scheduleLi'><span style={{color:"green",fontSize:"12px",fontWeight:"bold"}}>9:30 AM - 9:40 AM <VscDebugStackframeDot /> 40 minutes</span>
                                                            <span><AiFillThunderbolt/>AnyTime</span></li>

                                                            <li className='scheduleLi'><span style={{color:"green",fontSize:"12px",fontWeight:"bold"}}>3:30 PM - 7:30 PM <VscDebugStackframeDot /> 4 hours</span>
                                                            <span><IoIosVideocam/>Video</span></li>

                                                            <li className='scheduleLi'><span style={{color:"red",fontSize:"12px",fontWeight:"bold",backgroundColor:"rgb(239, 144, 144)"}}>6:30 PM - 9:00 PM 
                                                            <span style={{backgroundColor:"rgb(239, 144, 144)"}}><VscDebugStackframeDot /> 2 hours 30 minutes</span></span>
                                                            <span><BiBlock/>Block</span></li>
                                                        </ul>
                                                        <ul>
                                                            <p style={{color:"grey",fontWeight:"bold"}}>WEDNESDAY</p>
                                                        </ul>
                                                        <hr />
                                                        <p style={{color:"red"}}>View all Schedule <AiOutlineArrowRight/></p>
                                                        </div>

                                                        
                                            
                                               
                                            </Card>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>
                            <div className='history'>
                                <header style={{color:"grey",fontWeight:"bold",padding:"1rem 1rem",fontSize:"20px"}}>CONSULTATION HISTORY <span style={{float:"right",paddingRight:"1rem"}}>KR4ALL Visits <span style={{fontSize:"1rem"}} ><Form style={{ width: '20%',display:"inline" }}>
                                                            <Form.Check
                                                            style={{ width: '20%', display:"inline" }}
                                                                type="switch"
                                                                id="custom-switch"
                                                                label=""
                                                            />
                                                        </Form></span>All <BsFillQuestionCircleFill/></span> </header>
                                                        <hr />
                                                        <img className='graphImg' src={Graph} alt="" />

                            </div>
                            <br />
                            <br />

                        </Col>
                        <Col className='col-4 '>
                            
                            <div className='activity'>
                                <Container>
                                    <img src={ActivityImg} alt="Logo" />
                                    <p className='bell'><BsFillBellFill size={20} /> <span style={{color:"grey",fontWeight:"bold",fontSize:"20px",marginLeft:"1rem"}}> ACTIVITY</span></p>

                                    <div>
                                        <ul>
                                            <li>
                                                <span className='act-logo'><GrUserSettings size={25} /></span>
                                                <span style={{marginLeft:"1.5rem"}}>User Activity <VscDebugStackframeDot /> 12:32</span>
                                                <p style={{marginLeft:"3rem"}}>Lorem, ipsum dolor sit amet dolorem voluptatem.</p>
                                            </li>

                                            <li>
                                                <span className='act-logo'><GrUserSettings size={25} /></span>
                                                <span style={{marginLeft:"1.5rem"}}>User Activity <VscDebugStackframeDot /> 8:16</span>
                                                <p style={{marginLeft:"3rem"}}>Lorem, ipsum dolor sit amet dolorem voluptatem.</p>
                                            </li>

                                            <li>
                                                <span className='act-logo'><FaClipboardList size={25} /></span>
                                                <span style={{marginLeft:"1.5rem"}}>Summary <VscDebugStackframeDot /> 8:00</span>
                                                <p style={{marginLeft:"3rem"}}>Lorem, ipsum dolor sit amet dolorem voluptatem.</p>

                                            </li>

                                            <li>
                                                <span className='act-logo'><AiOutlineDropbox size={25} /></span>
                                                <span style={{marginLeft:"1.5rem"}}>Application Update <VscDebugStackframeDot /> yesterday</span>
                                                <p style={{marginLeft:"3rem"}}>Lorem, ipsum dolor sit amet dolorem voluptatem.</p>

                                            </li>

                                            <li>
                                                <span className='act-logo'><GrUserSettings size={25} /></span>
                                                <span style={{marginLeft:"1.5rem"}}>User Activity <VscDebugStackframeDot /> 2 days ago</span>
                                                <p style={{marginLeft:"3rem"}}>Lorem, ipsum dolor sit amet dolorem voluptatem.</p>

                                            </li>


                                        </ul>
                                    </div>


                                </Container>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* // </Container> */}
        </>
    )
}

export default Home