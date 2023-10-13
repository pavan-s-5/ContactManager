import React from 'react'
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class  AddContact extends React.Component {

  state = {
    name : '',
    email : '',
  }

  add = (e) => {
    e.preventDefault();
    if(this.state.name === ""  || this.state.email === ""){
      alert("Please fill all the fields")
      return
    }
  console.log(this.state)
  this.props.addContactHandler(this.state)
  this.setState({name : "", email : ""})
  toast('Contact Add Sucessfully')
  }

  render(){
    return (
      <div className='ui main'>
      <div style={{display:'flex', alignItems : 'center'}}>
        <h2 style={{display : 'flex', flexGrow : 1}}>🔗Add New Contact</h2>
        <Link to={'/'}><button className='ui button blue right'> ⬅️Back </button></Link>
      </div>

      <form className='ui form' onSubmit={this.add}>

        <div className='field'>
          <label>Name</label>
          <input type="text" name='name' placeholder='Enter person name' value={this.state.name} onChange={(e) => this.setState({name : e.target.value})}/>
        </div>

        <div className='field'>
          <label>Email</label>
          <input type="email" name='email' placeholder='example@gmail.com'
          value={this.state.email} onChange={(e) => this.setState({email : e.target.value})} />
        </div>

        <button className='ui button blue'> Add </button>
      </form>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>    
  )
}
}

export default AddContact