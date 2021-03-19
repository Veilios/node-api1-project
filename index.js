const server = require('./api/server');

const port = process.env.PORT;

// START YOUR SERVER HERE
server.listen(port, () => {
    console.log(`\n *** listening on port ${port} ***`);
});