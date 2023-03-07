import React from 'react'

function Message(props) {

    const {message} = props;

    return (
        <div>            
          <div className={`chat chat-${message.position}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={message.avatar}/>
                    </div>
                </div>
                <div className="chat-header">
                    {message.user}
                    <time className="text-xs opacity-50">{message.time}</time>
                </div>
                <div className="chat-bubble">{message.message}</div>            
            </div>    
        
        </div>
    )
}

export default Message