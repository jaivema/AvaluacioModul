import ChatRoom from "../chat/ChatRoom"
import SocketProvider from "../APIComunication/SocketProvider"

export default function Chat() {
  return (
    <>
    <SocketProvider>
      <ChatRoom />
    </SocketProvider>
    </>
  );
}