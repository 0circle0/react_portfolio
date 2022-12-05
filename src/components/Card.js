export default function Card(props) {
    let Details = props.Details
    return (
        <>
            <div className="card d-flex justify-content-center align-items-center flex-lg-row flex-md-column flex-sm-column w-75 m-auto">
                <img className="car-img-top" height="192" width="192" src={Details.SrcImage} alt=""/>
                <div className="card-body">
                    <h2 className="card-title text-center">
                        <a href={Details.Link}>{Details.Title}</a>
                    </h2>
                    <h3 className="card-text text-center">{Details.Text}</h3>
                </div>
            </div>
            <br />
        </>
    );
}