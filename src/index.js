const createApp = require('./app');
const app = createApp();

app.listen(3000, () => {
  console.log('Server on port 3000');
});
