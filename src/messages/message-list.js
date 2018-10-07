// Stateful component which will act as a parent to MessageView component.
// We’ll make use of the state data type to store a message which we’ll pass
// on to MessageView.

import React from 'react';
import MessageView from './message-view';

class MessageList extends React.Component {
    state = {
        messages: [
            {
                from: 'John',
                content: 'The event will start next week',
                status: 'unread'
            },
            {
                from: 'Martha',
                content: 'I will be traveling soon',
                status: 'read'
            },
            {
                from: 'Jacob',
                content: 'Talk later. Have a great day!',
                status: 'read'
            }
        ]
    }

    render() {
        const messageViews = this.state.messages.map(function (message, index) {
            return (
                <MessageView key={index} message={message} />
            )
        })
        
        return (
            <div>
                <h1>List of Messages</h1>
                {messageViews} />
            </div>
        )
    }
}

export default MessageList;

