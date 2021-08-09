import React, {Component} from "react";

class RentButton extends Component {

    rent = async e => {
        const itemId = this.props.itemId;
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'X-Caller-Id': 2
                }
            }
            await fetch("/v1/item/" + itemId + "/order", config);
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <a onClick={this.rent} target="_blank" className="btn btn-primary btn-block"> Rent</a>
        );
    }
}

export default RentButton;