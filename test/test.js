var transform = require( '../' );
var fs = require( 'fs' );
var path = require( 'path' );

var inputFile = path.join( __dirname, "sampleStyle.css" );

fs.createReadStream( inputFile ).pipe( transform( inputFile, {} ) ).pipe( process.stdout );