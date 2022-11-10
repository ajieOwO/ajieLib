export default class AjieDate extends Date{
	constructor(...arg){
		if(arg.length > 1){
			super(...arg);
		}
		else{
			switch(typeof arg[0]){
				case 'number':
					super(arg[0] * 1000);
					break;
				case 'undefined':
					super();
					break;
				default:
					super(arg[0]);
			}
		}
	}

	getAjieTime(){
		return Math.round(super.getTime() / 1000);
	}

	toAjieDate(){
		return [
			this.getFullYear(),
			'年',
			`0${this.getMonth()+1}`.slice(-2),
			'月',
			`0${this.getDate()}`.slice(-2),
			'日'
		].join('');
	}

	toAjieString(){
		return [
			this.toAjieDate(),
			' ',
			this.toLocaleTimeString()
		].join('');
	}

	toAjieStringWithWeek(){
		return [
			this.toAjieDate(),
			' ',
			this.toAjieWeek(),
			' ',
			this.toLocaleTimeString()
		].join('');
	}

	toAjieWeek(){
		const t = ['日', '一', '二', '三', '四', '五', '六'];
		return `周${t[this.getDay()]}`;
	}

	toAjieLogDate(){
		return [
			this.getFullYear(),
			'-',
			`0${this.getMonth()+1}`.slice(-2),
			'-',
			`0${this.getDate()}`.slice(-2)
		].join('');
	}

	startOfThisMonth(){
		let year = this.getFullYear();
		let month = this.getMonth();
		
		return new AjieDate(year, month, 1, 0, 0, 0, 0);
	}

	endOfThisMonth(){
		let t = new AjieDate(this.getAjieTime())
		let year = t.getFullYear();
		let month = t.getMonth();
		let startOfNextMonth = new AjieDate(year, month + 1, 1, 0, 0, 0, 0)
		
		return new AjieDate(startOfNextMonth.getAjieTime() - 1);
	}
}
