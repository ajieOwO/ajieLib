import { drawSector } from "../../index.js";

const data = {
	title: '扇形统计图',
	arr: [
		{
			name: '数据一',
			value: 123.4
		},
		{
			name: '数据二',
			value: 12.4
		},
		{
			name: '数据三',
			value: 15.4
		},
		{
			name: '数据四',
			value: 5
		},
		{
			name: '数据五',
			value: 23
		},
		{
			name: '数据六',
			value: 44
		}
	]
}

const color = [
	'#ffa502',
	'#ff6348',
	'#2ed573',
	'#1e90ff',
	'#eccc68',
	'#ff6b81',
	'#5352ed'
]
window.onload = () => {

	let canvas = document.getElementsByTagName('canvas')[0];
	let ctx = canvas.getContext('2d');
	
	drawSector(ctx, data, color);

	drawSector(ctx, {...data, ...{title: '测试'}}, color);

}