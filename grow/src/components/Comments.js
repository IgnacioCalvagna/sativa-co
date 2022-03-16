import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import useInput from "../hooks/useInput"
import "../style/Comments.css"




const Comments = () => {
    const { id } = useParams();
    const [comments, setComments] = useState([])
    /*   useEffect(() => {
          axios
          .get(`api/comments/${id}`)
          .then(res=>setComments(res))
      })*/
    useEffect(() => {
        setComments([
            {
                userId: 1,
                userName: "Jonatan Ale",
                userComments: "Buen producto en cuestion de calidad/precio. Sigan asi"
            },
            {
                userId: 1,
                userName: "Nacho",
                userComments: "Esa cosa casi me mata!!!"
            },
            {
                userId: 1,
                userName: "James :)",
                userComments: "Estoy esperando su producto hace mas de un mes y todavía no ha llegado"
            }
        ])
    }, [])

    const newComment = useInput("")

    const handleSubmit = (e) => {
        /* e.preventDefault()
        axios
        .post(`/api/comments/${userId}`,{newComment : newCmment.value})
        .catch(err=>console.log("hubo un problema al enviar el comentario",err)) */
    }
    return (
        <div className="">
            <div className="titleComment">Tu comentario nos ayuda a mejorar</div>
            <form onSubmit={handleSubmit} className="formComments">
                <input className="inputComment" {...newComment} />
                <button className="buttonComment" type="submit">Comentar</button>
            </form>
            <div>
                {
                    comments.map(({ userId, userName, userComments }) => (
                        <div key={userId} className="comment">
                            <h className="userComment">{userName}</h>
                            <p>{userComments}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Comments;