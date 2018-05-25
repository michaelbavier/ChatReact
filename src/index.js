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
            {props.name},
            <Container utilisateur="Michël"/>
            <Heure heure="17h30"/>
        </div>
        )
}

function Container (props){
    return (
    <div className="container">
    {props.utilisateur}
    
        <Utilisateur utilisateur="Michaël" />
        <MessageBubble />
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
                    props.utilisateur
                    {props.utilisateur}
                </p>
            </div>
        </div>
    )
 }


function Contacts (){
    return (

     <div className="contact">
        <div className="connecter">
            <p>
            </p>
        </div>
            <div className="déconnecter">
            </div>
    </div>
    )
}



function MessageBubble (){
    return (
    <div className="messageBubble">
        <p>
        </p>
    </div>
    )
}

function Heure (props){
    return (
    <div className="heure">
    <p>
        {props.heure}
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
















hello();




const myAge = 10;

printMyAge();






















main();

function main() {
    printPretty();
}

function printPretty() {
    console.log('=====================');

    printUser('Michael');

    printHeure('10h30');
    console.log('=====================');
} 

function printHeure(heure) {
    console.log('il est ' + heure)
}

function printUser(name) {
    console.log('je suis ' + name);
}