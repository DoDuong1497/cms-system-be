const express = require('express');
const app = express();
const PORT = 3005;

app.get('/', (_, res) => {
  // code logic
  res.send('API running test 123');
});

app.listen(PORT, () => {
  console.log(`Server up and running localhost: ${PORT}`);
});
