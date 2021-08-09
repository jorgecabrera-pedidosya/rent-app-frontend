import React, {Component} from "react";
import Item from "./Item";

class ItemList extends Component {

    showAllItems = () => {
        const itemList = this.props.items;
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {itemList.map(item => (
                        <Item
                            key={item.id}
                            item={item}
                        />
                    ))}
                </div>
            </React.Fragment>
        )

    }

    render() {
        return (
            <React.Fragment>
                {this.showAllItems()}
            </React.Fragment>);
    }
}

export default ItemList;