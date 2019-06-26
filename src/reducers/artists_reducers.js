export default function(state={},action){
    
    switch(action.type){
        case 'GET_ARTIST':
            return {...state,artistList:action.payload}
        case 'GET_ALL_ARTISTS':
            return {...state,artistList:action.payload}
        case 'GET_ARTIST_DETAIL':
            return {...state,artistData:action.payload}
        case 'CLEAR_ARTIST_DETAIL':
            return {...state,artistData:action.payload}
        default:
            return state;
    }
}