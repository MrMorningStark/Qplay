import RailComponent from "./RailComponent";
import TextComponent from "./TextComponent";
import { RAILTYPE } from '../../../constant'
import HeroBanner from "./HeroBanner";
import Logo from './Logo'
import { useState, useEffect } from "react";
import * as API from '../../../Api/api'

import { useFocusable, FocusContext } from '@noriginmedia/norigin-spatial-navigation';
const Page = () => {

    const { ref, focusKey } = useFocusable();

    const [rails, setRails] = useState([]);
    useEffect(() => {
        loadData();
    }, [])
    const loadData = async () => {
        const response = await API.getLayout();
        if (response.success) {
            const pages = response.data.pages;
            if (pages.length > 0) {
                setRails(() => pages[0].Rails)
            }
        }
    }

    function getRail(rail) {
        switch (rail.OttRailTypeSID) {
            case RAILTYPE.Logo:
                return <Logo asset={rail.OttAsset[0]} />
            case RAILTYPE.TEXT:
                return <TextComponent label={rail.DisplayTitle} />
            case RAILTYPE.HeroBanner:
                return <HeroBanner rail={rail} />
            case RAILTYPE.Rail:
                return <RailComponent rail={rail} />

            default:
                return <h1>Rail will be added soon!</h1>
        }
    }

    return rails.map(rail => {
        return <FocusContext.Provider value={focusKey}>
            <div ref={ref}>
                {getRail(rail)}
            </div>
        </FocusContext.Provider>
    })

}
export default Page;