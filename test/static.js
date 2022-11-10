import express from 'express';
import { createServer } from 'http';
import { exec } from 'child_process';
import { readdir } from 'fs/promises';
const server = express();//创建服务器

const port = 8081;

createServer(server).listen(port,() => {
	server.use(express.static('./'));//托管静态资源
	server.use('/*', async (req, res) => {
		try{
			let data = await readdir(`.${req.baseUrl}`);
			let result = '';
			data.forEach((ele) => {
				if(ele != 'static.js'){
					result += `<p><a href="./${ele}">${ele}</a></p>`;
				}
			});
			res.send(`<html><body>${result}</body></html>`)
		}
		catch{
			res.end();
		}
	});
	server.use('*', (req, res) => {
		res.send(null);
	})
});

exec(`start http://localhost:${port}/test/`);