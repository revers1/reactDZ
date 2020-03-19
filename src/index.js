import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactList from "./Components/ContactList/ContactList";
import uuid from 'react-uuid'
import ContactAdd from './Components/ContactAdd/ContactAdd';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Page404 from "./Components/Page404/Page404";

class App extends Component {

    state = {
        List: [
            {
                id: uuid(),
                name: "Andr",
                phone: "22717332",
                email: "androso@gmail.com",
                gender: "men",
                avatar: 31,
                isFavourite: false
            },
            {
                id: uuid(),
                name: "Roma",
                phone: "17171712",
                email: "roma.pro@gmail.com",
                gender: "men",
                avatar: 33,
                isFavourite: true
            },
            {
                id: uuid(),
                name: "Oksana",
                phone: "000009",
                email: "oks.pro@gmail.com",
                gender: "women",
                avatar: 30,
                isFavourite: false
            }
        ]
    };

    setFavourite = id => {
        const index = this.state.List.findIndex(t => t.id === id);
        let tempList = this.state.List.slice();
        tempList[index].isFavourite = !tempList[index].isFavourite;

        this.setState(state => {
            return {
                isFavourite: !this.tempList
            }
        })
    }


    deleteContact = (id) => {
        const tempList = this.state.List.slice();
        const index = this.state.List.findIndex(item => item.id === id);
        tempList.splice(index, 1);
        this.setState({
            List: tempList
        })


    }



    addContact = (name, email, phone, address, avatar, gender, isFavourite) => {

        const newContact = {
            id: uuid(),
            name: name,
            address: address,
            email: email,
            phone: phone,
            avatar: avatar,
            gender: gender,
            isFavourite: isFavourite
        }

        this.setState(state => {
            let tempList = this.state.List.slice();
            tempList.push(newContact);
            return {
                List: tempList
            }
        })

    }

    render() {
        return (
            <Fragment>
                <Router>
                    <header className="hat headermazafaka">
                        <nav class="navbar navbar-default">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <Link class="navbar-brand" to="/">Contact book</Link>
                                </div>
                                <ul class="nav navbar-nav ">
                                    <li><Link to="/">List contacts</Link></li>
                                    <li><Link to="/addContact">Add contact</Link></li>
                                </ul>
                            </div>
                        </nav>
                    </header>
                    <main>

                        <Switch>

                            <Route
                                path="/"
                                exact
                                render={() => <ContactList
                                    Data={this.state.List}
                                    setFavourite={this.setFavourite}
                                    deleteContact={this.deleteContact}
                                ></ContactList>
                                }
                            ></Route>


                            <Route
                                path="/addContact"
                                exact
                                render={() => <ContactAdd
                                    addContact={this.addContact}
                                ></ContactAdd>
                                }
                            ></Route>


                            
                            <Route
                                path="*"
                                exact
                                render={() => <Page404></Page404>
                                }
                            ></Route>


                        </Switch>

                        {/* <ContactList 
                    Data={this.state.List} 
                    setFavourite={this.setFavourite}
                    deleteContact = {this.deleteContact}
                    ></ContactList>

                    <ContactAdd addContact={this.addContact}></ContactAdd> */}
                    </main>
                </Router>
            </Fragment>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));