const HeroBanner = (props) => {
    return <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-pause="hover" data-interval="3000">
        <ol className="carousel-indicators">
            {props.rail.OttAsset.map((asset, index) => {
                return <li data-target="#carouselExampleIndicators" data-slide-to={index} className="active" aria-label="Slide 1" />
            })}
        </ol>
        <div className="carousel-inner">
            {props.rail.OttAsset.map((asset, index) => {
                return <div className={index===0?"carousel-item active":"carousel-item"}>
                    <img src={asset.LandscapeImageUrl} className="d-block w-100 round-img" alt="First slide" />
                    <br />
                    <br />
                </div>
            })}
        </div>
    </div>
}

export default HeroBanner;