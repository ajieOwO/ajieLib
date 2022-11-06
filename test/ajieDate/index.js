import { AjieDate } from "../../index.js";

let t1 = new Date();
let t2 = new AjieDate();

window.onload = () => {
	let text = '';
	let arr = [
		`Date.toAjieString(): ${t1.toAjieString()}`,
		`Date.toAjieWeek(): ${t1.toAjieWeek()}`,
		`Date.toAjieDate(): ${t1.toAjieDate()}`,
		`Date.toAjieLogDate(): ${t1.toAjieLogDate()}`,
		`Date.startOfThisMonth().toAjieString(): ${t1.startOfThisMonth().toAjieString()}`,
		`Date.endOfThisMonth().toAjieString(): ${t1.endOfThisMonth().toAjieString()}`,
		'&nbsp',
		`AjieDate.getTime(): ${t2.getTime()}`,
		`Date.getTime(): ${t1.getTime()}`,
		`AjieDate.toAjieString(): ${t2.toAjieString()}`,
	]

	arr.forEach(ele => text += `<p>${ele}</p>`);
	
	document.body.innerHTML = text;
}
