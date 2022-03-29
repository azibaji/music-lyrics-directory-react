import React, {useState} from "react";
import {useParams} from "react-router-dom"
import './lyricDetail.css'

const LyricDetail = () => {
    let { musicName, artist } = useParams();
    const [lyric, setLyric] = useState('');
        
        fetch(`https://api.lyrics.ovh/v1/${artist}/${musicName}`)
        .then(res => res.json())
        .then(
            (result) => {
                result.lyrics ? 
            setLyric(result.lyrics) :
            setLyric(result.error);
        },
            (error) => {
                let notFound = error.error;
                setLyric(notFound);
            }
        );
        return (
            <div className="lyric">
                <div className="text-left lyric__header">
                    <h3 className = 'title'>{musicName}</h3>
                    <h2 className = 'artist'>Song by {artist} : </h2>
                </div>
                <div className="lyric__body">
                    <pre>{lyric}</pre>
                </div>
            </div>
        )
}
 
export default LyricDetail;