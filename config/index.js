var configValues = require('./config');

module.export = {
	getDbConnectionString: function(){
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + configValues.path;
	}
}