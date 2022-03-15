import { JSONResponse, UserLogin } from '../utils/interfaces';
import {app} from './index';
import { UserControllerInstance } from './set_up';

//Users
console.log(app)
app.post('/user', (req, res) => {

    UserControllerInstance.Post(req.body).then(
        (value) => {
            res.json(value)
        }
    ).catch(()=>{
        var response: JSONResponse<undefined> = {data: undefined,response: {code:500}}
        res.json(response)
    })
})

app.post('/user/login', (req, res) => {
    
})