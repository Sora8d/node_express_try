import { client } from "../clients/postgreClient";

class PostgreFuncs {
    async Post() {
        await client.post("INSERT into public.test default values;");
    }
    async Get() {
        return await client.get("SELECT * from public.test;");
    }
    async Stop(){
        await client.end();
    }
}

export {PostgreFuncs};