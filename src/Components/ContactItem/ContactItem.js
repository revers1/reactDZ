import React, { Fragment, Component } from "react";
import "./ContactItem.css";
import { Math } from "core-js";


class ContactItem extends Component {
    
    state = {
        name:this.props.name,
        phone:this.props.phone,
        email:this.props.email,
        gender: this.props.gender,
        avatar: this.props.avatar,
        isFavourite: this.props.isFavourite
       
    };
    
    randomPhotos(){
        const randomAvatar=Math.floor( Math.random() * Math.floor(99));
    this.setState(
        {
            avatar: randomAvatar
        }
    );     
    }

    
    // setFavourite(){    
    // this.setState(
    //     {
    //         isFavourite: !this.state.isFavourite
    //     }
    // );     
    // }
    

    
    render() {
        const {name,phone,email}=this.state;
        const URL = `https://api.randomuser.me/portraits/${this.state.gender}/${this.state.avatar}.jpg`
       
let starStyle="fa fa-star-o fa-2x star";
if(this.props.isFavourite===true){
    starStyle="fa fa-star fa-2x star";
}


        return (
            <Fragment>
                
                <li className="contact-item contacts">
                    <img src= {URL} alt="contact image"></img>
                    <h2>{this.state.email}</h2>
                    <p>{this.state.phone}</p>
                    <p>{this.state.email}</p>
                    <button className="btn btn-info" onClick={this.randomPhotos.bind(this)}>CHANGE PHOTO</button>
                   
                       <i onClick={this.props.setFavourite} className={starStyle}></i>

                       <i onClick={this.props.deleteC} className="fa fa-trash-o fa-2x trash"></i>
                   
                </li>
            </Fragment>
        )

    }
}

export default ContactItem;