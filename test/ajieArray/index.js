import { AjieArray } from "../../index.js";

let rawData = [
	{
		"id": 1,
		"type": 0,
		"assetAccount": 1,
		"time": 1636615380,
		"value": 12.5,
		"notes": ""
	},
	{
		"id": 2,
		"type": 0,
		"assetAccount": 1,
		"time": 1636615440,
		"value": 8.1,
		"notes": ""
	},
	{
		"id": 3,
		"type": 0,
		"assetAccount": 1,
		"time": 1636615440,
		"value": 115,
		"notes": ""
	}
];

let arr = new AjieArray();

window.AjieArray = AjieArray;

window.onload = () => {
	let text = '';

	let data = AjieArray.fromArray(rawData);
	let arr = [
		`<pre>getElesByKey('id', 1) : ${JSON.stringify(data.getElesByKey('id', 1), null, 2)}</pre>`,
		`<pre>getFirstEleByKey('id', 1) : ${JSON.stringify(data.getFirstEleByKey('id', 1), null, 2)}</pre>`
	]

	arr.forEach(ele => text += `<p>${ele}</p>`);
	
	document.body.innerHTML = text;


}
