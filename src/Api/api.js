const CMSURL = {
    BASEURL: "http://13.126.165.150:9001"
}

const GetHeader = (method = 'GET') => {
    return {
        method: method,
        accept: 'application/json',
        headers: { 'Content-Type': 'application/json' },
    }
}

export async function getLayout() {

    try {
        var FINALURL = CMSURL.BASEURL + '/layout_lg.json';
        var Finalinit = { ...GetHeader() };
        console.log(FINALURL)
        const response = await fetch(FINALURL, Finalinit);
        console.log(response);
        const responseData = await response.json();

        return responseData;
    }
    catch (error) {
        alert(error)
        console.log("error", error);
    }

}