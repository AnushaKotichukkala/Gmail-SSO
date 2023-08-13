const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use(cors());
app.use(express.json());

app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://accounts.google.com',
    changeOrigin: true
  })
);
app.post('/api/login', (req, res) => {
  res.redirect('http://localhost:4200/userDetails/')
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});