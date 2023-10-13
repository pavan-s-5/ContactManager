import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditContact = (props) => {
  const location = useLocation();
  const contactData = location.state?.contact || { id: '', name: '', email: '' };

  const [formData, setFormData] = useState(contactData);

  const update = (e) => {
    e.preventDefault();
    if (formData.name === '' || formData.email === '') {
      alert('Please fill all the fields');
      return;
    }
    props.updateContactHandler(formData);
    setFormData({
      id: '',
      name: '',
      email: '',
    });
    toast('Contact Updated Successfully');
  };

  return (
    <div className="ui main">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <h2 style={{ display: 'flex', flexGrow: 1 }}>✒️Edit Contact</h2>
        <Link to={'/'}>
          <button className="ui button blue right">⬅️Back</button>
        </Link>
      </div>

      <form className="ui form" onSubmit={update}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter person name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        <button className="ui button blue">Update</button>
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
  );
};

export default EditContact;
