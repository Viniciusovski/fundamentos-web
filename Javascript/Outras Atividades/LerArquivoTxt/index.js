//https://consolelog.com.br/como-ler-arquivo-txt-em-node-js-e-express/
import express, { json, urlencoded } from 'express';
import { readFile } from 'fs';
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

app.get('/arquivos', (req, res) => {
    console.log('1');
    const caminhoArquivo = './arquivo1.txt';

    console.log('2');
    readFile(caminhoArquivo, (err, data) => {
        console.log('4');
        if(err){
            res.status(500).send(err);
            return;
        }
        res
            .set({ 'Content-Type': 'text/plain' })
            .send(data)
    });
    console.log('3');    
});

app.listen(3000);