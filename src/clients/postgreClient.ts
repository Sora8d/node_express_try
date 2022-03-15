import { Client, ClientConfig } from 'pg';
import { Status } from '../utils/interfaces';


class ClientObj {
    client: Client;

    constructor(config:ClientConfig) {
        this.client = new Client(config);
        this.client.connect();
    }

    async get<T>(query:string, values?: string[]):Promise<T[]> {
        try{
        const res = await this.client.query<T>(query, values);
        return res.rows
        }
        catch (err) {
            var status: Status = {code: 500}
            console.log(err)
            return Promise.reject<T[]>(status)
        }
    }

    async post(query:string, values?: string[]) {
        const res = await this.client.query(query, values);
    }

    async end() {
        await this.client.end()
    }
}

var client: ClientObj = new ClientObj({host:"127.0.0.1", port: 5434,user:"root", password:"root", database: "postgres"})

export {client};