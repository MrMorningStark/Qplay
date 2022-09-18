import React, { useRef, useCallback } from 'react';
import ImageCard from "./ImageCard";
import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';

const RailComponent=(props)=>{
    const {rail, onFocus} =props;
    const { ref, focusKey } = useFocusable({onFocus});
    const MediaCarouselRef = useRef( null );
    

    const onCardFocus = useCallback( ( { x, ...rest } ) => {
         console.log("calling card fous");
          MediaCarouselRef.current?.scrollTo( {
            left:rest.left - 2 * rest.node.offsetWidth - 20,
            behavior: 'smooth'
          } )
        
      }, [MediaCarouselRef] );

    return (<FocusContext.Provider value={focusKey}> 
    <div ref={ref} > 
  
   <div className="ContentRowScrollingWrapper" ref={ MediaCarouselRef }>
   
    <div className='ContentRowScrollingContent'>
       {
    
         rail.OttAsset.map((asset,index) => {
            return (<FocusContext.Provider value={focusKey}>  
            <ImageCard key={index} asset={asset} onFocus={onCardFocus}/>   
             </FocusContext.Provider>)
        })}
       
    </div>
    </div>
    </div>
    </FocusContext.Provider>)
}

export default RailComponent;