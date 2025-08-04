import { useContext, useEffect, useReducer } from "react"
import { WebSocketContext } from "../../APIComunication/SocketProvider"
import { Feed, Segment, Container } from "semantic-ui-react"
import DetailConversationFeed from './DetailConversationFeed'
import WriteMessage from "./WriteMessage"

export default function ConversationFeed({user}) {
  const [isConnected, message, send] = useContext(WebSocketContext)
  const [conversation, dispatch] = useReducer(conversationReducer, [])
  
  function conversationReducer(conversation, action) {
    switch (action.type) {
      case "send": {
        let data = {
          action: "conversation",
          chatId: user.chatId,
          userId: user.userId,
          text: action.payload
        }
        if (isConnected) send(JSON.stringify(data))

        const newMessage = {
          id: Date.now(),
          time: Date.now(),
          chatId: user.chatId,
          userId: user.userId,
          text: action.payload
        }
        const updatedConversation = [...conversation, newMessage]
        saveConversationToLocalStorage(user.chatId, updatedConversation)

        return updatedConversation
      }

      case "receive": {
        const receivedMessage = JSON.parse(message)
        const newMessage = {
          id: Date.now(),
          time: JSON.parse(message).time,
          chatId: JSON.parse(message).chatId,
          userId: JSON.parse(message).userId,
          text: JSON.parse(message).text,
          message
        }
        const updatedConversation = [...conversation, newMessage]
        
        saveConversationToLocalStorage(
          receivedMessage.chatId,
          updatedConversation
        )

        return updatedConversation
      }

      case "load": {
        return action.payload || []
      }

      default: {
        return conversation
      }
    }
  }
  
  useEffect(() => {
    if (message) {
      let stringMessage = JSON.stringify(message)
    
      if (!stringMessage.includes("sent at")) {
        const parsedMessage = JSON.parse(message)
        if (parsedMessage.action === "conversation" && parsedMessage.chatId === user.chatId) {
          dispatch({ type: "receive", payload: message })
        }
      }
    }
  }, [message, user.chatId])
  
  useEffect(() => {
    const savedConversation = loadConversationFromLocalStorage(user.chatId)
    dispatch({ type: "load", payload: savedConversation })
  }, [user.chatId])

  function loadConversationFromLocalStorage(chatId) {
    const savedConversation = localStorage.getItem(`conversation_${chatId}`)
    return savedConversation ? JSON.parse(savedConversation) : []
  }

  function saveConversationToLocalStorage(chatId, conversation) {
    localStorage.setItem(
      `conversation_${chatId}`, JSON.stringify(conversation)
    )
  }
  
  return (
    <>
    <Segment clearing>
      <Feed style={{ paddingLeft: "20px" }}>
        <DetailConversationFeed conversation={conversation} />
      </Feed>
    </Segment>
    <Container>
      <WriteMessage dispatch={dispatch} />
    </Container>
    </>
  )
}