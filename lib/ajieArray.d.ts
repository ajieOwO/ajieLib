interface Array{
	/**
	 * 根据键的值查找数组中的对象
	 * @param key 键
	 * @param value 值
	 */
	getElesByKey(key = string, value = any): array;

	/**
	 * 根据键的值查找数组中符合要求的第一个对象
	 * @param key 键
	 * @param value 值
	 */
	getElesByKey(key = string, value = any): object;
}