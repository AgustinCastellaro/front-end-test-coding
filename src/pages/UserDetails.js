import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../hook/httpUsers';
import { AiFillGithub } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/userDetails/userDetails.scss';

function UserDetails() {
    const { name } = useParams();
    const [user, setUser] = useState([]);
    
    useEffect(() => {
        get("user", name).then(data => {
            setUser(data)
        });
    }, [])

    return (
        <div className="userDetails">
                <div className="user">
                    <img src={user.avatar_url} alt="" />
                    <p>{user.login}</p>
                    <div className="github d-flex align-items-center justify-content-center">
                        <AiFillGithub className="icon" />
                        <a href={user.html_url} target="_blank">
                            Github
                        </a>
                    </div>
                </div>
        </div>
    )
}

export default UserDetails
