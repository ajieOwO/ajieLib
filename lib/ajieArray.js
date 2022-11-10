function isValid(arg){
	arg.forEach((ele) => {
		if(typeof ele != 'object'){
			return false;
		}
	});
	return true;
}


export default class AjieArray extends Array{
	constructor(...arg){
		if(isValid(arg)){
			super(...arg);
		}
		else{
			throw new Error('AjieArray数组的元素必须是对象');
		}
	}

	static fromArray(arg){
		return new AjieArray(...arg);
	}


	push(...arg){
		if(isValid(arg)){
			super.push(...arg);
		}
		else{
			throw new Error('AjieArray数组的元素必须是对象');
		}
	}

	getElesByKey(key, value){
		let result = new AjieArray();
		this.forEach((ele) => {
			if(ele[key] === value){
				result.push(ele);
			}
		});
		return result;
	}

	getFirstEleByKey(key, value){
		for(let ele of this){
			if(ele[key] === value){
				return ele;
			}
		}
	}
}