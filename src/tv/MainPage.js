import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import { useEffect, useState, useCallback } from 'react';
import * as API from '../Api/api'
import { RAILTYPE } from '../constant';
import HeroBanner from './homePage/components/HeroBanner';
import Logo from './homePage/components/Logo';
import RailComponent from './homePage/components/RailComponent';
import TextComponent from './homePage/components/TextComponent';


export const  MainPage = (props)=>{  
    const {  ref, focusKey, hasFocusedChild, focusSelf } = useFocusable({
        focusable: true,
        saveLastFocusedChild: false,
        trackChildren: true,
        autoRestoreFocus: true,
        isFocusBoundary: false,
        focusKey: props.focusKeyParam,
        preferredChildFocusKey: null,
        onEnterPress: () => {},
        onEnterRelease: () => {},
        onArrowPress: () => true,
        onFocus: () => {},
        onBlur: () => {},
        extraProps: { foo: 'bar' }
    });

    

    useEffect(()=>{
        focusSelf();
    },[focusSelf]);

    const [rails, setRails] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    function getRail(rail, index) {

            
        switch (rail.OttRailTypeSID) {
            case RAILTYPE.Logo:
          
               return <Logo asset={rail.OttAsset[0]} />
            case RAILTYPE.TEXT:
              
                return <TextComponent label={rail.DisplayTitle} />
            case RAILTYPE.HeroBanner:
               
                return <HeroBanner rail={rail} />
            case RAILTYPE.Rail:
               
                return <RailComponent rail={rail} onFocus={onRowFocus} index={index} key={index}/>

            default:
                return <h1>Rail will be added soon!</h1>
        }
    }



    const loadData = async () => {
        const response = await API.getLayout();
        if (response.success) {
            const pages = response.data.pages;
            if (pages.length > 0) {
                setRails(() => pages[0].Rails.filter((rails)=> rails.PlatformSIDs.includes("2")))
            }
        }
    }

    const onRowFocus = useCallback( ( { y, ...rest } ) => {
        console.log("calling row focus" + y);
         ref.current?.scrollTo( {
           top:y,
           behavior: 'smooth'
         } )

         window.scrollTo({
            top: y,
         
           behavior: "smooth",
          });
       
     }, [ref] );


    return <FocusContext.Provider value={focusKey}>
        <div  className={hasFocusedChild ? 'ContentWrapper': 'ContentWrapper'}>

        <div className='ScrollingRows' ref={ref}> 
           
        {    rails.map((rail, index) => {
        return getRail(rail, index);
      })}



      </div>
           
        </div>
        </FocusContext.Provider>
     ;
}





export default MainPage;


