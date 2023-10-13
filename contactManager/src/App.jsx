import './App.css'
import { v4 as uuidv4 } from 'uuid';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'
import { useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ContactDetail from './components/ContactDetail';
import api from './api/contacts'
import EditContact from './components/EditContact';

function App() {

  const [contacts, setContacts] = useState([]);
  const [searchContact, setSearchContact] = useState("")
  const [searchResults, setSearchResults] = useState([])

  // Accessing data from the api
  const retrieveContacts = async() => {
    const response = await api.get('/contacts')
    return response.data;
  };

  const addContactHandler = async (contact) => {
    console.log(contact)
    const request = {
      id : uuidv4(),
      ...contact
    }
    const response = await api.post('/contacts', request)
    setContacts([...contacts, response.data]);
  }

  const removeContactHandler = async(id) => {
    await api.delete(`/contacts/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }

  const updateContactHandler = async(contact) => {
      const response = await api.put(`/contacts/${contact.id}`, contact)
      const {id, name, email} = response.data
      setContacts(contacts.map((contact) => {
          return contact.id === id ? {...response.data} : contact;
      }))
  }

  const searchHandler = (searchContact) => {
    setSearchContact(searchContact);
    if(searchContact !== ""){
      const newContactList = contacts.filter((contact) => {
         return Object.values(contact).join(" ").toLowerCase().includes(searchContact.toLowerCase());
      })
      setSearchResults(newContactList)
    }
    else {
      setSearchResults(contacts)
    }
  }

  useEffect(() => {
    const getAllContacts = async() => {
      const allContacts = await retrieveContacts();
      if(allContacts){
        setContacts(allContacts)
      }
    }
    getAllContacts() 
  },[])

  return (
    <div className='ui container' style={{padding : 10}}>
      <Router>
        <Header />
        <Routes > 
        <Route path='/' element={<ContactList searchContact={searchContact} 
        contacts={searchContact < 1 ? contacts : searchResults} getContactId={removeContactHandler}
        searchKeyword={searchHandler}
        />} />

        <Route path='/add' element={<AddContact addContactHandler={addContactHandler}/>} />
        <Route path='/edit' element={<EditContact updateContactHandler={updateContactHandler}/>} />
        <Route path='/contactdetail/:id' element={<ContactDetail/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
