import ioClient from 'socket.io-client';

const  socket = ioClient('http://localhost:3002');

console.log(socket);
























// // CONNEXION AU SERVEUR AVEC UN CLIENT




// function registerHandler(oneMessageReceveid) {
//     socket.io('message' , oneMessageReceveid)
// }

// function unregisterHandler(){
//     socket.off('message')
// }

// socket.on('error', function(err) {
//     console.log('receveid socket error:')
//     console.log(err)
// })

// function register(name, cb) {
//     socket.emit('register', name, cb)
// }

// function join (chatroomName, cb) {
//     socket.emit('join', chatroomName, cb)
// }

// function leave (chatroomName, cb) {
//     socket.emit('leave', chatroomName, cb)
// }


// function message(chatroomName, msg, cb) {
//     socket.emit('message', { chatroomName, message: msg}, cb)
// }

// function getChatrooms(cb){
//     socket.emit('chatrooms', null, cb)
// }

// function getAvaillableUsers(cb){
//     socket.emit('availableUsers', null, cb)
// }

// // INPLEMENTER L'API


// function handleRegister(userName, callback) {
//     if (!clientManager.isUserAvailable(userName))
//     return callback('user is available')

//     const user = clientManager.getUserByName(userName)
//     clientManager.registerClient(client, user)

//     return callback(null, user)
// }




// function handleEvent(chatroomName, createEntry) {
//     return enseureValidChatRoomAndUserSelect(chatroomName)
//     .then(function ({chatroom, user}) {

//         const entry = { user, ...createEntry()}
//         chatroom.addEntry(entry)


//         chatroom.broadcastMessage({ chat: chatroomName, ...entry })
//         return chatroom
//     })
// }





// const menbers = new Map()
// let chatHistory = []

// function broadcastMessage (message) {
//     menbers.forEach(m => m.emit('message', messahe))
// }

// function addEntry(entry) {
//     chatHistory = chatHistory.concat(entry)
// }

// function getChatHistory() {
//     return chatHistory.slice()
// }

// function addUser(client) {
//     menbers.set(client.id, client)
// }

// function removeUser(client){
//     menbers.delete(client.id)
// }

// function serialize () {
//     return {
//         name,
//         image,
//         numMenbers:nembers.size
//     }
// }
    
// // GESTIONNAIRES DE JOINTURE

// function HandleJoin(chatroomName, callback){
//     const createEntry = () => ({ event: 'joined ${chatroom}'})

//     handleEvent (chatroomName, createEntry)
//     .then(function (chatroom) {


//         chatroom.addUser(client)



//         callback(null, chatroom, getChatHistory())
//     })
//     .catch(callback)
// }


// function handleDisconnect () {

// clientManager.removeClient(client)

// chatroomManager.removeClient(client)

// }



