import React, { Component } from "react";
import "./App.css";

class SentMessages extends Component {
    constructor(props) {
        super(props);

        this.messagesSent = this.messagesSent.bind(this);
    }

    messagesSent(message){
        return <li key={message.key}>{message.text}</li>
    }

    render(){
        var sentMessages = this.props.entries;
        var messagesListed = sentMessages.map(this.messagesSent);

        return(
            <div className="messageList">
                {messagesListed}
            </div>
        );
    }
};

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };

        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(e) {
        var messageArray = this.state.messages;

        if(this._inputElement.value !== "") {
            messageArray.unshift({
                text: this._inputElement.value,
                key: Date.now()
            });

            this.setState({
                messages: messageArray
            });

            this._inputElement.value = "";
        }

        console.log(messageArray);

        e.preventDefault();
    }

    render() {
        return(
            <div className="container">
                <div className="header">
                    <button className="backButton">Back</button>
                </div>
                <div className="chatWindow">
                    <SentMessages entries={this.state.messages}/>
                </div>
                <div className="chatInputWrapper">
                    <form onSubmit={this.sendMessage}>
                        <input ref={ (a) => this._inputElement = a } className="textareaInput" type="text"></input>
                        <button type="submit" className="sendButton">Send</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Chat;