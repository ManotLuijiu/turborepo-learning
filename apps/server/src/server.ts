import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import { Configuration, OpenAIApi } from 'openai';


dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.get('/', async (req, res) => {
  res.status(200).send({
    message: 'Hello from MBOne',
  });
});

app.post('/', async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 4000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
      stop: ['"""'],
    });

    res.status(200).send({
      bot: response.data.choices[0].text,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error', error);
    res.status(500).send({ error });
  }
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`MBOne Server listening at ${port}`);
});

/* 
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const response = await openai.createCompletion({
  model: "code-davinci-002",
  prompt: "\"\"\"\nUtil exposes the following:\nutil.openai() -> authenticates & returns the openai module, which has the following functions:\nopenai.Completion.create(\n    prompt=\"<my prompt>\", # The prompt to start completing from\n    max_tokens=123, # The max number of tokens to generate\n    temperature=1.0 # A measure of randomness\n    echo=True, # Whether to return the prompt in addition to the generated completion\n)\n\"\"\"\nimport util\n\"\"\"\nCreate an OpenAI completion starting from the prompt \"Once upon an AI\", no more than 5 tokens. Does not include the prompt.\n\"\"\"\n",
  temperature: 0,
  max_tokens: 64,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  stop: ["\"\"\""],
});

*/