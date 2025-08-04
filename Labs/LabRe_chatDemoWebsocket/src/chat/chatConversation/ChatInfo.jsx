import {Header, Label} from "semantic-ui-react"

export default function ChatInfo ({user}) {
    console.log(user)
    
    return (
        <>
        <Header as="h3" floated="left" style={{color: "grey"}}>
            {user.name}{", "}{user.chatSelected}
        </Header>
        <Header as="h5" floated="right">
            <Label circular color={"teal"} key={"teal"}>
                Connected
            </Label>
            <Label circular color={"grey"} key={"grey"}>
                Log out
            </Label>
        </Header>
        </>
    )
}