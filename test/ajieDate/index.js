import { AjieDate } from "../../index.js";

let t = new AjieDate();

window.AjieDate = AjieDate;

window.onload = () => {
	let text = '';
	let arr = [
		`AjieDate.toAjieString(): ${t.toAjieString()}`,
		`AjieDate.toAjieWeek(): ${t.toAjieWeek()}`,
		`AjieDate.toAjieDate(): ${t.toAjieDate()}`,
		`AjieDate.toAjieLogDate(): ${t.toAjieLogDate()}`,
		`AjieDate.startOfThisMonth().toAjieString(): ${t.startOfThisMonth().toAjieString()}`,
		`AjieDate.endOfThisMonth().toAjieString(): ${t.endOfThisMonth().toAjieString()}`,
		`AjieDate.getAjieTime(): ${t.getAjieTime()}`,
		`AjieDate.getTime(): ${t.getTime()}`
	]

	window.AjieDate = AjieDate

	arr.forEach(ele => text += `<p>${ele}</p>`);
	
	document.body.innerHTML = text;
}
