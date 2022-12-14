
export default function drawSector(ctx, data, color, options = {}){
	const {
		x = ctx.canvas.width / 2,
		y = ctx.canvas.height / 2,
		r = ctx.canvas.width / 2
	} = options;

	let sum = 0;
	let start = 0;
	let end = 0;

	ctx.clearRect(x - r, y - r, 2 * r, 2 * r);
	// 清空需要绘制的区域

	for(let ele of data.arr){
		sum += ele.value;
	}
	// 计算总和

	for(let [index, ele] of data.arr.entries()){
		let percent = ele.value / sum;	// 计算百分比

		start = end;
		end += 2 * Math.PI * percent;
		// 计算当前扇区的角度起止值
		drawSingleSector(start, end, color[index % color.length]);
	}

	for(let [index, ele] of data.arr.entries()){
		let percent = ele.value / sum;	// 计算半分比
		let text = `${ele.name}(${(100 * percent).toFixed(2)}%)`;
		// 将显示在饼图中每个扇区的文本

		start = end;
		end += 2 * Math.PI * percent;
		// 计算当前扇区的角度起止值
		drawSingleText(text, start, end, color[index % color.length]);
	}

	if(data.title){
		ctx.font = '35px sans-serif';
		ctx.fillStyle = '#000000';
		ctx.textAlign = 'center';
		ctx.fillText(data.title, x, 2 * y - 20);
	}
	// 在下方绘制标题（如果有）

	/**
	 * 绘制单个扇形
	 * @param {Number} start 扇形的起始角度
	 * @param {Number} end 扇形的终止角度
	 * @param {String} color 扇区的颜色
	 */
	function drawSingleSector(start, end, color){
		ctx.beginPath();	// 开始路径绘制
		ctx.arc(x, y, 0.8 * r, start, end);	// 绘制起始直线与圆弧
		ctx.lineTo(x, y);	// 绘制终止直线
		ctx.fillStyle = color;	// 设置颜色
		ctx.fill();	// 填充区域
	}

	/**
	 * 绘制单个扇形的文本和指示线
	 * @param {String} text 待显示的数据
	 * @param {Number} start 扇形的起始角度
	 * @param {Number} end 扇形的终止角度
	 * @param {String} color 扇区的颜色
	 */
	function drawSingleText(text, start, end, color){
		ctx.beginPath();
		let xWord = x + 0.9 * r * Math.cos((start + end) / 2)
		let yWord = y + 0.9 * r * Math.sin((start + end) / 2)
		// 计算文字位置

		ctx.font = '25px sans-serif';
		ctx.moveTo(x, y);
		ctx.lineTo(xWord, yWord);
		ctx.fillStyle = '#000000';
		if(xWord > 500){
			ctx.textAlign = 'right';
			xWord += 50;
		}
		else{
			ctx.textAlign = 'left';
			xWord -= 50;
		}
		// 饼图左侧的文本左对齐，右侧的文本右对齐

		ctx.fillText(text, xWord, yWord - 8);
		ctx.lineTo(xWord, yWord);
		ctx.strokeStyle = color;
		ctx.stroke();
	}
	
}