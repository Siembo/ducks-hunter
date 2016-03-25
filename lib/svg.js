/**
* SVG library
* @author Duca Bogdan Mihai
*/
//global namespace
var SVG_NS="http://www.w3.org/2000/svg";
svg = {
	/**
	* Creates an SVG element
	* 
	* @param {number} widthBox is width of viewBox
	* @param {number} heightBox is height of viewBox
	* @param {number} w is width of the object
	* @param {number} h is height of the object
	*
	* @return {node} svgElement
	*/
	createSVG: function (id, width, height, viewBoxWidth, viewBoxHeight) {
		var el = document.createElementNS( SVG_NS,"svg");
    if (id) el.setAttribute("id", id);
		if (width) el.setAttribute("version", "1.1");
		if (height) el.setAttribute("width", width);
		if (viewBoxWidth) el.setAttribute("height", height);
		if (viewBoxHeight) el.setAttribute("viewBox","0 0 " + viewBoxWidth +" "+ viewBoxHeight);
		/*el.setAttribute("preserveAspectRatio", "xMidYMid meet");*/
		return el;
	},
	/**
	* Create a rect element
	* 
	* @param {number} x 
	* @param {number} y 
	* @param {number} width 
	* @param {number} height 
	* @param {string} color 
	*
	* @return (object)
	*/
	createRect: function (x, y, width, height, fillColor) {
		var el = document.createElementNS( SVG_NS,"rect");
		el.setAttribute("x", x);
		el.setAttribute("y", y);
		el.setAttribute("width", width);
		el.setAttribute("height", height);
		if (fillColor) el.setAttribute("fill", fillColor);
    el.setAttribute("stroke-width", "2");
		return el;
	},
  /**
  * Create a circle element
  * 
  * @param {number} x 
  * @param {number} y 
  * @param {number} width 
  * @param {number} height 
  * @param {string} color 
  *
  * @return (object)
  */
  createCircle: function ( cx, cy, r, fillColor) {
    var el = document.createElementNS( SVG_NS,"circle");
    el.setAttribute("cx", cx);
    el.setAttribute("cy", cy);
    el.setAttribute("r", r);
    if (fillColor) el.setAttribute("fill", fillColor);
    el.setAttribute("stroke", "black");
    el.setAttribute("stroke-width", "2");
    return el;
  },
  /**
   * Create a line element
   * 
   * @param {number} x1 
   * @param {number} y1 
   * @param {number} x2 
   * @param {number} y2 
   * @param {string} color  the stroke color
   * @param {number} width 
   * @return {object}
   */
   createLine: function (x1, y1, x2, y2, color, width) {
     var el = document.createElementNS( SVG_NS,"line");
     el.setAttribute("x1", x1);
     el.setAttribute("y1", y1);
     el.setAttribute("x2", x2);
     el.setAttribute("y2", y2);
     el.setAttribute("stroke", color);
     el.setAttribute("stroke-width", width);
     return el;
   },
   /**
    * Create a path element
    * 
    * @param {number} d  the path description
    * @param {string} color  the stroke color
    * @param {number} width  the stroke width
    * @return {object}
    */
    createPath: function (d, color, width, fillColor) {
      var el = document.createElementNS( SVG_NS,"path");
      el.setAttribute("d", d);
      el.setAttribute("stroke", color);
      el.setAttribute("stroke-width", width);
      if (fillColor) el.setAttribute("fill", fillColor);
      return el;
    },
  /**
	* Function created for the node g, returns a simple g node, which is a container in SVG
	* 
	* @return gNode
	*/
	createGNode: function () {
		var gNode = document.createElementNS(SVG_NS,"g");
		return gNode;
		},
	/**
	* Function created to create an arrow with a body formed from a rectangle
	* 
	* @param {number} x the starting x position
	* @param {number} y the starting y position
	* @param {number} rectangleWidth the width of the body of the arrow,in this case the rectangle
	* @param {number} rectangleHeight the height of the body of the arrow,in this case the rectangle
	* @param {number} arrowHeadWidth the width of the arrow head
	* @param {number} arrowHeadHeight the height of the arrow head
	* @param {string} rectangleColor the color of the body, in this case the rectangle
	* @param {string} arrowHeadColor the color of the arrow Head
	*
	* @return gNode which is a container for the elements
	*/
	createArrowNode: function ( x, y, rectangleWidth, rectangleHeight, arrowHeadWidth,
			arrowHeadHeight, rectangleColor, arrowHeadColor) {
	  var gNode = document.createElementNS( SVG_NS, "g");
	  var rectEl = document.createElementNS( SVG_NS, "rect");
	  var pathNode = document.createElementNS( SVG_NS, "path");
	  var xArrowHead = x + rectangleWidth;  //x of the arrow for path
	  var yArrowHead = y;					//y of the arrow for the path
	  //verifies if the height of the arrow is different.
	  //if it is it makes the appropriate modifications for the new y
	  if (rectangleHeight >= arrowHeadHeight){
	    //if the arrow's height is smaller than the new y for the arrow head will be increased
	    yArrowHead += (rectangleHeight - arrowHeadHeight) / 2;
	  } else if (rectangleHeight <= arrowHeadHeight) {
	      yArrowHead -= (arrowHeadHeight - rectangleHeight) / 2;
	  }
	  rectEl.setAttribute("x", x);
	  rectEl.setAttribute("y", y);
	  rectEl.setAttribute("width",rectangleWidth);
	  rectEl.setAttribute("height",rectangleHeight);
	  rectEl.setAttribute("fill",rectangleColor);
	  gNode.appendChild( rectEl);
		//the arrow is drawn here
	  pathNode.setAttribute("d","M"+(xArrowHead)+" "+yArrowHead+
          " L"+(xArrowHead+arrowHeadWidth)+" "+(yArrowHead+arrowHeadHeight/2)+
		  " L"+(xArrowHead)+" "+ (yArrowHead+arrowHeadHeight)+" z");
	  
	  pathNode.setAttribute("stroke",arrowHeadColor);
	  pathNode.setAttribute("fill",arrowHeadColor);
      gNode.appendChild( pathNode);
		
	  return gNode;
	},
	/**
	* Create a g node, for grouping 2 elements, one is a path and one is a text node.
	* 
	* @param {number} xPath is the x coordinate of the first point
	* @param {number} yPath is the y coordinate of the first point
	* @param {number} xPath2 is the x coordinate of the second point
	* @param {number} yPath2 is the y coordinate of the second point
	* @param {string} colorPath the color of the Path
	* @param {number} widthPath the width of the Path
	* @param {string} fillPath fill option of the Path
	* @param {number} xText the x start position of the text node
	* @param {number} yText the y start position of the text node
	* @param {string} nameText the content of the text node
	* @param {number} heightText the height of the text node
	* @param {string} colorText the color of the content of text node
	*
	* @return g node
	*/
	createLineWithText: function ( x1, y1, x2, y2, lineColor, lineWidth, 
	    xText, yText, nameText, heighText, colorText) {
	  var gNode = document.createElementNS( SVG_NS,"g");
	  var path = svg.createLine( x1, y1, x2, y2, lineColor, lineWidth);
	  var text = svg.createText( xText, yText, nameText, heighText, colorText);
	  gNode.appendChild( text);
	  gNode.appendChild( path);
	  return gNode;
	},
	
	/**
	* Create a path element
	* @param {number} x of the initial point
	* @param {number} y of the initial point
	* @param {number} x2 of the finish point
	* @param {number} y2 of the finish point
	* @param {string} color for the path  stroke
	* @param {number} width of the line drawn by the path
	* @param {string} fill the path or not
	* 
	* @return path a path node element
	createPathNode: function ( x, y, x2, y2, color, width, fill) {
	  var pathNode = document.createElementNS( SVG_NS,"path");
	  pathNode.setAttribute("d", "M "+ x +","+ y +" L "+ x2 +","+ y2);
	  pathNode.setAttribute("stroke", color);
	  pathNode.setAttribute("stroke-width", width);
	  pathNode.setAttribute("fill", fill);
	  return pathNode;
	},
  */
	
	/**
	* Function created for the node Text
	* @param {number} x start position
	* @param {number} y start position
	* @param {string} name the content of the node
	* @param {number} fontSize of the content
	* @param {string} color of the content
	* 
	* @return text object
	*/
	createText: function ( x, y, txt, fontSize, color) {
	  var el = document.createElementNS( SVG_NS,"text");
	  var textNode = document.createTextNode( txt);
	  el.setAttribute("x", x);
	  el.setAttribute("y", y);
	  el.setAttribute("font-size", fontSize);
	  el.setAttribute("fill", color);
	  el.appendChild( textNode);
	  return el;
	}
};