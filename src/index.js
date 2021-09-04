const createApp = require('./app');
const app = createApp();
const { config } = require('./config')

app.listen(config.port, (err) => {
  if (err) return console.error(`ERROR ${err}`);
  console.log(`Server on port ${config.port}`);
});
