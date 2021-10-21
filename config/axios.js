import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: 'token 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',
  },
});
