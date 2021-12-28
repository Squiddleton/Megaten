/**
 *
 * @param {string} str - The string to remove the punctuation from
 * @returns {string} The input string without its punctuation
 */
module.exports.noPunc = str => {
	if (typeof str !== 'string') throw new TypeError('The noPunc function only accepts string inputs.');

	return str
		.toLowerCase()
		.replace(/&/g, 'and')
		.replace(/è/g, 'e')
		.replace(/é/g, 'e')
		.replace(/[^0-9a-z]/gi, '');
};