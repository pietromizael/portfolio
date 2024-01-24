import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactForm = () => {
  const navigate = useNavigate();

  const [contact, setContact] = useState({ name: "", email: "", message: "" });
  const [nameIsExpanded, setNameIsExpanded] = useState(false);
  const [emailIsExpanded, setEmailIsExpanded] = useState(false);

  const handleNameChange = (e) => {
    setContact({ ...contact, name: e.target.value });
    setNameIsExpanded(true);
  };

  const handleEmailChange = (e) => {
    setContact({ ...contact, email: e.target.value });
    setEmailIsExpanded(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://sa-east-1.aws.data.mongodb-api.com/app/data-sfuej/endpoint/data/v1/action/findOne", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        setContact({ name: "", email: "", message: "" });
      } else {
        alert("Erro ao enviar mensagem!");
        throw new Error("Falha ao enviar mensagem!");
      }
    } catch (error) {
      alert("Erro ao enviar mensagem!");
    }
  };

  const handleButton = (e) => {
    e.preventDefault()
    navigate("/home");
  }

  return (
    <div className="text-white w-full h-screen flex justify-center items-center px-48 pt-8 max-md:px-0 max-md:pt-0">
      <div className="flex flex-col bg-gradient-to-half from-slate-800 to-transparent gap-20 px-20 py-10 rounded-xl opacity-0 hover:backdrop-brightness-200 transition-all duration-300 animate-followDownContainer max-md:bg-none max-md:hover:backdrop-brightness-100">
        <div>
          <h1 className="text-6xl text-center mb-4">Contato</h1>
          <p className="text-3xl text-slate-300 text-center ">
            Entre em contato comigo!
          </p>
        </div>
        <div className="">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className=" flex flex-col gap-1">
              <label className="text-2xl">Nome:</label>
              <input
                type="text"
                value={contact.name}
                className={`bg-transparent placeholder:text-slate-300 py-2 placeholder:opacity-30 outline-none text-xl border-b-2 ${
                  nameIsExpanded && contact.name !== "" && "w-full"
                } border-slate-600 w-1/2 focus:w-full transition-all duration-300`}
                placeholder="Digite seu nome"
                onChange={handleNameChange}
                required
              />
            </div>
            <div className=" flex flex-col gap-1">
              <label className="text-2xl">E-mail:</label>
              <input
                type="email"
                value={contact.email}
                className={`bg-transparent placeholder:text-slate-300 py-2 placeholder:opacity-30 outline-none text-xl border-b-2 border-slate-600 w-1/2 ${
                  emailIsExpanded && contact.email !== "" && "w-full"
                } focus:w-full transition-all duration-300`}
                placeholder="Digite seu e-mail"
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className=" flex flex-col gap-1">
              <label className="text-2xl">Mensagem:</label>
              <textarea
                value={contact.message}
                className="bg-transparent placeholder:text-slate-300 py-2 placeholder:opacity-30 outline-none text-xl border-b-2 border-slate-600"
                placeholder="Digite sua mensagem"
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
                required
              ></textarea>
            </div>
            <div className="flex justify-between mt-10">
              <button type="submit" className="py-3 px-8 bg-slate-400 w-28 rounded-xl opacity-60 hover:opacity-100 transition-all duration-300">
                Enviar
              </button>
              <button className="py-3 px-8 bg-slate-800 w-28 rounded-xl opacity-60 hover:opacity-100 transition-all duration-300" onClick={handleButton}>Voltar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
