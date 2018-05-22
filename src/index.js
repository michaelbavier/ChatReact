import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import photo from './michael.jpg';

ReactDOM.render(<MainContainer/>, document.getElementById ('root'));


function MainContainer (){
    return <div className="maincontainer"> <Global/> <Box/></div>
}

function Global (){
    return <div className="global"> <Contact/> <div className="maincontainers"> <Container/> <Heure/> <Container/> <Heure/> </div> </div>
}


function Container (){
    return <div className="container"> <Utilisateurs/> <Bull/> </div> 
}


function Contact (){
    return <div className="contact"></div>
}


function Utilisateurs (){
    return <div className="utilisateurs"> <User/> <Pseudo/> </div> 
}

function Pseudo (){
    return <div className="pseudo">{"Michaël Bavier"} </div>
}

function User (){
    return <div className="users"> <img src={photo}/><div className="status"> </div> </div>
}





//OK
function Bull (){
    return <div className="bull"> <p> {"Hello"}</p> </div>
}

//OK
function Heure (){
    return <div className="heure"> <p>{ "17h59"}</p></div>
}

//OK
function Box(){
    return <div className="box"> <form> <input type ="texte"/> <button> x </button> </form> </div>
}


