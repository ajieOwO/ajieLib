import { ajieXHR } from "../../index.js";

const ipv6 = [
	'https://6.ipw.cn'
]

const ipv4 = [
	'https://4.ipw.cn'
]

window.onload = async () => {
	ipv4.forEach(async (path) => {
		let p = document.createElement('p');
		let ip = await ajieXHR.get(path);
		p.innerHTML = `IPv4地址：${ip}（${path}）`;
		document.body.appendChild(p);
	});
	ipv6.forEach(async (path) => {
		let p = document.createElement('p');
		let ip = await ajieXHR.get(path);
		p.innerHTML = `IPv6地址：${ip}（${path}）`;
		document.body.appendChild(p);
	});
}