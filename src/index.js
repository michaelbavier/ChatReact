import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App';
import registerServiceWorker from './registerServiceWorker';
import photo from './michael.jpg';




class App extends React.Component {
    render(){
        return (
            <div className="maincontainer">
                <div className="global">
                    <Contacts name="Michaël"/>
                    <div className="messageList">
                       <Message/>
                       <Message/>
                    </div>
                </div>
                <Box/>
            </div>
        )
    }
}

function Message (props){
    return (
        <div>
            {props.name}
            <Container/>
            <Heure/>
        </div>
        )
}

function Container (){
    return (
    <div className="container">
        <Utilisateur name="Michaël Bavier"/>
        <MessageBubble name="Bonjour a tous"/>
    </div>
    ) 
}


function Contacts (props){
    return (

     <div className="contact">
        <div className="connecter">
            <p>
            {props.name}
            </p>
        </div>
            <div className="déconnecter">
            </div>
    </div>
    )
}


function Utilisateur (props){
    return (
        <div className="utilisateur"> 
            <div className="users">
                <img src={photo}/>
                <div className="status"> 
                </div> 
            </div>
            <div className="pseudo">
                <p>
                {props.name}
                </p>
            </div>
        </div>
    )
 }


function MessageBubble (props){
    return (
    <div className="messageBubble">
        <p>
            {props.name}
        </p>
    </div>
    )
}

function Heure (props){
    return (
    <div className="heure">
        <p>
            {props.name}
        </p>
    </div>)

}

function Box(){
    return (
    <div className="box">
        <form className="form">
            <input type ="texte" name="texte"/>
            <input type="submit"/>
        </form>
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById ('root'));

