import express from 'express';
import {Request, Response} from "express";
import "reflect-metadata";
import bodyParser from 'body-parser';
import {User} from "./entity/User";
import {createConnection} from "typeorm";


createConnection().then(connection => {
    const userRepository = connection.getRepository(User);
const app = express();
app.use(bodyParser.json);

/*app.get('/',(req,res)=> {
    res.send('Helloooo');
});
*/

app.get("/users", async function(req: Request, res: Response) {
    const users = await userRepository.find();
    res.json(users);
});

app.get("/users/:id", async function(req: Request, res: Response) {
    const users = await userRepository.find();
        res.json(users);
});

app.post("/users", async function(req: Request, res: Response) {
    const user = await userRepository.create(req.body);
        const results = await userRepository.save(user);
        return res.send(results);
});

app.put("/users/:id", async function(req: Request, res: Response) {
    const user = await userRepository.findOne(req.params.id);
    userRepository.merge(user, req.body);
    const results = await userRepository.save(user);
    return res.send(results);
});

app.delete("/users/:id", async function(req: Request, res: Response) {
    const results = await userRepository.delete(req.params.id);
        return res.send(results);
});

app.listen(5000, ()=> console.log('Server is running'));

});