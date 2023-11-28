import React, { useState, useEffect } from "react";
import MyInput from "./MyInput";
import useForm from "../hooks/useForm";
import Loader from "./Loader"
import Message from "./Message"
function MyForm() {
  const { load,succesfull,handleSubmit } = useForm();

  return (
    <>
      <h4>Envianos tus comentarios</h4>
      <form onSubmit={handleSubmit} noValidate>
        <MyInput
          label={"Name: "}
          id={"name"}
          name={"name"}
          pattern="^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$"
          type={"text"}
          placeholder={"Type your name"}
          required
        />
        <MyInput
          label={"Email: "}
          id={"email"}
          name={"email"}
          pattern={
            "^[a-z0-9]+(.[_a-z0-9]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$"
          }
          type={"email"}
          placeholder={"Type your email"}
          required
        />
        <MyInput
          label={"Subject: "}
          id={"subject"}
          name={"subject"}
          type={"text"}
          placeholder={"Why?"}
          required
        />
        <MyInput
          label={"Comments: "}
          id={"comments"}
          name={"comments"}
          pattern={"^.{1,255}$"}
          type={"textarea"}
          placeholder={"Tell us"}
          required
        />
        <button>Enviar</button>
      </form>
      {load && <Loader/>}
      {succesfull && <Message msg={succesfull.message} bgColor="#7FFF00"/>}
    </>
  );
}

export default MyForm;
