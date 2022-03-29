import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Lyric extends Component {
    render() { 
        const {lyric} = this.props
        return (
            <div className="lyrics__item col-11">
                <div className="col-2">
                    <img src={lyric.album.cover}/>
                </div>
                <div className="col-9">
                    <div className="d-flex justify-content-between">
                        <div className="col-10">
                            <p className="title">
                                {lyric.title_short}
                            </p>
                            <p className="artist">
                                {lyric.artist.name}
                            </p>
                        </div>
                        <div className="col-1">
                            <Link to={`/lyrics/${lyric.title_short}/${lyric.artist.name}`}>More</Link>
                        </div>   
                    </div>
                    <div>
                        <audio controls>
                            <source src={lyric.preview} type="audio/mpeg"/>
                            Your browser does not support the audio element.
                        </audio>
                    </div>
                </div>     
            </div>
            );
    }
}
 
export default Lyric;