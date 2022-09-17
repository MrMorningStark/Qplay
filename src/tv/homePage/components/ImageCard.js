import { useNavigate } from "react-router-dom";
import './homePage.css'
// import { useFocusable } from '@noriginmedia/norigin-spatial-navigation';
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
const ImageCard = (props) => {
    const { ref, focusKey } = useFocusable();
    const navigate=useNavigate();
    return <FocusContext.Provider value={focusKey}><div  className={'col-3'}>
        <img ref={ref} onClick={()=>{navigate('/liveTv',{state:{asset:props.asset}})}} className='card-img' src={props.asset.PotraitImageUrl} alt="Card image cap" />
    </div>
    </FocusContext.Provider>
}

export default ImageCard;