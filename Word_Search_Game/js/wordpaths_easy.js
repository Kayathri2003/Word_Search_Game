"use strict";

var paths = { 

	vert: "vertical",
	horizon: "horizontal",
	priDiag: "primaryDiagonal",
	secDiag: "secondaryDiagonal",


};


var bounds = { 

	[paths.vert]: (x, y, s) => (x < s),
	[paths.horizon]: (x, y, s) => (y < s),
	[paths.priDiag]: (x, y, s) => (x < s) && (y < s),
	[paths.secDiag]: (x, y, s) =>  (x < s) && (y >= 0),


};


var incr = { 

	[paths.vert]: (x, y) => ({x: x+1, y: y}),
	[paths.horizon]: (x, y) => ({x: x, y: y+1}),
	[paths.priDiag]: (x, y) => ({x: x+1, y: y+1}),
	[paths.secDiag]: (x, y) => ({x: x+1, y: y-1}),

	
};