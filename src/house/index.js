import "./house.css";
import emailIcon from "./Email.png";
import Inquiry from "./inquiry";
import { useState } from "react";
import PropTypes from 'prop-types'

const House = ({ house }) => {

    const [showInquiry, setShowInquiry] = useState(false);

    const InquiryClick = () => {
        setShowInquiry(!showInquiry);
    }
    return (
        <div>
            <div className="row mt2">
                <h5 className="col-md-12">{house.country}</h5>
            </div>
            <div className="row mt2">
                <h3 className="col-md-12">{house.address}</h3>
            </div>
            <div className="row mt2">
                <div className="col-md-7">
                    <img src={`/images/${house.photo}.jpeg`} alt="House"></img>
                </div>
                <div className="col-md-5">
                    <p className="price">${house.price}</p>
                    <p>{house.description}</p>
                    <img src={emailIcon} height="50" alt="Inquiry" onClick={InquiryClick} cursor="pointer" />
                    { showInquiry && <Inquiry house={house} /> }
                </div>
            </div>
        </div>
    )
}

House.prototype = {
    house: PropTypes.object.isRequired
}

export default House;