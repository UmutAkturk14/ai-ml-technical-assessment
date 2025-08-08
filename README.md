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

On the home page, at the right bottom side, you're going to be able to see a chat button. On a message, the bot will recommend a product.
