import { ajieDate } from "../../index.js";

let t = new Date();

window.onload = () => {
	let text = '';
	let arr = [

		`Date.toAjieString(): ${t.toAjieString()}`,
		`Date.toAjieWeek(): ${t.toAjieWeek()}`,
		`Date.toAjieDate(): ${t.toAjieDate()}`,
		`Date.toAjieLogDate(): ${t.toAjieLogDate()}`,
		`Date.startOfThisMonth().toAjieString(): ${t.startOfThisMonth().toAjieString()}`,
		`Date.endOfThisMonth().toAjieString(): ${t.endOfThisMonth().toAjieString()}`
	]

	arr.forEach(ele => text += `<p>${ele}</p>`);
	
	document.body.innerHTML = text;
}
