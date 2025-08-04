import {Segment, Container} from "semantic-ui-react"
import ChatInfo from "./ChatInfo"
import ConversationFeed from "./ConversationFeed"


export default function ChatConversation({user}) {
  return (
    <>
    <Segment clearing>
      <ChatInfo user={user} />
    </Segment>

    <Container>
      <ConversationFeed user={user}/>
    </Container>
    </>
  )
}