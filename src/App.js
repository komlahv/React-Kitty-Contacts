import React from 'react';
import ContactCard from "./ContactCard";
import Header from "./Components/Header";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            unreadMessages: ["a", "b"],
            loading: false,
            character: {},
        };
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

    render() {
        let text = this.state.loading ? "Loading" : this.state.character.name;

        return (
            <div>
                <Header />
                <div className="contacts">
                    <ContactCard
                        contact={{ name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow" }}
                    />

                    <ContactCard
                        contact={{ name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email: "fluff@me.com" }}
                    />

                    <ContactCard
                        contact={{ name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com" }}
                    />

                    <ContactCard
                        contact={{ name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com" }}
                    />

                </div>
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