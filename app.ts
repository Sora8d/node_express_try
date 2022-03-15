import {app} from './src/server';
import './src/server/url_maps';
/*
const postgreRep = new PostgreFuncs

app.get('/', (req, res) => {
    Promise.resolve().then(postgreRep.Post).then(postgreRep.Get).then((arr)=>{
            res.statusCode= 200;
            res.json(arr)
            res.end();
            postgreRep.Stop()
    }).catch(()=>{
        res.statusCode= 500;
        res.json({status: "connection closed"}).end()
    })
});

export {app};
*/
var server = app.listen("3000", function() {
    console.log('listening at ', server.address())
})


