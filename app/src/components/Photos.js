import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";


import { fetchPhotos } from '../actions';

const Photos = props => {
    console.log(props);
    return (
        <div className="main-app">
            <h1>Get random photos from Pixabay</h1>
            <button className="button" onClick={props.fetchPhotos}>Get Photo</button>
            {!props.photos && !props.isLoading && (
                <h2>Go ahead a fetch a new photo!</h2>
            )}          
            {props.isLoading && (
                <Loader
                    type="Puff"
                    color="#00BFFF"
                    height={100}
                    width={100}
                    timeout={3000} //3 secs 
                />
            )}
            {props.photos && props.photos.length > 0 && !props.isLoading && (
                <img src={props.photos[Math.floor(Math.random()*props.photos.length)].largeImageURL}/>
            )}  
        </div>
    );
};

 const mapStateToProps = state => {
     return {
        isLoading: state.isLoading,
        photos: state.photos,
        error: state.error
     }
 }

export default connect( mapStateToProps, { fetchPhotos })(Photos);
