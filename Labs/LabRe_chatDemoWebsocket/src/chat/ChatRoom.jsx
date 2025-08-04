import {
  GridRow,
  GridColumn,
  Grid,
  Container,
  Button,
} from "semantic-ui-react"
import ChatMenu from "./chatMenu/ChatMenu"
import ChatConversation from "./chatConversation/ChatConversation"
import { WebSocketContext } from "../APIComunication/SocketProvider"
import { useContext, useState, useEffect } from "react"
import initUser from "./initUser.json"

const fakeLogins = [
  { chatId: "elliot", userId: "elliot" },
  { chatId: "helen", userId: "helen" },
  { chatId: "matthew", userId: "matthew" },
  { chatId: "daniel", userId: "daniel" },
  { chatId: "laura", userId: "laura" },
  { chatId: "jenny", userId: "jenny" }
]

export default function ChatRoom() {

  const [user, setUser] = useState(initUser)
  const [isConnected, message, send] = useContext (WebSocketContext)
  
  const sendFakeLogin = (chatId, userId) => {
    const loginOwnerUser = "owner#" & userId
    const fakeDataLogin = {action: "login", chatId: chatId, userId: loginOwnerUser}

    if (isConnected) {
      send(JSON.stringify(fakeDataLogin))
    
      setUser({
        ...user,
        userId: userId,
        chatId: chatId,
        isConnected: isConnected
      })
    }
  }

  const selectChat = (chatSelected) => {
    const fakeSelectedDataLogin = {
      action: "login",
      chatId: chatSelected,
      userId: user.userId
    }
    if (isConnected) { 
      send(JSON.stringify(fakeSelectedDataLogin))
      setUser({ ...user, chatSelected: chatSelected , chatId: chatSelected})
    }
  }
  
  useEffect(() => {
    if (message) {
      const isLogged = JSON.parse(message).action === "logged in"
      
      if (isLogged) {
        setUser(prevUser => ({
          ...prevUser,
          connectionId: JSON.parse(message).connectionId,
          chats: JSON.parse(message).dataOwner.chats,
          name: JSON.parse(message).dataOwner.fullName,
          avatar: JSON.parse(message).dataOwner.avatar,
          isLogin: true
        }))
      }
    }
  }, [message])
  
  return (
    <>
    {!isConnected ? ("Connecting ....") : !user.isLogin ? (
      <Container textAlign="center" style={{ marginTop: "100px" }}>
        
        {fakeLogins.map((login, index) => (
          <Button style={{ marginBottom: "25px", marginLeft: "25px" }}
            color="blue"
            circular
            key={index}
            onClick={() => sendFakeLogin(login.chatId, login.userId)}
          >
            Fake Login user: {login.userId} & chat: {login.chatId}
          </Button>
        ))}
      </Container>
    ) : (
      <Container style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "10px", marginBottom: "10px" }}>
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn width={4}>
              <ChatMenu user={user} selectChat={selectChat}/>
            </GridColumn>
            <GridColumn width={12}>
              <ChatConversation user={user}/>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    )}
    </>
  )
}