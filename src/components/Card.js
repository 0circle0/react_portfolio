import { memo, useMemo } from "react";

const Card = ({ details }) => {
    const {
        srcImage,
        link,
        text,
        title
    } = useMemo(() => details, [details]);

    return (
        <>
            <div className="card d-flex justify-content-center align-items-center flex-lg-row flex-md-column flex-sm-column w-75 m-auto">
                <img className="car-img-top" height="192" width="192" src={srcImage} alt="" />
                <div className="card-body">
                    <h2 className="card-title text-center">
                        <a href={link} target="_blank" rel="noreferrer">{title}</a>
                    </h2>
                    <h3 className="card-text text-center">{text}</h3>
                </div>
            </div>
            <br />
        </>
    );
}

export default memo(Card);