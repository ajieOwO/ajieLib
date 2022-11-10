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
	 function get(src: string, data: array, type?: string): promise

	 /**
		* 发起一个post请求
		* @param src 请求地址
		* @param data 请求携带的数据
		* @param type 期待的数据响应类型
		*/
	 function post(src: string, data: array | object , type?: string): promise
}

/** 新增一堆方法的Date */
declare class AjieDate{

	/** 获取当前时间，以xxxx年xx月xx日 xx:xx:xx格式 */
	toAjieString(): string;

	/** 获取当前时间，以xxxx年xx月xx日 周x xx:xx:xx格式 */
	toAjieStringWithWeek(): string;

	/** 获取当前周，以周x格式 */
	toAjieWeek(): string;

	/** 获取当前年月日，以xxxx年xx月xx日格式 */
	toAjieDate(): string;

	/** 获取当前年月日，以xxxx-xx-xx格式 */
	toAjieLogDate(): string;

	/** 获取本月第一天00:00:00.000 */
	startOfThisMonth(): Date;

	/** 获取本月最后一天23:59:59.999 */
	endOfThisMonth(): Date;
}

/** 提供数字中对象值查找功能 */
declare class AjieArray{
	/** 仅接受数组元素为对象的数组 */
	constructor(arg: array);

	/** 将普通数组转换为AjieArray */
	static fromArray(arr: array): AjieArray;

	/** 获取属性key的值为value的所有元素
	 * @param key 属性名
	 * @param value 属性值
	*/
	getElesByKey(key: string, value: string | number | boolean): AjieArray;

	/** 获取属性key的值为value的第一个元素
	 * @param key 属性名
	 * @param value 属性值
	*/
	getFirstEleByKey(key: string, value: string | number | boolean): object;
}