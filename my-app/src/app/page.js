"use client";

import React, { useState, useRef, useEffect } from "react";
import { generateContent } from "@/api/api";
import LoadingDots from "@/components/LoadingDots/LoadingDots";
import "../styles/page.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [conversations, setConversations] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const predefinedPrompts = [
    { id: 1, title: "Matemática", prompt: "Vamos falar sobre Matemática." },
    { id: 2, title: "História", prompt: "Conte-me sobre um evento histórico importante" },
    { id: 3, title: "Ciências", prompt: "Explique uma descoberta científica recente" },
    { id: 4, title: "Literatura", prompt: "Analise uma obra literária famosa" },
    { id: 5, title: "Tecnologia", prompt: "Discuta uma tecnologia emergente" },
  ];

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [conversations]);

  const handlePredefinedPrompt = async (selectedPrompt) => {
    setIsLoading(true);
    try {
      const response = await generateContent(selectedPrompt);

      setConversations((prevConversations) => [
        ...prevConversations,
        { prompt: selectedPrompt, response },
      ]);

      setShowInput(true);
    } catch (error) {
      console.error(error);
      setConversations((prevConversations) => [
        ...prevConversations,
        { prompt: selectedPrompt, response: "Erro ao processar sua solicitação." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!prompt.trim()) return;

    setIsLoading(true);
    try {
      const response = await generateContent(prompt);

      setConversations((prevConversations) => [
        ...prevConversations,
        { prompt, response },
      ]);

      setPrompt("");
    } catch (error) {
      console.error(error);
      setConversations((prevConversations) => [
        ...prevConversations,
        { prompt, response: "Erro ao processar sua solicitação." },
      ]);
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="App">
      {!showInput && (
        <div className="prompt-boxes">
          <div className="title">
            <h2>Olá, Boa noite! O que gostaria de aprender hoje?</h2>
          </div>
          <div className="containerBox">
            {predefinedPrompts.map((item) => (
              <div
                key={item.id}
                className="prompt-box"
                onClick={() => handlePredefinedPrompt(item.prompt)}
              >
                {item.title}
              </div>
            ))}
          </div>
          {isLoading && <LoadingDots />}
        </div>
      )}

      {showInput && (
        <div className="container-form">

          <div className="conversations">
            {conversations.map((conv, index) => (
              <div key={index} className="conversation-item">
                <div>
                  <strong>Você:</strong> {conv.prompt}
                </div>
                <br />
                <div>
                  <strong>Studi.io:</strong> {conv.response}
                </div>
              </div>
            ))}
            {isLoading && <LoadingDots />}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Digite sua mensagem aqui"
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
