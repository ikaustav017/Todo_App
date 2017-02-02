var configValues = require('./config');

module.exports = {

	getDbConnectionString: function(){
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds131119.mlab.com:31119/nodetodosample';
		//return 'mongodb://' + configValues.uname + ':' + configValues.pwd + configValues.path;
	}}