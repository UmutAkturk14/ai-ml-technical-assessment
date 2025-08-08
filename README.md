## Run Locally

Clone the project

```bash
  git clone git@github.com:UmutAkturk14/ai-ml-technical-assessment.git
```

Go to the project directory

```bash
  cd ai-ml-technical-assessment
```

Install dependencies

```bash
  npm install

  or

  npm install -legacy-peer-deps
```

Add OpenAI key to .env file

```
REACT_APP_OPENAI_API_KEY=your-api-key
```

Start the server

```bash
  npm run dev
```

The server should now be running. You can access the application by opening a web browser and entering the following URL:

```bash
  http://localhost:3000
```

## Added features

### Basic filtering

A text box that runs a basic filtering on the products is implemented.

### Chatbot

I chose the option A, used OpenAI API to allow natural language search. On the home page, there's a chat bubble on the right bottom side of the page. On click, user has a chat. User can send a message and depending on that, would get a recommendation from the chatbot.

I tried to keep the project clean and as simple as possible, installed only OpenAI SDK.

As this is just a concept, it sets the procuts in the local storage, and pulling it, sends the catalogue with the request. In a real world production, the query would be way more sophisticated.
