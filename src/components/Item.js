import React from "react";
import ClassicButton from "./RentButton";

const Item = (props) => {
    const item = props.item;
    return (<div className="col-4 col-sm-6 col-md-4 col-lg-4 mb-4">
            <div className="card">
                <h4 className="row justify-content-center">{item.title}</h4>
                <p className="card-text">{item.description}</p>
                <p className="card-text">${item.price}</p>
                <p className="card-text">Renting days: {item.rent_duration}</p>
                <ClassicButton
                    itemId={item.id}
                />
            </div>
        </div>

    )
}
export default Item;