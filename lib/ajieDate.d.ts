interface Date{

	/** 获取当前时间，以xxxx年xx月xx日 xx:xx:xx格式 */
	toAjieString(): string

	/** 获取当前时间，以xxxx年xx月xx日 周x xx:xx:xx格式 */
	toAjieStringWithWeek(): string

	/** 获取当前周，以周x格式 */
	toAjieWeek(): string

	/** 获取当前年月日，以xxxx年xx月xx日格式 */
	toAjieDate(): string

	/** 获取当前年月日，以xxxx-xx-xx格式 */
	toAjieLogDate(): string

	/** 获取本月第一天00:00:00.000 */
	startOfThisMonth(): Date

	/** 获取本月最后一天23:59:59.999 */
	endOfThisMonth(): Date
}