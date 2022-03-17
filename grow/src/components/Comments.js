import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import useInput from "../hooks/useInput"
import "../style/Comments.css"


const Comments = () => {
    const { id } = useParams();
    const [comments, setComments] = useState([])
    const comment = useInput("")
    const user = useSelector(state => state.user);


    const handleSubmit = (e) => {
        e.preventDefault();
        setComments([
            {
                userId: 1,
                userName: "james",
                comment: "hola como estan"
            },
            {
                userId: 2,
                userName: "jonatan",
                comment: "muy bueno"
            },
            {
                userId: 3,
                userName: "nacho",
                comment: "atrrrrrrrrrrrrrrr"
            }
        ])
    }
    return (
        <div className="">
            <div className="titleComment">Tu comentario nos ayuda a mejorar</div>
            <form onSubmit={handleSubmit} className="formComments">
                <input className="inputComment" {...comment} />
                {
                    user.id ? <button className="buttonComment" type="submit">Comentar</button> :
                        <>
                            <button class="buttonComment" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Comentar
                            </button>
                            <div class="collapse" id="collapseExample">
                                <div class="card-body">
                                    Necesitas iniciar sesión pra poder comentar
                                </div>
                            </div>
                        </>
                }
            </form>
            <div>
                {
                    comments.map(({ userId, userName, comment }) => (
                        <div key={userId} className="comment">
                            <h className="userComment">{userName}</h>
                            <p>{comment}</p>
                        </div>
                    ))
                }
            </div>

        </div>
    )
}
export default Comments;