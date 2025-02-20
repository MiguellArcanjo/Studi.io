import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyB39B8OKDTY_5oI74z0bypKY7s8ZwSYj7s");
const modal = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
    systemInstruction: "Você pode apenas responder voltadas para o mundo acadêmico, perguntas que fogem do meio estudantil você ira falar que não pode responder.",
})

export const generateContent = async (prompt) => {
    try {
        const result = await modal.generateContent(prompt);
        return result.response.text();
    } catch (error) {
        console.error("Erro ao chamar a API:", error);
        throw new Error("Erro ao processar sua solicitação");
    }
}