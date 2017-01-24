postcss-autoprefixer-stream
===============

A postcss-autoprefixer stream wrapper around [postcss](https://github.com/postcss/postcss) with [autoprefixer](https://github.com/postcss/autoprefixer).

Takes a file argument and an optional opts argument that is passed through to postcss. Returns a [through stream](https://github.com/dominictarr/through) that has autoprefixer contents written in and outputs the compiled css.

Can be as a [parcelify](https://github.com/rotundasoftware/parcelify) or [cartero](https://github.com/rotundasoftware/cartero) transform.

#example
```javascript
var transform = require( '../' );
var fs = require( 'fs' );
var path = require( 'path' );

var inputFile = path.join( __dirname, "sampleStyle.css" );

var opts = {};

fs.createReadStream( inputFile ).pipe( transform( inputFile, opts ) ).pipe( process.stdout );
```

#usage

### transform( file [, processOpts] [, autoprefixerOpts ] )

`file` - the css file to transform

`processOpts` - optional options hash passed through to `postcss.process`

`autoprefixerOpts` - optional options hash passed through to `autoprefixer` constructor