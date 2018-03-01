c = document.getElementById("clear");
space = document.getElementById("svg");
var prevX = null;
var prevY = null;

var draw = function(e) {
  console.log("drawing");
    x = e.offsetX.toString();
      y = e.offsetY.toString();
        if (prevX != null) {
	         var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
	          line.setAttribute("x1", prevX);
	           line.setAttribute("y1", prevY);
	            line.setAttribute("x2", x);
	             line.setAttribute("y2", y);
	              line.setAttribute("stroke", "black");
	               space.appendChild(line);
        }
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
          circle.setAttribute("r", "10");
            circle.setAttribute("fill", "black");
              space.appendChild(circle);
                prevX = x;
                  prevY = y;
  }

var clear = function(e) {
    space.innerHTML = "";
    prevX = null;
}

space.addEventListener("click", draw);
c.addEventListener("click", clear);
