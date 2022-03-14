import { Client, ClientConfig } from 'pg';


class ClientObj {
    client: Client;

    constructor(config:ClientConfig) {
        this.client = new Client(config);
        this.client.connect();
    }

    async get(query:string):Promise<any[]> {
        const res = await this.client.query(query);
        return res.rows
    }

    async post(query:string) {
        const res = await this.client.query(query);
    }

    async end() {
        await this.client.end()
    }
}

var client: ClientObj = new ClientObj({host:"127.0.0.1", port: 5433,user:"root", password:"root", database: "postgres"})

export {client};