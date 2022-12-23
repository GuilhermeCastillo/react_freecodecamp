import React from "react";
import "../hojas-de-estilo/Depoimento.css";

function Depoimento(props) {
  return (
    <div className="conteudo-depoimento">
      <img
        className="imagem-depoimento"
        src={require(`../imagens/testimonio-${props.imagem}.png`)}
        alt="Foto CR7"
      />

      <div className="conteudo-texto-depoimento">
        <p className="nome-depoimento">
          <strong>{props.nome} </strong> em {props.pais}
        </p>
        <p className="cargo-depoimento">
          <strong>{props.cargo}</strong> em {props.empresa}
        </p>
        <p className="texto-depoimento">{props.depoimento}</p>
      </div>
    </div>
  );
}

export default Depoimento;
