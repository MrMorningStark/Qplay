/**
 * This component will add Playback functionality for all media across the appusing Video.js
 *
 * @module views/components/Player
 * @memberof -Common
 */
import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import {useNavigate} from 'react-router-dom'

/**
  * Represents a Player component
  *
  * @method
  * @param {object} props - React properties passed from composition
  * @returns Player
  */
export const Player = function( props ){
  const navigate=useNavigate()
  let { src } = props;
  const videoRef = React.useRef( null );
  const playerRef = React.useRef( null );

  const videoJsOptions = {
    autoplay: true,
    muted: false,
    controls: true,
    fluid: true
  };

  const onKeyPress = useCallback( ( { keyCode } ) => {
    if( keyCode === 10009|| keyCode === 8 ){
      // // history.goBack()
      const player = playerRef.current;
      if( player ){
        // player.dispose();
        playerRef.current = null;
      }
      // props.setPlayer( false );
      
      navigate('/')
    }
  } );

  useEffect( () => {
    window.addEventListener( 'keydown', onKeyPress );
    return () => window.removeEventListener( 'keydown', onKeyPress );
  }, [] );

  useEffect( () => {
    const player = playerRef.current;
    return () => {
      if( player ){
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef] );

  const onReady = ( player ) => {
    console.log( 'onReady', player ); //eslint-disable-line
  };

  const launchPlayer = () => {
    if( !playerRef.current ){
      const videoElement = videoRef.current;
      if( videoElement ){
        const player = ( playerRef.current = videojs( videoElement, videoJsOptions, () => {
          onReady && onReady( player );
        } ) )
      }
    }
  }

  useEffect( () => {
      videoJsOptions.sources = [{ src: src }];
      launchPlayer();
  }, [] );

  return (
    <div
      className='Player'
      data-vjs-player
    >
      <video // eslint-disable-line
        id='player'
        ref={ videoRef }
        className='video-js vjs-big-play-centered'
      />
    </div>
  )
}

/**
  * Property type definitions
  *
  * @type {object}
  * @property {string} src - video url
  * @property {string} deepLinkUrl - deeplink url shared by partner for fetching playable url
  * @property {bool} bProtected - states whether url is protected or not
  */
export const propTypes = {
  src: PropTypes.string,
  rajat:PropTypes.string
};

Player.propTypes = propTypes;

export default Player;