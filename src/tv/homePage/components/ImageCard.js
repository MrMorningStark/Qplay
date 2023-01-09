import { useNavigate } from "react-router-dom";
import './homePage.css'
import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';

const ImageCard = (props) => {
    const {onFocus, asset} = props; 
    const { ref, focused } = useFocusable({onFocus, onEnterPress:()=>{
      navigate('/liveTv',{state:{asset:asset}})
    },});


 

    const AssetWrapper = {

  "display": "flex",
  "flexdirection": "column",
  "height":"180px"
    }
    
    const navigate=useNavigate();
    return <div ref={ref} className={'col-3'} style={AssetWrapper}>
        <img  onClick={()=>{navigate('/liveTv',{state:{asset:asset}})}} className={focused ?  'card-img img-focused' : 'card-img' } src={asset.PotraitImageUrl} alt="Card image cap" />
    </div>
   
}

export default ImageCard;