import {
  GET_CONTACT, 
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT

} from '../types'

export const getContacts = () => {
  console.log('GET_CONTACTS ACTION')
  return {
    type: GET_CONTACTS
  }
}

export const getContact = (id) =>  {
  console.log('GET_CONTACT ACTION')
  return {
    type: GET_CONTACT,
    payload: id
  }
};



export const addContact = (contact) => {
  // console.log('ADD_CONTACT ACTION')
  return {
    type: ADD_CONTACT,
    payload: contact
  }
}

export const updateContact = (contact) => {
  console.log('UPDATE_CONTACT ACTION', contact)
  return {
    type: UPDATE_CONTACT,
    payload: contact
  }
}

export const deleteContact = (id) => {
  // console.log('DELETE_CONTACT ACTION')
  return {
    type: DELETE_CONTACT,
    payload: id
  }
}
