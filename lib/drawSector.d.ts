

/**
 * 绘制一个扇形图
 * @param {CanvasRenderingContext2D} ctx Canvas2D渲染上下文
 * @param {Object} data 扇形图数据
 * @param {String} data.title 扇形图标题
 * @param {Object} data.arr 待生成扇形图的数据数组
 * @param {String} data.name 数据标题
 * @param {Number} data.value 数据的值
 * @param {String[]} [color] 颜色列表
 * @param {Object} [options] 生成扇形的选项
 * @param {Number} options.x 扇形图中心x坐标，默认为画布中心
 * @param {Number} options.y 扇形图中心y坐标，默认为画布中心
 * @param {Number} options.r 扇形图半径，默认为画布宽度的80%
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
	color?: string,
	options?: {
		x: number,
		y: number,
		r: number
	}
): void