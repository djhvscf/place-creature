 ;( function( window ) {
	
	'use strict';

	var defaultURL = 'http://placecreature.com/',
		xmlhttp

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
		width: 500,
		height: 500
	}
	
	/**
	 * Initializes the plugin
	 */
	placeCreature.prototype._init = function() {
		defaultURL = defaultURL + this.options.width + this.options.height;
		if (window.XMLHttpRequest)
  		{
  			// code for IE7+, Firefox, Chrome, Opera, Safari
	  		xmlhttp=new XMLHttpRequest();
	  	}
		else {
			// code for IE6, IE5
	  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  	}

	  	xmlhttp.onreadystatechange=function() {
	  		if (xmlhttp.readyState==4 && xmlhttp.status==200)
	    	{
	    		//To be implemented
	    	}
		}

		xmlhttp.open("GET",defaultURL,true);
		xmlhttp.send();
	}

	/**
	 * Adds the plugin to namespace
	 */
	window.placeCreature = placeCreature;

} )( window );