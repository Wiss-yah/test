import React from 'react'
import { Link } from 'react-router-dom';


export default function userCard(props) {
    return (
        <Link  className="profil" to={`/post-list/${props.user.id}`}>
            <img className= "photo" alt="" src="https://storage-dating.euranka.com/uploads/sites/6/2018/12/photo-profil-rencontre-2019.jpg"></img>
            <h1 className="userName">{props.user.name}</h1>
            <h2 className="useruserName">{props.user.username}</h2>
            <h3 className="userEmail">{props.user.email}</h3>
            <h4 className="userAdress">{props.user.address.street}</h4>

        </Link>
    )
}
