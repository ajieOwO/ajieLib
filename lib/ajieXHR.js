
function get(src, data, type){
	if(data instanceof Array){	// 若传入数据
		for(let ele of data){
			src += `&${ele.name}=${ele.value}`;	// 追加数据
		}
	}
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {	// 监听状态改变事件
			if(xhr.readyState == 4){
				if(xhr.status == 200){	// 若状态码为200
					resolve(xhr.response);	// 返回数据
				}
				else{	// 若状态码不为200
					resolve(xhr.status);	// 返回状态码
				}
			}
		}
		if(type){
			xhr.responseType = type;	// 设置响应数据的类型
		}
		xhr.open('get', src);	// 打开链接
		xhr.send(null);
	});
}

function post(src, data, type){
	return new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {	// 监听状态改变事件
			if(xhr.readyState == 4){
				if(xhr.status == 200){	// 若状态码为200
					resolve(xhr.response);	// 返回数据
				}
				else{	// 若状态码不为200
					resolve(xhr.status)
				}
			}
		}
		if(type){
			xhr.responseType = type;	// 设置响应数据的类型
		}
		xhr.withCredentials = true;	// 对跨域请求携带凭证
		xhr.open('post', src);
		xhr.setRequestHeader('Content-Type', 'application/json');	// 设置请求头为json
		xhr.send(JSON.stringify(data));	// 发送数据	
	});
}

export default {
	get,
	post
}