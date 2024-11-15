
const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Kahve' },
]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:5000`);
});
