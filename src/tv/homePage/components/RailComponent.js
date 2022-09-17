import ImageCard from "./ImageCard";

const RailComponent=(props)=>{

    const {rail}=props;

    var activeItem;
    var item;
    var itemArray = []
    const chunkSize = 4;
    for (let i = 0; i < rail.OttAsset.length; i += chunkSize) {
        const OttAssetInChunk = rail.OttAsset.slice(i, i + chunkSize);
        if (i === 0) {
            activeItem = <div className="carousel-item active">
                <div className="container-fluid">
                    <div className="row">
                        {OttAssetInChunk.map((asset,index) => {
                            return <ImageCard key={index} asset={asset}/>
                        })}
                    </div>
                </div>
            </div>
        } else {
            item = <div className="carousel-item" >
                <div className="container-fluid">
                    <div className="row">
                        {OttAssetInChunk.map((asset,index) => {
                            return <ImageCard key={index} asset={asset}/>
                        })}
                    </div>
                </div>
            </div>            
            itemArray.push(item)
        }
    }

    return<> 
    <h3 className="font-weight-bold ml-4">{rail.title}</h3>
    <div id="carouselExampleIndicators1" className="carousel slide" data-ride="carousel" data-pause="hover" data-interval="3000">
        <div className="carousel-inner">
            {activeItem}
            {itemArray}
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators1" role="button" data-slide="prev">
            <i className="carousel-control-prev-icon wow"></i>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators1" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
    </>
}

export default RailComponent;