import {
  GET_CONTACT,
  GET_CONTACTS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT

} from '../types'

const initialState = {
  contacts: [],
  contact: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    
    case GET_CONTACTS:
      console.log('GET_CONTACTS REDUCER', action)
      return {
        ...state,
        // contacts: action.payload
      };


    case GET_CONTACT:
      console.log('GET_CONTACT REDUCER')
      return {
        ...state,
        contact: state.contacts.filter(contact => contact.id === action.payload)
      };

    case ADD_CONTACT:
      console.log('ADD_CONTACT')
      return {
        ...state,
        contacts: [
          action.payload,
          ...state.contacts
        ]
      }

    case UPDATE_CONTACT:
      console.log('UPDATE_CONTACT REDUCER')

      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
          
        )
      };

    case DELETE_CONTACT:
      console.log('DELETE_CONTACT')
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      }
    default:
      return state
  }
}