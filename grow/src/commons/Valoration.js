import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import axios from "axios";
import "../style/Valoration.css";

const Valoration = ({ valoration }) => {
  const user = useSelector((state) => state.user);
  const { id } = useParams();

  const [start1, setStart1] = useState(false);
  const [start2, setStart2] = useState(false);
  const [start3, setStart3] = useState(false);
  const [start4, setStart4] = useState(false);
  const [start5, setStart5] = useState(false);

  const startA = () => {
    setStart1(true);
    setStart2(false);
    setStart3(false);
    setStart4(false);
    setStart5(false);
  };
  const startB = () => {
    setStart1(true);
    setStart2(true);
    setStart3(false);
    setStart4(false);
    setStart5(false);
  };
  const startC = () => {
    setStart1(true);
    setStart2(true);
    setStart3(true);
    setStart4(false);
    setStart5(false);
  };
  const startD = () => {
    setStart1(true);
    setStart2(true);
    setStart3(true);
    setStart4(true);
    setStart5(false);
  };
  const startE = () => {
    setStart1(true);
    setStart2(true);
    setStart3(true);
    setStart4(true);
    setStart5(true);
  };

  useEffect(() => {
    axios
      .get(`/api/productValoration/getAll/${id}`)

      .then((res) => {
        console.log("respuesta de valoracion---->", res);

        if (res.data.length > 0) {
            let valoracion = 0;
            res.data.map(item=> valoracion += item.valoration) ;
            const prom = valoracion/res.data.length ;
            console.log("soy tu prom",valoracion) ;
            valoration(prom.toFixed(1));
        } 
      });
  }, []);
  const click = (valoration) => {
    axios
      .post(`/api/productValoration/add/${id}`, {
        valoration,
        userId: user.id,
      })
      .then(() =>{
        return axios
          .get(`/api/productValoration/getAll/${id}`)

          .then((res) => {
            if (res.data){
                let valoracion = 0;
                res.data.map(item=> valoracion += item.valoration) ;
                const prom = valoracion/res.data.length ;
                console.log("soy tu prom",valoracion) ;
               return  valoration(prom.toFixed(1));
            } 
          })
        })
      .catch((err) => console.log(err));
  };

  return (
    <div className="starts">
      <button
        className={start1 ? "start1" : "start11"}
        onMouseOver={() => startA()}
        onClick={() => click(1)}
      >
        <ion-icon name="star-sharp"></ion-icon>
      </button>
      <button
        className={start2 ? "start2" : "start22"}
        onMouseOver={() => startB()}
        onClick={() => click(2)}
      >
        <ion-icon name="star-sharp"></ion-icon>
      </button>
      <button
        className={start3 ? "start3" : "start33"}
        onMouseOver={() => startC()}
        onClick={() => click(3)}
      >
        <ion-icon name="star-sharp"></ion-icon>
      </button>
      <button
        className={start4 ? "start4" : "start44"}
        onMouseOver={() => startD()}
        onClick={() => click(4)}
      >
        <ion-icon name="star-sharp"></ion-icon>
      </button>
      <button
        className={start5 ? "start5" : "start55"}
        onMouseOver={() => startE()}
        onClick={() => click(5)}
      >
        <ion-icon name="star-sharp"></ion-icon>
      </button>
    </div>
  );
};
export default Valoration;
