# place-creature [![Build Status](https://travis-ci.org/djhvscf/place-creature.svg?branch=master)](https://travis-ci.org/djhvscf/place-creature)
An API to get random animal pictures with custom width and height. No jQuery

Supported by http://placecreature.com/

Author Homepage:      http://djhvscf.github.io/Blog/<br />

## Current version
* **v1.0.5** `20/Jan/2015`

## Bugs & Enhancements (next version)

## Release history

| Version Number  | Date          |
| --------------- | -----------   |
| v1.0.5		  |	`20/Jan/2015` |
| v1.0.0		  |	`19/Jan/2015` |

## Dependencies
* In this moment this plugin doesn't have dependencies

## How to Use


**Syntax Example**  
```html
<script src="place-creature.min.js"></script>

<img id="placeCreature"></img>
```
```javascript
(function() {
	
	var options = { width: 200, height: 200 };
	// Calling the plugin with options
	var placeCreature = new placeCreature( options );
	
	
	// Calling the plugin without options
	var placeCreature = new placeCreature();
})();
```
	
**Parameters**   

| Parameter | Description | Default |
| ----------| ----------- | ------- |
| `target` | Id of the target element where the plugin will put the image | `placeCreature` |
| `width`  | Integer that will represent the width of the image | `500` |
| `height` | Integer that will represent the height of the image | `500` |
| `refresh` | True if you want to refresh the image every so often | `false` |
| `refreshTime` | Integer that will represent the time in ms, minimum value `4000` | `4000` |

**Methods**

| Method | Description |
| ----------| ----------- |
| `stopRefresh` | If you set the `refresh` parameter `true` this method stops the automatic refresh|
| `refreshPhoto` | Changes the photo manually |
| `restore` | Restores the configuration with the first parameters |
| `refreshParams` | Refresh the parameters of the plugin |

## Demo

## Known issues

## Reporting issues
Your feedback is very appreciated! <br />
Use this page to report issues (https://github.com/djhvscf/place-creature/issues)