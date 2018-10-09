import React, { Component } from 'react';
import TextInputGroup from '../layout/TextInputGroup';
import { connect } from 'react-redux'
import { getContact, updateContact } from '../../store/actions/contactAction';
import PropTypes from 'prop-types'


class EditContact extends Component {
  state = {
    name: '',
    email: '',
    phone: '',
    errors: {}
  };

  
  componentWillReceiveProps(nextProps, nextState) {
    // console.log('EditContact componentWillReceiveProps', nextProps.contact[0])
    const { name, email, phone } = nextProps.contact[0];
    // console.log('EditContact componentWillReceiveProps', name)
    this.setState({
      name,
      email,
      phone
    });
  }

  /**
   * By not using Async and await it wont work
   * 
   */
  async componentDidMount() {
    console.log('EditContact componentDidMount')
    // console.log('this props before-------->',this.props)
    const { id } = this.props.match.params;
    await this.props.getContact(id);
    console.log('this props after-------->',this.props)
  }

  

  onSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    // Check For Errors
    if (name === '') {
      this.setState({ errors: { name: 'Name is required' } });
      return;
    }

    if (email === '') {
      this.setState({ errors: { email: 'Email is required' } });
      return;
    }

    if (phone === '') {
      this.setState({ errors: { phone: 'Phone is required' } });
      return;
    }

    const { id } = this.props.match.params;

    const updateNewContact = {
      id,
      name,
      email,
      phone
    };

   
    //// UPDATE CONTACT ////
    this.props.updateContact(updateNewContact)


    // Clear State
    this.setState({
      name: '',
      email: '',
      phone: '',
      errors: {}
    });

    this.props.history.push('/');
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    
    const { name, email, phone, errors } = this.state;

  
    const editForm = (this.props.contact != null ) 
      ? (
        <div className="card mb-3">
          <div className="card-header">
            <h1 className="display-4 mb-2" >Edit Contact</h1>
          </div>
          <div className="card-body">

            <form onSubmit={this.onSubmit}>
              <TextInputGroup
                label="Name"
                name="name"
                placeholder="Enter Name"
                value={name}
                onChange={this.onChange}
                error={errors.name}
              />

              <TextInputGroup
                label="Email"
                name="email"
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={this.onChange}
                error={errors.email}
              />

              <TextInputGroup
                label="Phone"
                name="phone"
                placeholder="Enter Phone"
                value={phone}
                onChange={this.onChange}
                error={errors.phone}
              />

              <input
                type="submit"
                value="Update Contact"
                className="btn btn-light btn-block"
              />

            </form>
          </div>
        </div>
      ) 
      : (
        <div>Loading...</div>
      );

    return (
      editForm
    )

  }
}


EditContact.propTypes = {
  contact: PropTypes.array.isRequired,
  getContact: PropTypes.func.isRequired,
  updateContact: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  contact: state.contact.contact
});


export default connect(mapStateToProps, {getContact, updateContact})(EditContact);

