 /**
 * place-creature.js
 * @version: v1.0.5
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
		picId = 'animalPic' + getRandomNumber(),
		targetElement,
		pic,
		interval,
		animals = ['Bald-eagle', 'Bear', 'Beaver', 'Beluga-whale', 
					'Bill-murray', 'Bird', 'Blue-jay', 'Bluejay', 'Bunny', 'Calf',
					'Cardinal', 'Cat', 'Cheetah', 'Chicken', 'Chimp', 'Chimpanzee',
					'Chipmunk', 'Coon', 'Cow', 'Deer', 'Dinosaur', 'Dog', 'Doggy',
					'Dolphin', 'Donkey', 'Eagle', 'Elephant', 'Fawn', 'Ferret',
					'Fish', 'Flying-squirrel', 'Fox', 'Frog', 'Giraffe', 'Goat',
					'Goldfish', 'Gorilla', 'Hedgehog', 'Hippo', 'Hippopotamus', 'Horse',
					'Horsie', 'Kangaroo', 'Kitten', 'Kitty', 'Koala', 'Leopard', 'Lion',
					'Monkey', 'Nicolas-cage', 'Orly', 'Otter', 'Owl', 'Panda', 'Panda-bear',
					'Parrot', 'Penguin', 'Pig', 'Piglet', 'Polar-bear', 'Pony', 'Porpoise',
					'Puppy', 'Python', 'Rabbit', 'Raccoon', 'Raptor', 'Red-panda', 'Rhino',
					'Rhinoceros', 'Rooster', 'Salamander', 'Seal', 'Shark', 'Sheep', 'Snake',
					'Squirrel', 'Sugar-glider', 'T-rex', 'Tortoise', 'Trex', 'Turtle', 'Tyrannosaurus-rex',
					'Velociraptor', 'Whale', 'Yarly', 'Zebra'];

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
	 * Searches and returns an DOM element
	 * @param {String} id 
	 * @return {DOM Element} DOM Element
	 */
	function getElementById( id ) {
		return document.getElementById( id );
	}
	
	/**
	 * Creates a DOM Element
	 * @param {String} nameElement
	 * @return {DOM Element} New DOM element
	 */
	function createElement( nameElement ) {
		return document.createElement( nameElement );
	}
	
	/**
	 * Creates and returns the URL
	 * @param {Integer} width
	 * @param {Integer} height
	 * @return {String} URL
	 */
	function getURL( width, height, animal ) {
		var URL = defaultURL + defaultSeparator  + width + defaultSeparator + height + paramSeparator + getRandomNumber();;
		if( animal !== '' ) {
			animal = animal.trim().replace(' ', '-');
			if( inArray(animal, animals) ) {
				URL = defaultURL + defaultSeparator + animal + defaultSeparator + width + defaultSeparator + height + paramSeparator + getRandomNumber(); 
			}
		}
		return URL;
	}
	
	/**
	 * Returns a random number
	 * @return {Integer} Random number
	 */
	function getRandomNumber() {
		return Math.random();
	}
	
	/**
	 * Append or remove a child of the DOM element passed by parameter
	 * @param {DOM Element} el
	 */
	function toggleChild( el ) {
		var picToDelete = getElementById( picId );
		if ( picToDelete ) {
			el.removeChild( picToDelete );
		}
		el.appendChild( pic );
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
	 * @param {String} animal
	 * @return {Image} Image
	 */
	function getImage( width, height, animal ) {
		try {
			var animalPic = createElement( 'img' );
			animalPic.src = getURL( width, height, animal );
			animalPic.id = picId;
			return animalPic;
		} catch ( ex ) {
			error( ex );
		}
	}
	
	/**
	 * Set the image to target element
	 * @param {DOM Element} targetElement
	 * @param {Integer} width
	 * @param {Integer} height
	 * @param {String} animal
	 */
	function setImage( targetElement, width, height, animal ) {
		pic = getImage( width, height, animal );
		switch ( targetElement.nodeName.toLowerCase() ) {
			case 'div':
				toggleChild( targetElement );
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
		refreshTime: 4000,
		animal: ''
	}
	
	/**
	 * Initializes the plugin
	 */
	placeCreature.prototype._init = function() {
		targetElement = getElementById( this.options.target );
		if ( is( targetElement ) ) {
			setImage( targetElement, this.options.width, this.options.height, this.options.animal );
			if ( this.options.animal !== '' ) {
				this.options.refresh = false;
				this.options.refreshTime = minTimeRefresh;
			}
			if ( this.options.refresh ) {
				if ( this.options.refreshTime < minTimeRefresh ) {
					this.options.refreshTime = minTimeRefresh;
				}
				interval = setInterval( 
					function() {
						setImage( targetElement, window.placeCreature.options.width, window.placeCreature.options.height, window.placeCreature.options.animal );
					}, this.options.refreshTime );
			}
		} else {
			error( 'Target elements is not a div or an image' );
		}
	}
	
	/**
	 * Clears the interval
	 */
	placeCreature.prototype.stopRefresh = function() {
		if( interval ) {
			clearInterval( interval );
		}
	}
	
	/**
	 * Refresh the photo manually
	 */
	placeCreature.prototype.refreshPhoto = function() {
		setImage( targetElement, this.options.width, this.options.height, this.options.animal );
	}
	
	/**
	 * Restores the plugin with first parameters
	 */
	placeCreature.prototype.restore = function() {
		this._init();
	}

	/**
	 * Refresh the options with new options passed by parameter
	 */
	placeCreature.prototype.refreshParams = function( options ) {
		extend( this.options, options );
		this._init();
	}

	/**
	 * Adds the plugin to namespace
	 */
	window.placeCreature = placeCreature;

} )( window );