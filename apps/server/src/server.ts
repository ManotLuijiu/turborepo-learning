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

const port = 4000;

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
      max_tokens: 3000,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
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