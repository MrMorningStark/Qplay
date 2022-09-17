const CMSURL = {
    BASEURL: "http://142.93.214.96:9090/cms/"
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
        var FINALURL = CMSURL.BASEURL + '/getLayout';
        var Finalinit = { ...GetHeader() };

        const response = await fetch(FINALURL, Finalinit);

        const responseData = await response.json();

        return responseData;
    }
    catch (error) {
        alert(error)
        console.log("error", error);
    }

}