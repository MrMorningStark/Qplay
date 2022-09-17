import { useLocation } from "react-router-dom"
import Player from "./player/Player";

export default ()=>{
    const location =useLocation();
    const {asset}=location.state;
    return <>
    <Player src={asset.VideoPlaybackUrl}/>
    </>
}