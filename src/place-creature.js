 /**
 * place-creature.js
 * @version: v1.0.0
 * @author: Dennis Hernández
 * @webSite: http://djhvscf.github.io/Blog
 *
 * Created by Dennis Hernández on 18/Dic/2014.
 *
 * Copyright (c) 2014 Dennis Hernández http://djhvscf.github.io/Blog
 *	
 * The MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */
 
;( function( window ) {
	
	'use strict';

	var defaultURL = 'http://placecreature.com',
		defaultSeparator = '/',
		paramSeparator = '?q=',
		allowElements = [ 'div', 'img' ],
		minTimeRefresh = 4000,
		targetElement,
		pic,
		picID = 'animalPic' + Math.random()

	/**
	 * Extends the properties between two objects
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
	 * Validates if the element passed by parameter is valid 
	 * @param {DOM Element} el
	 * @return {Boolean} True if the DOM element is correct, otherwise, false
	 */
	function is( el ) {
		if ( !el ) {
			error( 'There is no an element with that id' );
		} else {
			return inArray( el.nodeName.toLowerCase(), allowElements );
		}
	}
	
	/**
	 * Searches the object in the array passed by parameter
	 * @param {Object} obj 
	 * @param {Array} array
	 * @return {Boolean} True if the object exists in the array, otherwise, false
	 */
	function inArray( obj, array ) {
		return array.indexOf( obj ) === -1 ? false : true;
	}
		
	/**
	 * Raises an error
	 * @param {String} message 
	 */
	function error( message ) {
		throw new Error( message === '' ? 'An error has been raised' : message );
	}
	
	/**
	 * Get the image from placeCreature and create an Image object
	 * @param {Integer} width
	 * @param {Integer} height
	 * @return {Image}  An image object
	 */
	function getImage( width, height) {
		try {
			var animalPic = document.createElement( 'img' );
			animalPic.src = defaultURL + defaultSeparator + width + defaultSeparator + height + paramSeparator + Math.random();
			animalPic.id = picID;
			animalPic.setAttribute( 'class', 'img-circle' ); //Using bootstrap 3.3.1, only in development environment
			return animalPic;
		} catch ( ex ) {
			error( ex );
		}
	}
	
	/**
	 * Set the image to target element
	 * @param {DOM Element} targetElement
	 * @param {Iamge} pic
	 */
	function setImage( targetElement, width, height ) {
		pic = getImage( width, height );
		switch ( targetElement.nodeName.toLowerCase() ) {
			case 'div':
				var picToDelete = document.getElementById( picID );
				if ( picToDelete ) {
					targetElement.removeChild( picToDelete );
				}
				targetElement.appendChild( pic );
			break;
			case 'img':
				targetElement.src = pic.src;
			break;
		}
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
		height: 500,
		refresh: false,
		refreshTime: 4000
	}
	
	/**
	 * Initializes the plugin
	 */
	placeCreature.prototype._init = function() {
		targetElement = document.getElementById(this.options.target);
		if ( is( targetElement ) ) {
			setImage( targetElement, this.options.width, this.options.height );
			if ( this.options.refresh ) {
				if ( this.options.refreshTime < minTimeRefresh ) {
					this.options.refreshTime = minTimeRefresh;
				}
				setInterval( 
					function() {
						setImage( targetElement, window.placeCreature.options.width, window.placeCreature.options.height ) 
					}, this.options.refreshTime );
			}
		} else {
			error( 'Target elements is not a div or an image' );
		}
	}

	/**
	 * Adds the plugin to namespace
	 */
	window.placeCreature = placeCreature;

} )( window );