import React, { Component } from 'react';
import Lyrics from '../components/lyrics/lyrics';
import SearchBox from './search/Search';

class Home extends Component {
    state={
        lyrics:[]
    }
     searchHandler = (e) =>{
        const axios = require('axios')
        let keyword = e.target.value
        let lyrics = axios.get(`https://api.lyrics.ovh/suggest/${keyword}`)
        .then((response) =>{
            if(response.data){
                lyrics=response.data.data
                this.setState({lyrics})
                console.log(lyrics)
            }
        }).catch(function(error){
            console.log(error)
        })
    }
    render() { 
        const {lyrics} = this.state
        return (
            <div className="home-page">
                <SearchBox searchLyrics={this.searchHandler}/>
                <Lyrics lyrics={lyrics}/>
            </div>
            );
    }
}
 
export default Home;