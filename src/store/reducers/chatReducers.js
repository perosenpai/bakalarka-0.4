const defaultState = {
    socket: null,
    message: '',
    threads: [],
    currentThread: '',
    users: []
}

const chat = (state=defaultState, action) =>{
    switch(action.type){
        case 'SETUP_SOCKET':
            return{
                ...state,
                socket: action.payload
            }
        case 'GOTUSERS':
            console.log("Getting users?", action.payload);
            return{
                ...state,
                users: action.payload
            }
        default:
            return state
    }
} 

export default chat;