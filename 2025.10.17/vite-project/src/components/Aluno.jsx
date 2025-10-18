import React from "react";
import "../App.css";

function Aluno({foto, nome, idade, cor, nota}){
    return(
        <div calssName="aluno">
            <img src={foto} alt={nome} className="foto" />
            <h3>{nome}</h3>
            <p>{idade} anos</p>
            <p>cor favorita: {cor}</p>
        </div>
    );
}

export default Aluno;