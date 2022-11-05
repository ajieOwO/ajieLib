import './lib/drawSector';
import './lib/ajieDate';

export as namespace ajieLib;


/**
 * 绘制一个扇形统计图
 * @param ctx CanvasRenderingContext2D对象
 * @param data 待显示的数据
 * @param color 各种颜色
 * @param options 扇形统计图选项
 * @param options.x 扇形统计图中心的x轴坐标，默认为canvas宽度的一半
 * @param options.y 扇形统计图中心的y轴坐标，默认为canvas高度的一半
 * @param options.r 扇形统计图的半径，默认为canvas宽度的0.45倍
 * 
 */
declare function drawSector(
	ctx: CanvasRenderingContext2D,
	data: {
		title: string,
		arr: [
			{
				name: string,
				value: number
			}
		]
	},
	color?: [
		string
	],
	options?: {
		x: number,
		y: number,
		r: number
	}
): void;


declare namespace ajieXHR{

	/**
	 * 发起一个get请求
	 * @param src 请求地址
	 * @param data 请求携带的数据
	 * @param type 期待的数据响应类型
	 */
	 export function get(src: string, data: array, type?: string): promise

	 /**
		* 发起一个post请求
		* @param src 请求地址
		* @param data 请求携带的数据
		* @param type 期待的数据响应类型
		*/
	 export function post(src: string, data: array, type?: string): promise
}