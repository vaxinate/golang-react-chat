import { useState, useRef, ChangeEvent, useReducer, useEffect, useCallback } from "react";
import useWebSocket, { ReadyState, SendMessage } from "react-use-websocket";
import { Card, Input, Button, Typography, Textarea} from "@material-tailwind/react";

import './App.css'

interface FormProps {
  sendMessage: SendMessage,
};

function Form({ sendMessage }: FormProps) {

  const [message, setMessage] = useState<string>("");

  function onInputChange(e: ChangeEvent<HTMLTextAreaElement>) {
    return setMessage(e.currentTarget?.value)
  }

  function onClickSend() {
    sendMessage(message);

    return setMessage("")
  }
  
  return (
    <Card color="transparent" shadow={false} className="p-6 w-80">
      <Typography variant="h4">
        Send a message.
      </Typography>
      <form className="mt-8 mb-2">
        <div>
          <Textarea label="Message Text" value={message} onInput={onInputChange}/>
        </div>
          <Button className="mt-6" onClick={onClickSend} fullWidth>
            Send Message
          </Button>
      </form>
    </Card>
  )
}

interface ResponseProps {
  messageText: string | undefined,
};

function Response({ messageText }: ResponseProps) {
  if (messageText)
    return (
    <Card className="w-80 ml-6 p-3">
        {messageText}
      </Card>
    )
}

function App() {
  const { sendMessage, lastMessage } = useWebSocket("ws://localhost:8080/ws");

  return (
    <>
      <Form sendMessage={sendMessage}/>
      <Response messageText={lastMessage?.data} />
    </>
  )
}

export default App
