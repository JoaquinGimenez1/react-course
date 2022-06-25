import React from 'react';
import { connect } from 'react-redux';
import {selectSong} from "../actions";

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map( (song) => {
           return (
               <div className="item" key={song.title}>
                   <div className="right floated content">
                       <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
                           Select
                       </button>
                   </div>
                   <div className="content">{song.title}</div>
               </div>);
        });
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {songs: state.songs};
};

export default connect(mapStateToProps, {selectSong : selectSong})(SongList);
//todo lo que esta en el conectt() es lo que le pasamos al componente, el 2do seria el componente a odnde llevamos toodsl esos props
//export default connect(mapStateToProps, {selectSong})(SongList);
