import { Card, Image } from "semantic-ui-react"

export default function Home() {
  return (
    <>
      <Card color="orange" style={{ maxWidth: "400px", margin: "auto" }}>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        />
        <Card.Content>
          <Card.Header style={{ backgroundColor: "grey", color:"white", textAlign:"center"}}>Elliot Baker</Card.Header>
          <Card.Description style={{ color: "grey" }}>
            Achieve balance in life by focusing on your health and wealth. Take
            care of your body and mind while building financial stability.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <span style={{ color: "grey" }}>
            <i className="heart outline icon"/>200 Likes
          </span>
          <span style={{ color: "grey", marginLeft: "10px" }}>
            <i className="comment outline icon"/>50 Comments
          </span>
        </Card.Content>
      </Card>
    </>
  );
}
