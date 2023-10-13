import React from 'react'
import contactDetail from '../assets/contactDetail.gif'
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ContactDetail = () => {
    const location = useLocation();
    const contact = location.state.contact;

    return (
    <div className='main'>
        <h2></h2>

        <div className='container' style={{display:'flex', alignItems : 'center'}}>
        <h2 style={{display : 'flex', flexGrow : 1}}>Contact Details 📑</h2>
        <Link to={'/'}><button className='ui button blue right'>⬅️ Back</button></Link>
      </div>


        <div className="ui card centered" >
            <img src={contactDetail} alt="" className='image' />
            <div className="content">
                <div className="header">Name :  {contact.name}</div>
                <div className="description"> Email : {contact.email}</div>
            </div>
        </div>
    </div>
  )
}

export default ContactDetail