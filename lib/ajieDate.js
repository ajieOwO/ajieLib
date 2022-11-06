
Date.prototype.toAjieString = function(){
	return [
		this.toAjieDate(),
		' ',
		this.toLocaleTimeString()
	].join('');
}

Date.prototype.toAjieStringWithWeek = function(){
	return [
		this.toAjieDate(),
		' ',
		this.toAjieWeek(),
		' ',
		this.toLocaleTimeString()
	].join('');
}

Date.prototype.toAjieWeek = function(){
	const t = ['日', '一', '二', '三', '四', '五', '六'];
	return `周${t[this.getDay()]}`;
}

Date.prototype.toAjieDate = function(){
	return [
		this.getFullYear(),
		'年',
		`0${this.getMonth()+1}`.slice(-2),
		'月',
		`0${this.getDate()}`.slice(-2),
		'日'
	].join('');
}

Date.prototype.toAjieLogDate = function(){
	return [
		this.getFullYear(),
		'-',
		`0${this.getMonth()+1}`.slice(-2),
		'-',
		`0${this.getDate()}`.slice(-2)
	].join('');
}

Date.prototype.startOfThisMonth = function(){
	let year = this.getFullYear();
	let month = this.getMonth();
	
	return new Date(year, month, 1, 0, 0, 0, 0);
}

Date.prototype.endOfThisMonth = function(){
	let t = new Date(this.getTime())
	let year = t.getFullYear();
	let month = t.getMonth();
	let startOfNextMonth = new Date(year, month + 1, 1, 0, 0, 0, 0)
	
	return new Date(startOfNextMonth.getTime() - 1);
}

class AjieDate extends Date{
	constructor(arg){
		switch(typeof arg){
			case 'number':
				super(arg * 1000);
				break;
			case 'undefined':
				super();
				break;
			default:
				super(arg);
		}
	}

	getTime(){
		return Math.round(super.getTime() / 1000);
	}
}

export default AjieDate;
