 ;( function( window ) {
	
	'use strict';

	var defaultURL = 'http://placecreature.com',
		defaultSeparator = '/'

	/**
	 * Extends the properties between tow objects
	 * @param {Object} a 
	 * @param {Object} b
	 * @return {Object} extended
	 */
	function extend( a, b ) {
		for ( var key in b ) { 
			if( b.hasOwnProperty( key ) ) {
				a[ key ] = b[ key ];		
			}
		}
		return a;
	}
		
	/**
	 * Raises an error
	 * @param {String} message 
	 */
	function error( message ) {
		throw new Error( message === '' ? 'An error has been raised' : message );
	}
	
	/**
	 * placeCreature class
	 * @param {Object} options
	 */
	function placeCreature( options ) {
		this.options = extend( {}, this.options );
		extend( this.options, options );
		this._init();
	}

	/**
	 * Options
	 */
	placeCreature.prototype.options = {
		target: 'placeCreature',
		width: 500,
		height: 500
	}
	
	/**
	 * Initializes the plugin
	 */
	placeCreature.prototype._init = function() {
		defaultURL = defaultURL + defaultSeparator + this.options.width + defaultSeparator + this.options.height;
		var animalPic = document.createElement("IMG");
		animalPic.src = defaultURL;
		animalPic.setAttribute( 'class', 'img-circle' ); //Using bootstrap 3.3.1
		document.getElementById(this.options.target).appendChild(animalPic);
	}

	/**
	 * Adds the plugin to namespace
	 */
	window.placeCreature = placeCreature;

} )( window );