import { WebSocket } from "ws"

export class UserManager {
        private users: {
            roomId: string,
            socket: WebSocket
        }[]

    constructor() {
        this.users = []


    }

    addUser(roomId: string, socket: WebSocket) {
        let ifUserFound = this.users.find((user: {roomId: string, socket: WebSocket}) => user?.socket === socket)

        if(!ifUserFound){
            this.users.push({
                roomId: roomId,
                socket: socket
            })

            return socket;
        }

        

        else {
            return ifUserFound
        }


    }

    removeUser(){

    }

    private createHandlers(roomId: string, socket:WebSocket) {   //sending message function
        socket.on("message", (data)=>{
            

        })



    }
}