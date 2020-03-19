import React, { Fragment, Component } from 'react';
import './ContactAdd.css';

class ContactAdd extends Component {
    state = {
        name: null,
        email: null,
        phone: null,
        address: null,
        avatar: null,
        gender: null,
        isFavourite: false
    }

    getName = (event) => {

        console.log(event.target.value);
        this.setState({

            name: event.target.value

        });
    }
        getAddress = (event) => {

            console.log(event.target.value);
            this.setState({

                address: event.target.value

            });
        }
            getPhone = (event) => {

                console.log(event.target.value);
                this.setState({

                    phone: event.target.value

                });
            }
                getEmail = (event) => {

                    console.log(event.target.value);
                    this.setState({

                        email: event.target.value

                    });
                }
                    getAvatar = (event) => {

                        console.log(event.target.value);
                        this.setState({

                            avatar: event.target.value

                        });
                    }
                    getMale = (event) => {

                       
                        this.setState({

                            gender: "men"

                        });

                    }
                    getFemale = (event) => {

                       
                        this.setState({

                            gender: "women"

                        });

                    }
                    getIsFavourite = (event) => {

                       
                        this.setState({

                            isFavourite: !this.state.isFavourite

                        });

                    }


                    sendData = (event) =>{
                        event.preventDefault();
                        const {name,email,phone,address,avatar,gender,isFavourite} = this.state;
                        this.props.addContact(name,email,phone,address,avatar,gender,isFavourite);
                    }

                    render(){

                        return (
                            <Fragment>
                                <form className="allPoles" onSubmit={this.sendData}>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Name contact</label>
                                        <input type="text" onChange={this.getName} class="form-control poleInput" placeholder="Enter name"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Address contact</label>
                                        <input type="text" onChange={this.getAddress} class="form-control poleInput" placeholder="Enter address"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Phone contact</label>
                                        <input type="text" onChange={this.getPhone} class="form-control poleInput" placeholder="Enter phone"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email contact</label>
                                        <input type="email" onChange={this.getEmail} class="form-control poleInput" placeholder="Enter email"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Select number avatar</label>
                                        <input type="number" onChange={this.getAvatar} min="1" max="99" class="form-control poleInput" placeholder="Select number avatar"></input>
                                    </div>

                                  
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Men</label>
                                        <input type="radio" name="radioGender" onChange={this.getMale} class="form-control poleInput" placeholder="Enter gender"></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Women</label>
                                        <input type="radio" name="radioGender" onChange={this.getFemale} class="form-control poleInput" placeholder="Enter gender"></input>
                                    </div>
                                   

                                   
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </Fragment>
                        )
                    }
                }

                export default ContactAdd;