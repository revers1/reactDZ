import React, { Fragment } from "react";
import "./ContactList.css";
import ContactItem from "../ContactItem/ContactItem";

const ContactList = ({ Data,setFavourite, deleteContact }) => {
    const singleContact = Data.map(item => {

        return (
            <ContactItem
                key={item.id}
                name={item.name}
                phone={item.phone}
                email={item.email}
                avatar={item.avatar}
                gender={item.gender}
                isFavourite={item.isFavourite}
                setFavourite={()=>setFavourite(item.id)}
                deleteC={()=>deleteContact(item.id)}
            ></ContactItem>
        );

    });

    return (
        <Fragment>
            
            <ul className="list">
                {singleContact}
            </ul>
        </Fragment>
    )
}

export default ContactList;