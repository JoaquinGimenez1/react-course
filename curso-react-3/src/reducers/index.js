import {combineReducers} from "redux";

const songReducer = () =>{
    return [
        {title:'No Scrubs', duration:'4:00'},
        {title:'Macarena', duration:'3:58'},
        {title:'Despacito', duration:'5:15'},
        {title:'La Bicicleta', duration:'3:30'}
    ];
};

const selectedSongReducer =(selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
   songs: songReducer,
   selectedSong: selectedSongReducer
});
