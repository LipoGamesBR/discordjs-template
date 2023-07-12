import {ExtendedClient} from "./structs/ExtendedClient"

const client = new ExtendedClient();

client.start();

export { client }

client.on("ready", () => {
    console.log(`${client.user?.username} está online`);
})