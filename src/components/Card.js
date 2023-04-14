import { memo, useMemo } from "react";

const Card = (props) => {
    const { 
        SrcImage, 
        Link, 
        Text, 
        Title 
    } = useMemo(() => props.Details, [props]);

    return (
        <>
            <div className="card d-flex justify-content-center align-items-center flex-lg-row flex-md-column flex-sm-column w-75 m-auto">
                <img className="car-img-top" height="192" width="192" src={SrcImage} alt="" />
                <div className="card-body">
                    <h2 className="card-title text-center">
                        <a href={Link} target="_blank" rel="noreferrer">{Title}</a>
                    </h2>
                    <h3 className="card-text text-center">{Text}</h3>
                </div>
            </div>
            <br />
        </>
    );
}

export default memo(Card);