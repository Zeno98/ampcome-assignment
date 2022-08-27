import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { IoIosAddCircle } from "react-icons/io";
import "../Appointments/Appointment.css"
import { IoIosVideocam } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CgMenuGridR } from "react-icons/cg";
import { FaUserAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { HiCurrencyRupee } from "react-icons/hi";
import { CgNotes } from "react-icons/cg";
import { AiFillSetting } from "react-icons/ai";
import {Link} from "react-router-dom";


const Appointment = () => {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col className='col-1 columns-1'>

                    <div>
                                <ul>
                                    <li className='navbar'>
                                        <Link to="/home"> <div className='navbar-icon'>
                                        <CgMenuGridR size={40} />
                                        </div></Link>
                                       
                                        
                                    </li>
                                    <li className='navbar'>
                                        <div className='navbar-icon'>
                                        <FaUserAlt size={40}/>
                                        </div>
                                        
                                    </li>
                                    <li className='navbar'>
                                     <div className='navbar-icon'>
                                        <MdDateRange size={40}/>
                                        </div>
                                    
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
                    <Col className='col-11'>
                    <h1>Appointment</h1>
                <p className='booking'><span className='booked'>List of booked appointements </span> <span className='addBtn'><Button variant="outline-danger">Add <IoIosAddCircle /></Button></span></p>

                <div className='inputFields'>

<Container fluid>

    <ul className='ulList'>
        <li className='liList'>
            <label htmlFor="name"></label>
            <input id="name" placeholder="Search by name, number" />

        </li>
        <li className='liList'>
            <label for="date">Date</label>

            <select name="date" id="date">
                <option value="This Week">This Week</option>
                <option value="Next Week">Next Week</option>
            </select>
        </li>

        <li className='liList'>
            <label for="type">Consultation Type</label>

            <select name="type" id="type">
                <option value="All">All</option>
                <option value="All">All</option>
            </select>
        </li>

        <li className='liList'>
            <label for="status">Status</label>

            <select name="status" id="status">
                <option value="All">All</option>
                <option value="All">All</option>
            </select>
        </li>

        <li className='liList'>
            <label for="invoice">Invoice</label>

            <select name="invoice" id="invoice">
                <option value="All">All</option>
                <option value="All">All</option>
            </select>
        </li>
    </ul>

</Container>

</div>

<div >

    <div className='table-border'>
    <Container fluid>
<table >
    <tr className='table-heading t-hading-bg '>
        <th  className='table-th'>
            <p>ORDER ID</p>
        </th>
        <th className='table-th'>
            <p>PATIENT</p>
        </th>
        <th className='table-th'>
            <p>CONSULTATION</p>
        </th>
        <th className='table-th'>
            <p>TEAM</p>
        </th>
        <th className='table-th'>
            <p>DOCTOR</p>
        </th>
        <th className='table-th'>
            <p>SLOT</p>
        </th>
        <th className='table-th'>
            <p>STATUS</p>
        </th>
        <th className='table-th'>
            <p>INVOICE</p>
        </th>
        <th className='table-th'>
            <p>ACTION</p>
        </th>
    </tr>
    
    <tr className='table-heading'>
        <td className='table-td'>
            2422562
        </td>
        <td className='table-td'>
            <p>Risha Mahin</p>
            <p>26, F</p>
        </td>
        <td className='table-td'>
            <p><IoIosVideocam/> Video</p>
            <p>First Consultation</p>
        </td>
        <td className='table-td'>

        </td>
        <td className='table-td'>
            <p>Anil Kumar</p>
        </td>
        <td className='table-td'>
            <p>Jul 3, 2021</p>
            <p>8:53 AM</p>
        </td>
        <td className='table-td'>
            <span>cancelled</span>
        </td>
        <td className='table-td'>
        <span>Refund</span>
        </td>
        <td className='table-td'>
            <p><BsThreeDotsVertical/></p>
        </td>
    </tr>
    
    <tr className='table-heading'>
        <td className='table-td'>
            2422562
        </td>
        <td className='table-td'>
            <p>Riju K</p>
            <p>32, M</p>
        </td>
        <td className='table-td'>
            <p><IoIosVideocam/> Video</p>
            <p>Follow-up</p>
        </td>
        <td className='table-td'>
            <p>Medical Camp</p>
        </td>
        <td className='table-td'>
            <p>Greg Ferguson</p>
        </td>
        <td className='table-td'>
            <p>Jul 3, 2021</p>
            <p>8:53 AM</p>
        </td>
        <td className='table-td'>
            <span>No Show</span>
        </td>
        <td className='table-td'>
        <span>Unpaid</span>
        </td >
        <td className='table-td'>
            <p><BsThreeDotsVertical/></p>
        </td>
    </tr>
    

    <tr className='table-heading'>
        <td className='table-td'>
            2422562
        </td>
        <td className='table-td'>
            <p>Prajeesh</p>
            <p>47, M</p>
        </td>
        <td className='table-td'>
            <p><IoIosVideocam/> Anytime Consult</p>
            
        </td>
        <td className='table-td'>
            <p></p>
        </td>
        <td className='table-td'>
            <p>Pankaj Dhir</p>
        </td>
        <td className='table-td'>
            <p>Jul 3, 2021</p>
            <p>8:53 AM</p>
        </td>
        <td className='table-td'>
            <span>Complete</span>
        </td>
        <td className='table-td'>
        <span>Paid</span>
        </td>
        <td className='table-td'>
            <p><BsThreeDotsVertical/></p>
        </td>
    </tr>
    

</table>
</Container>

</div>

</div>
                        
                    </Col>

                </Row>
                
            </Container>
           


        </div>
    )
}

export default Appointment