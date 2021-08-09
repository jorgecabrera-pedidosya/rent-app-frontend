import React, {Component} from 'react';
import ItemList from './components/ItemList';
import MainNav from "./components/MainNav";

class App extends Component {
    state = {
        items: []
    };

    async componentDidMount() {
        const response = await fetch('/v1/items');
        const body = await response.json();
        this.setState({items: body});
    }

    /*listAllItems = () => {
        const endpoint = '/v1/items';
        fetch(endpoint)
            .then(response => response.json())
            .then()
    }*/

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div className="app container">
                        <div className="jumbotron">
                            <p className="lead text-center"> Rent App</p>
                        </div>
                        <MainNav/>
                        <div className="row justify-content-center">
                            <ItemList
                                items={this.state.items}
                            />
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default App;
