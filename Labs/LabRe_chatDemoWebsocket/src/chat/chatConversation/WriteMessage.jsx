import { Input } from "semantic-ui-react"
import { useState } from "react"

const WriteMessage = ({ dispatch }) => {
  const [text, setText] = useState("")

  const handleSend = () => {
    if (text.trim() !== "") {
      dispatch({ type: "send", payload: text })
      setText("");
    }
  };

  return (
    <>
    <Input fluid onChange={(e)=>setText(e.target.value)} action={{
        icon: "send",
        onClick: () => {
          handleSend();
        },
      }}
      placeholder="Write message..."
      type="text"
      name="content"
      value={text}
    />
    </>
  );
};
export default WriteMessage