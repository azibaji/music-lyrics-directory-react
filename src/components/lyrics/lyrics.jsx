import React, { Component } from 'react';
import Lyric from './lyric';
import './lyrics.css'
class Lyrics extends Component {
    render() { 
        const {lyrics} = this.props
        return (
            <div className="lyrics">
                {lyrics.map(lyric =>(
                    <Lyric key={lyric.id} lyric={lyric}/>
                ))}
            </div>
            );
    }
}
 
export default Lyrics;