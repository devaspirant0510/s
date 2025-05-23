const path = require("path")

module.exports = {
	mode :"development",
	entry:{
		main :"./app.js",
	},
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"[name].js"

	},
	module:{
		rules:[{
			test:/\.css$/,
			use:["style-loader","css-loader"]
		}]
	}

}
