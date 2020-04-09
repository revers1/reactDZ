import React, { Fragment, Component } from "react";
import "./EditContact.css";
import {Redirect} from "react-router-dom"
import { timeout } from "q";

class EditContact extends Component {

    state = {
        id: this.props.currentContact.id,
        name: this.props.currentContact.name,
        email: this.props.currentContact.email,
        phone: this.props.currentContact.phone,
        address: this.props.currentContact.address,
        avatar: this.props.currentContact.avatar,
        gender: this.props.currentContact.gender,
        isFavourite: this.props.currentContact.isFavourite,
        isSended: this.props.currentContact.isSended
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
                        const {name,email,phone,address,avatar,gender,isFavourite, id} = this.state;
                        this.props.saveEditedContact(name,email,phone,address,avatar,gender,isFavourite, id);
                        this.setState({
                            isSended: true
                        })
                    }


    render() {

        
        if(this.state.isSended===true){
            return (<Redirect to="/"/>);
        }

    

        let starStyle = "fa fa-star-o fa-2x star";
        if (this.state.isFavourite === true) {
            starStyle = "fa fa-star fa-2x star";
        }

        return (
            <Fragment>
                                <form className="allPoles" onSubmit={this.sendData}>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Name contact</label>
                                        <input type="text" placeholder={this.state.name} onChange={this.getName} class="form-control poleInput" ></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Address contact</label>
                                        <input type="text" placeholder={this.state.address} onChange={this.getAddress} class="form-control poleInput" ></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Phone contact</label>
                                        <input type="text" placeholder={this.state.phone} onChange={this.getPhone} class="form-control poleInput" ></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Email contact</label>
                                        <input type="email" placeholder={this.state.email} onChange={this.getEmail} class="form-control poleInput" ></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Select number avatar</label>
                                        <input type="number" placeholder={this.state.avatar} onChange={this.getAvatar} min="1" max="99" class="form-control poleInput" ></input>
                                    </div>

                                  
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Men</label>
                                        <input type="radio" name="radioGender" onChange={this.getMale} class="form-control poleInput" ></input>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleInputEmail1">Women</label>
                                        <input type="radio" name="radioGender" onChange={this.getFemale} class="form-control poleInput" ></input>
                                    </div>
                                   
                                    <i onClick={this.getIsFavourite} className={starStyle}></i>

                                   
                                    <button type="submit" class="btn btn-primary">Save</button>
                                </form>
                            </Fragment>
        )
    }

}
export default EditContact;
