# Studi.io

Studi.io é uma aplicação interativa que permite aos usuários explorar diferentes tópicos de aprendizado, como Matemática, História, Ciências, Literatura e Tecnologia. A interface é simples e intuitiva, oferecendo prompts pré-definidos para iniciar conversas e um campo de entrada para interações personalizadas.

## Telas

![Pagina principal](https://github.com/user-attachments/assets/cc58d65e-b41d-43e3-b9bd-80fe67c88060)
![Pagina do prompt](https://github.com/user-attachments/assets/f73b0512-35a2-4594-a814-4c129ec66a7c)

## Funcionalidades

- `Seleção de Tópicos`: Escolha entre cinco tópicos principais: Matemática, História, Ciências, Literatura e Tecnologia.
Cada tópico inicia automaticamente uma conversa com um prompt pré-definido.

- `Interação Personalizada`: Após selecionar um tópico, o usuário pode enviar mensagens personalizadas através do campo de entrada.

- `Respostas Dinâmicas`: As respostas são geradas dinamicamente por meio de uma API e exibidas na tela.

- `Barra de Rolagem Automática`: Quando novas mensagens chegam, a barra de rolagem desce automaticamente para exibir o conteúdo mais recente.

- `Animação de Carregamento`: Enquanto a API processa as solicitações, uma animação com três pontos pretos pulando é exibida.

## Tecnologias Utilizada

- `Next.js`
- `API Do Gemini`

## Passos para Rodar Localmente

### Clonando o repositorio 

```
git clone https://github.com/seu-usuario/studi.io.git
cd studi.io
```

### Instalando as dependencias

```
npm install
# ou
yarn install
```
### Configurando a KEY da API Do gemini 

```
#Crie um .env e coloque assim:
NEXT_PUBLIC_API_KEY_GEMINI="SUA_KEY"
```

### Iniciando a aplicação

```
npm run dev
# ou
yarn dev

```

## Contato
Se tiver dúvidas ou sugestões, entre em contato
- Nome: Miguel Arcanjo
- Email: contato.miguelarcanjo2305@gmail.com
- Linkedin: Miguel Arcanjo Barreto Siqueira
