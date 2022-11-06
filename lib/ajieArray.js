Array.prototype.getElesByKey = function(key, value) {
	let result = [];
	this.forEach((ele) => {
		if(ele[key] == value){
			result.push(ele)
		}
	});
	
	return result;
}

Array.prototype.getFirstEleByKey = function(key, value) {
	for(let ele of this){
		if(ele[key] == value){
			return ele;
		}
	}
}

export default {
	
}