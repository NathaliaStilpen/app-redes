import React, { useState, useContext } from "react";
import "./styles.css";

import { AuthContext } from "../../contexts/auth";
import perfilImg from '../../assets/perfil.jpg'




const PerfilPage = () => {


    return(
<div className="container">
      <div className="container-perfil">
        <div className="wrap-perfil">
          
            <div className="perfil">
              <div className="name-box">
                <img src={perfilImg} alt="Unifei Study Groups" />
             
            </div>
            </div>
            <div className="info">
            <h3>NOME</h3>
            <h4>Email:</h4>
            <h4>Curso:</h4>
            <h4>Matricula:</h4>
            </div>

            <div className="groups-list">
              <h3> Grupos Cadastrados </h3>
              <li>
                GRUPOS
              </li>



            </div>
        </div>
      </div>
    </div>





    );


};

export default PerfilPage;