const app = require('./app');

const server = app.listen(3000, () => {
    console.log(`Express running on port ${server.address().port}`);
});