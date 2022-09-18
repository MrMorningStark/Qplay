import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
import { MainPage } from '../../MainPage';
const Page = () => {


    const {  ref, focusKey } = useFocusable();

    
    return <FocusContext.Provider value={focusKey}>
            <MainPage ref={ref} focusKeyParam="MENU1" />
        </FocusContext.Provider>
   

}
export default Page;