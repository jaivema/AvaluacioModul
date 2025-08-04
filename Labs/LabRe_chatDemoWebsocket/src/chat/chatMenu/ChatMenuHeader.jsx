import {Header, Button, ButtonGroup, Container} from "semantic-ui-react"

export default function ChatMenuHeader
 ({
    handleShowContactsList,
    handleShowCreateChat,
    handleShowAddContact
  }) 
{
  return (
    <>
    <Header as="h3">Chats</Header>
    
    <Container style={{
        border: "none",
        paddingLeft: "10px",
        paddingBottom: "5px"
    }}>
      <ButtonGroup vertical basic fluid>
        <Button icon="users" content="Contacts"
          labelPosition="right"
          size="tiny"
          onClick={handleShowContactsList}
        />
        <Button icon="chat" content="New chat"
          labelPosition="right"
          size="tiny"
          onClick={handleShowCreateChat}
        />
        <Button icon="user" content="Add"
          labelPosition="right"
          size="tiny"
          onclick={handleShowAddContact}
        />
      </ButtonGroup>
    </Container>
    </>
  )
}