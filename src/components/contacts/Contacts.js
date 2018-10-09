import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getContacts } from '../../store/actions/contactAction'

class Contacts extends Component {

  componentDidMount() {
    console.log('Contacts componentDidMount')
    //await this.props.getContacts()
  }

  render() {
    
    const { contacts } = this.props;
    console.log('Contacts --> props', this.props)
    console.log('Contacts --> contacts', contacts)
    const contactList = (contacts === undefined || contacts.length < 1) 
      ? (
        <div>Please add Contact</div>
      )
      : (
        contacts.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))
      )
   
      return (
        <React.Fragment>
          <h1 className="display-4 mb-2">
            <span className="text-danger">Contact</span> List
          </h1>
          { contactList }
        </React.Fragment>
      );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired

}


// Fetch Contacts
const mapStateToProps = (state) => ({
  contacts: state.contact.contacts
})

// option 1
// const mapDispatchToProps = (dispatch) => ({
//   getContacts: () => dispatch({type: GET_CONTACTS})
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default connect(mapStateToProps, { getContacts })(Contacts);
