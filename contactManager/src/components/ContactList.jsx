import React, { useRef } from 'react'
import ContactCard from './ContactCard'
import { Link } from 'react-router-dom'

const ContactList = ({contacts, getContactId, searchContact, searchKeyword}) => {
  const inputEl = useRef('')

  const deleteContactHandler = (id) => {
     getContactId(id)
  }

  const renderedContactList = contacts.map((contact) => {
      return (
          <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id}/>
      )
  })

  const getSearchContact = () => {
    searchKeyword(inputEl.current.value)
  }

  return (
    <div className='main'>
      <div className='container' style={{display:'flex', alignItems : 'center'}}>
        <h2 style={{display : 'flex', flexGrow : 1}}>📒 Contact List</h2>
        <Link to={'/add'}><button className='ui button blue right'>Add Contact</button></Link>
      </div>
      

      <div className="ui search">
        <div className="ui icon input">

          <input 
          ref={inputEl}
          type="text"
          placeholder=' Search Contacts' 
          className='search icon prompt'
          value={searchContact} 
          onChange={getSearchContact}/>

          <i className='search icon'></i>
        </div>
      </div>

      <div className='ui celled list'>{renderedContactList.length > 0 ? renderedContactList : "No Contacts Available"}</div>
    </div>
  )
}

export default ContactList