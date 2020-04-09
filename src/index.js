import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactList from "./Components/ContactList/ContactList";
import uuid from 'react-uuid'
import ContactAdd from './Components/ContactAdd/ContactAdd';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Page404 from "./Components/Page404/Page404";
import EditContact from "./Components/EditContact/EditContact";

class App extends Component {


    constructor() {
        super();
    }


    state = {
        List: [],
        currentContact: null
        // {
        //     id: uuid(),
        //     name: "Andr",
        //     address: "soborna 17",
        //     phone: "22717332",
        //     email: "androso@gmail.com",
        //     gender: "men",
        //     avatar: 31,
        //     isFavourite: false
        // },
        // {
        //     id: uuid(),
        //     name: "Roma",
        //     address: "soborna 12",
        //     phone: "17171712",
        //     email: "roma.pro@gmail.com",
        //     gender: "men",
        //     avatar: 33,
        //     isFavourite: true
        // },
        // {
        //     id: uuid(),
        //     name: "Oksana",
        //     address: "soborna 11",
        //     phone: "000009",
        //     email: "oks.pro@gmail.com",
        //     gender: "women",
        //     avatar: 30,
        //     isFavourite: false
        // }

    };


    URL = "https://contactlist-d15a2.firebaseio.com/list.json";


    refreshContactList() {
        fetch(this.URL,
            {
                method: "GET"
            }).then(data => {
                return data.json();
            }).then(data => {
                this.setState({
                    List: data
                })
            }).catch(error => {
                console.log("Error- ", error)
            })
    }

    async saveChanges(myList) {
        await fetch(this.URL,
            {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(myList)
            }).then(data => {
                console.log(data);
            }).catch(error => {
                console.log("Error- ", error);
            })
        this.refreshContactList();
    }

    componentDidMount() {

        this.refreshContactList();

    }




    setFavourite = id => {
        const index = this.state.List.findIndex(t => t.id === id);
        let tempList = this.state.List.slice();
        tempList[index].isFavourite = !tempList[index].isFavourite;

        // this.setState(state => {
        //     return {
        //         isFavourite: !this.tempList
        //     }
        // })
        this.saveChanges(tempList);
    }


    deleteContact = (id) => {
        const tempList = this.state.List.slice();
        const index = this.state.List.findIndex(item => item.id === id);
        tempList.splice(index, 1);
        this.saveChanges(tempList);
        // this.setState({
        //     List: tempList
        // })


    }

    Search = (text) => {
        const text2= document.getElementById("inputSeatch");
        // const tempList = this.state.List.slice();
        const listSearch = this.state.List.name.includes(text2);
        this.setState({
            List: listSearch
        })
    }

    editContact = (id) => {

        const index = this.state.List.findIndex(item => item.id === id);
        const currentContact = this.state.List[index];

        this.setState({
            currentContact: currentContact
        })
    }

    saveEditedContact = (name, email, phone, address, avatar, gender, isFavourite, id) => {

        const editedCon = {
            id: id,
            name: name,
            email: email,
            phone: phone,
            address: address,
            avatar: avatar,
            gender: gender,
            isFavourite: isFavourite
        };


        const tempList = this.state.List.slice();
        for (var i = 0; i < tempList.length; i++) {

            if (tempList[i].id === id) {
                tempList[i] = editedCon;
            }
        }
        this.saveChanges(tempList);

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
        let tempList = [];
        if (this.state.List != null) {
            // this.setState(state => {
            tempList = this.state.List.slice();
        }
        tempList.push(newContact);
        this.saveChanges(tempList);

        // return {
        //     List: tempList
        // }
        // })
    }

    favouriteContact = () => {
if(this.state.List!=null){

        const tempList = this.state.List.slice();
        for (var i = 0; i < tempList.length; i++) {
            if (tempList[i].isFavourite == false) {


                tempList.splice(i, 1);
            }
        }

    
        this.setState(state => {

            return {
                List: tempList
            }
        })

    }

    }

    render() {
        return (
            <Fragment>
                <Router>
                    <header className="hat headermazafaka">
                        {/* <nav class="navbar navbar-default">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <Link class="navbar-brand" to="/">Contact book</Link>
                                </div>
                               
                                <ul class="nav navbar-nav liMenu">
                                    <li><Link to="/">List contacts</Link></li>
                                    <li><Link to="/addContact">Add contact</Link></li>
                                    <li><Link to="/favourite">Favourite</Link></li>
                                    <li>
                                        <div className="form-group divSearch">

                                            <input className="form-control inputS" type="text" placeholder="Search"></input>
                                            <span> <i onClick={this.Search} className="fa fa-search fa-2x search"></i></span>


                                        </div>
                                    </li>
                                </ul>


                            </div>
                        </nav> */}

                        <nav class="navbar navbar-inverse">
                            <div class="container-fluid">
                                <div class="navbar-header">
                                    <a class="navbar-brand" href="/">WebSiteName</a>
                                </div>
                                <ul class="nav navbar-nav ulNav">
                                    <li><Link to="/">List contacts</Link></li>
                                    <li><Link to="/addContact">Add contact</Link></li>
                                    <li onClick={this.favouriteContact}><a >Favourite</a></li>

                                    {/* <li><Link to="/favourite">Favourite</Link></li> */}
                                </ul>
                                <ul className="nav navbar-nav navbar-right">

                                    <input className="form-control inputS" type="text" placeholder="Search" id="inputSearch"></input>
                                    <span> <i onClick={this.Search} className="fa fa-search fa-2x search"></i></span>
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
                                    editContact={this.editContact}

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
                                path="/editContact"
                                exact
                                render={() => <EditContact
                                    currentContact={this.state.currentContact}
                                    saveEditedContact={this.saveEditedContact}
                                ></EditContact>
                                }
                            ></Route>


                            <Route
                                path="/favourite"
                                exact
                                render={() => <ContactList

                                    Data={this.state.List}
                                    setFavourite={this.setFavourite}
                                    deleteContact={this.deleteContact}
                                    editContact={this.editContact}


                                ></ContactList>
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