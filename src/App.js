import React from 'react';
import Header from "./Components/Header";
import Contacts from './Components/Contacts';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            page: 'Home',
            unreadMessages: ["a", "b"],
            loading: false,
            character: {},
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data,
                    loading: false
                })
            })
            .catch(e => console.log(e))
    }

    handleClick(id) {
        this.setState({ page: id });
        console.log(id);
    }

    render() {
        let text = this.state.loading ? "Loading" : this.state.character.name;

        return (
            <div>
                <Header handleClick={this.handleClick} />
                {
                    //Cats
                    this.state.page === 'Home' ?
                        <Contacts />
                        : null
                }
                {
                    this.state.page === 'Form' ? <div>Some other thing</div> : null
                }
                <div>
                    {
                        //conditional rendering - if there are unread messages show text else don't
                        this.state.unreadMessages.length > 0 &&
                        <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                    }
                </div>
                <div>
                    <p>{text}</p>
                </div>
            </div>
        )
    }
}

export default App;