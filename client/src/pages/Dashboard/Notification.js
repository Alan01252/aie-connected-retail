import React from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import {Event} from "react-socket-io";

class Notification extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.createNotification = this.createNotification.bind(this);
    }


    createNotification = (message) => {
        console.log("Got message" + message);
        console.log(message.message);
        NotificationManager.info(message.message);
    }

    render() {
        return (
            <div>
                <Event event='notification' handler={this.createNotification}/>
                <NotificationContainer/>
            </div>
        );
    }
}

export default Notification;