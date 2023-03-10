const moment = require('moment');
const colors = require('colors/safe');
module.exports = class {
	static info(...msg) {
		console.log(colors.green('[' + getTime() + ']'), colors.green('[INFO]'), ...msg);
	}
	static debug(...msg) {
		console.log(colors.blue('[' + getTime() + ']'), colors.blue('[DEBUG]'), ...msg);
	}
	static error(...msg) {
		console.log(colors.red('[' + getTime() + ']'), colors.red('[ERROR]'), ...msg);
	}
	static warning(...msg) {
		console.log(colors.yellow('[' + getTime() + ']'), colors.yellow('[WARNING]'), ...msg);
	}
}
function getTime() {
    return moment().utcOffset(8).format('YYYY-MM-DD HH:mm:ss');
}