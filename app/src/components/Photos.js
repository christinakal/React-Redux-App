import React from 'react';
import { connect } from 'react-redux';
import Loader from "react-loader-spinner";


import { fetchPhotos } from '../actions';

const Photos = props => {
    console.log(props);
    return (
        <div>
            <button onClick={props.fetchPhotos}>Get Photo</button>
            {/* {props.photos ? <img src={props.photos[0].photo.url_m} /> : <div></div>} */}
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
            {props.photos && !props.isLoading && <img src={props.photos.photos}/>}
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
