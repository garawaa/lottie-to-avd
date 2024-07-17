#!/usr/bin/env node
var avd_converter = require('./src/index.js');
var fs = require('fs');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const path = require('path');
function changeFileExtension(filePath, newExtension) {
	const currentExtension = path.extname(filePath);
	const baseName = path.basename(filePath, currentExtension);
	return path.join(path.dirname(filePath), baseName + newExtension);
}
//Parsing args
const argv = yargs(hideBin(process.argv))
	.epilog('Lottie to AVD converter.')
	.example('lottie-to-avd -i sample.json -o sample.xml')
	.usage('Usage: lottie-to-avd -i <input> -o <output>')
	.version('0.0.1')
	.alias('v', 'version')
	.option('i', {
		alias: 'input',
		describe: 'Input file path(required)',
		type: 'string',
		demandOption: true,
	})
	.option('o', {
		alias: 'output',
		describe: 'Output file path(optional)',
		type: 'string',
		demandOption: false,
	})
	.help('h')
	.alias('h', 'help')
	.argv;
// Access the arguments
const inputFilePath = argv.input;
var outputFilePath = argv.output;
if (!outputFilePath) {
	outputFilePath = changeFileExtension(inputFilePath, '.xml');
}
//Converting...
fs.readFile(inputFilePath,  "utf8",  function(error, data){
	process.on('unhandledRejection', function(err, promise) {
	    console.error('Unhandled rejection (promise: ', promise, ', reason: ', err, ').');
	});
	var prom = avd_converter(JSON.parse(data))
	prom.then(function(xml){
		fs.writeFile(outputFilePath, xml, function(err) {
		    if(err) {
		        return console.log(err);
		    }

			console.log("Successfully converted!");
			console.log('Output file path:', path.resolve(outputFilePath));
			
		}); 
	}).catch(function (err) {
			console.log(err);
	 		console.log('Convertion failed!!!');
 	});
	
})