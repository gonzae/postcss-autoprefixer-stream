var through = require( 'through' );
var path = require( 'path' );
var autoprefixer = require( 'autoprefixer' );
var postcss = require( 'postcss' );

module.exports = function( file, processOpts, autoprefixerOpts ) {

	var data = "";
	var processOpts = processOpts || {};
	var autoprefixerOpts = autoprefixerOpts || {};

	if( file !== undefined && path.extname( file ) !== ".css" ) {
		return through();
	} else {
		return through( write, end );
	}

	function write( buffer ) {
		data += buffer;
	}

	function end() {

		var _this = this;

		postcss( [ autoprefixer( autoprefixerOpts ) ] )
		.process( data, processOpts )
		.then( function( result ) {

			result.warnings().forEach( function( warn ) {
				console.warn( warn.toString() );
			});

			_this.queue( result.css );
			_this.queue( null );
		} )
		.catch( function( error ) {
			// on error...
			_this.emit( 'error', new Error( error ) );
			_this.queue( null );
		} );
	}
};