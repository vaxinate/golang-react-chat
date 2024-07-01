## Design document

## Phase 1

First implement a single channel party chat server and UI with no auth

* users may choose any valid name they like
* all actively connected users must have unique names
* users may view a list of all other active users
* all users can send messsages to the server via the UI
* messages include a sender and timestamp (take care to prevent spoofing)
* message history persists until the client is restarted/reloaded
* message history is displayed in UI sequentially with usernames and timestamps
* user can connect/disconnect at will
* connection status change notifications apppear in chat history

## Phase 2

* users must register and authenticate to chat
* registered users must have unique usernames
* the server supports storing and retrieving message history
* the client displays 24h of message history at log in time
* server must be horizontally scalable

## Phase 3

* the server and client can support tx/rx on multiple channels
* all users may access any channel
* all users may view a complete list of channels available
* users can view a channel's message history and list active users
* any user can create a new channel




