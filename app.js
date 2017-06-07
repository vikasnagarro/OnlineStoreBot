const restify = require('restify');
const builder = require('botbuilder');
const port = process.env.port || process.env.PORT || 3198;
//creating restify server
const server = restify.createServer();
server.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

const connector = new builder.ChatConnector({
    appId : "6120df0b-eec8-4922-a4ee-6b294df7c0b6",
    appPassword :"vi2mabAFh4ODzFQDrwSZGbg"
});
server.post('/api/messages', connector.listen());

const bot = new builder.UniversalBot(connector, (session) => {
    session.send(`You send ${session.message.text}`);
})
