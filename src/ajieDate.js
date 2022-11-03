/**
 * 获取中文年月日时分秒
 * @returns {String} xxxx年xx月xx日 xx:xx:xx格式的时间
 */
Date.prototype.toAjieString = function(){//为时间对象添加我自定义的方法
	return [
		this.toAjieDate(),
		' ',
		this.toAjieWeek()
	].join('');
}
/**
 * 获取中文年月日周时分秒
 * @returns {String} xxxx年xx月xx日 周x xx:xx:xx格式的时间
 */
Date.prototype.toAjieStringWithWeek = function(){
	return [
		this.toAjieDate(),
		' ',
		this.toAjieWeek(),
		' ',
		this.toLocaleTimeString()
	].join('');
}
/**
 * 获取中文当前周
 * @returns {String} 周x
 */
Date.prototype.toAjieWeek = function(e){
	const t = ['日', '一', '二', '三', '四', '五', '六'];
	return `周${t[this.getDay()]}`;
}
/**
 * 获取中文年月日
 * @returns {String} xxxx年xx月xx日
 */
Date.prototype.toAjieDate = function(e){
	return [
		this.getFullYear(),
		'年',
		`0${this.getMonth()+1}`.slice(-2),
		'月',
		`0${this.getDate()}`.slice(-2),
		'日'
	].join('');
}
/**
 * 获取适合日志使用的短横线分割的日期
 * @returns {String} xxxx-xx-xx
 */
Date.prototype.toAjieLogDate = function(e){
	return [
		this.getFullYear(),
		'-',
		`0${this.getMonth()+1}`.slice(-2),
		'-',
		`0${this.getDate()}`.slice(-2)
	].join('');
}

/**
 * 获取本月第一天00:00:00.00
 * @returns {Date} 
 */
Date.prototype.startOfThisMonth = function(e){
	let t = new Date(this.getTime())
	let year = this.getFullYear();
	let month = this.getMonth();
	
	return new Date(year, month, 1, 0, 0, 0, 0);
}

/**
 * 获取本月最后一天23:59:59.999
 * @returns {Date} 
 */
Date.prototype.endOfThisMonth = function(e){
	let t = new Date(this.getTime())
	let year = t.getFullYear();
	let month = t.getMonth();
	let startOfNextMonth = new Date(year, month + 1, 1, 0, 0, 0, 0)
	
	return new Date(startOfNextMonth.getTime() - 1);
}

export default {
	// startOfThisMonth,
	// endOfThisMonth
};
