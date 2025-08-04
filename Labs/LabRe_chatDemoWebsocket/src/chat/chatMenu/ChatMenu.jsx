import { useReducer, useState } from "react"
import {Container, Divider} from "semantic-ui-react"
import ChatMenuHeader from "./ChatMenuHeader"
import ContactsList from "./ContactsList"
import AddContact from "./AddContact"
import CreateChat from "./CreateChat"

const initialState = {
  contacts: [],
  chats: [],
}

const actionTypes = {
  ADD_CONTACT: "ADD_CONTACT",
  CREATE_CHAT: "CREATE_CHAT",
}

function chatReducer(state, action) {
  switch (action.type) {
    case actionTypes.ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      }
    case actionTypes.CREATE_CHAT:
      return {
        ...state,
        chats: [...state.chats, action.payload],
      }
    default:
      return state
  }
}

export default function ChatMenu({user, selectChat}) {
  const [showChat, setShowChat] = useState({
    contactsList: true,
    createChat: false,
    addContact: false
  })
  console.log("ChatMenu:", showChat)

  const [state, dispatch] = useReducer(chatReducer, initialState);

  const handleShowContactsList = () => {
    console.log("Showing Contacts List")
    setShowChat({
      contactsList: true,
      createChat: false,
      addContact: false
    })
  }

  const handleShowCreateChat = () => {
    console.log("Showing Create Chat")
    setShowChat({
      contactsList: false,
      createChat: true,
      addContact: false
    })
  }

  const handleShowAddContact = () => {
    console.log("Showing Add Contact")
    setShowChat({
      contactsList: false,
      createChat: false,
      addContact: true
    })
  }

  const handleAddContact = (contact) => {
    dispatch({ type: actionTypes.ADD_CONTACT, payload: contact })
    handleShowContactsList()
  }

  const handleCreateChat = (chat) => {
    dispatch({ type: actionTypes.CREATE_CHAT, payload: chat })
    handleShowContactsList()
  }

  return (
    <>
    <Container>
      <ChatMenuHeader
        handleShowContactsList={handleShowContactsList}
        handleShowCreateChat={handleShowCreateChat}
        handleShowAddContact={handleShowAddContact}
      />
    </Container>
    
    <Divider />
    
    <Container style={{
      paddingTop: "30px",
      paddingLeft: "15px",
      paddingBottom: "5px"
    }}>
      {
        showChat.contactsList && (<ContactsList user={user} selectChat={selectChat} />)
      }
      {
        showChat.createChat && <CreateChat createChat={handleCreateChat} />
      }
      {
        showChat.addContact && <AddContact addContact={handleAddContact} />
      }
    </Container>
    </>
  )
}