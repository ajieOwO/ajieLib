import { ajieDate } from "../index.js";


let t = new Date();

console.log(`Date.toAjieString(): ${t.toAjieString()}`);
console.log(`Date.toAjieWeek(): ${t.toAjieWeek()}`);
console.log(`Date.toAjieDate(): ${t.toAjieDate()}`);
console.log(`Date.toAjieLogDate(): ${t.toAjieLogDate()}`);
console.log(`Date.startOfThisMonth(): ${t.startOfThisMonth().toAjieString()}`);
console.log(`Date.endOfThisMonth(): ${t.endOfThisMonth().toAjieString()}`);