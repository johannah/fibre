
var inletcss_rules = `

/*
 * =========================================================
 * =========================================================
 * ColorPicker
 * =========================================================
 * =========================================================
 *
 */
.inlet_clicker {
  z-index: 1;
}
.inlet_slider {
  opacity: 0.85;
  z-index: 1;
  width: 24%;
  display: block;
  border-radius: 3px;
  height: 14px;
  -webkit-box-shadow: inset 0px 0px 5px 0px rgba(4, 4, 4, 0.5);
  box-shadow: inset 0px 0px 5px 0px rgba(4, 4, 4, 0.5);
  background-color: #d6d6d6;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#d6d6d6), to(#ebebeb));
  background-image: -webkit-linear-gradient(top, #d6d6d6, #ebebeb);
  background-image: -moz-linear-gradient(top, #d6d6d6, #ebebeb);
  background-image: -o-linear-gradient(top, #d6d6d6, #ebebeb);
  background-image: -ms-linear-gradient(top, #d6d6d6, #ebebeb);
  background-image: linear-gradient(top, #d6d6d6, #ebebeb);
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, StartColorStr='#d6d6d6', EndColorStr='#ebebeb');
}
.inlet_slider:hover {
  opacity: 0.98;
}
.inlet_slider .range {
  width: 100%;
  height: 100%;
  outline: none;
  margin-top: 0px;
  margin-left: 0px;
  border-radius: 3px;
}
.inlet_slider input[type="range"] {
  -webkit-appearance: none;
  -moz-appearance: none;
}
@-moz-document url-prefix() {
  .inlet_slider input[type="range"] {
    position: absolute;
  }
}
.inlet_slider input::-moz-range-track {
  background: none;
  border: none;
  outline: none;
}
.inlet_slider input::-webkit-slider-thumb {
  cursor: col-resize;
  -webkit-appearance: none;
  -moz-apperance: none;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  border: 1px solid black;
  background-color: red;
  -webkit-box-shadow: 0px 0px 3px 0px rgba(4, 4, 4, 0.4);
  box-shadow: 0px 0px 3px 0px rgba(4, 4, 4, 0.4);
  background-color: #424242;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#424242), to(#212121));
  background-image: -webkit-linear-gradient(top, #424242, #212121);
  background-image: -moz-linear-gradient(top, #424242, #212121);
  background-image: -o-linear-gradient(top, #424242, #212121);
  background-image: -ms-linear-gradient(top, #424242, #212121);
  background-image: linear-gradient(top, #424242, #212121);
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0, StartColorStr='#424242', EndColorStr='#212121');
}
/*
 * =========================================================
 * =========================================================
 * ColorPicker
 * =========================================================
 * =========================================================
 *
 */
.ColorPicker {
  /*
	border: 1px solid rgba(0,0,0,0.5);
	border-radius: 6px;
	background: #0d0d0d;
	background: -webkit-gradient(linear, left top, left bottom, from(#333), color-stop(0.1, #111), to(#000000));
	box-shadow: 2px 2px 5px 2px rgba(0,0,0,0.35);
	color:#AAA;
  */
  text-shadow: 1px 1px 1px #000;
  color: #050505;
  cursor: default;
  display: block;
  font-family: 'arial', helvetica, sans-serif;
  font-size: 20px;
  padding: 7px 8px 20px;
  position: absolute;
  top: 100px;
  left: 700px;
  width: 229px;
  z-index: 100;
  border-radius: 3px;
  -webkit-box-shadow: inset 0px 0px 5px 0px rgba(4, 4, 4, 0.5);
  box-shadow: inset 0px 0px 5px 0px rgba(4, 4, 4, 0.5);
  background-color: rgba(214, 214, 215, 0.85);
  /*
  background-image: -webkit-gradient(linear, left top, left bottom, from(rgb(214, 214, 214)), to(rgb(235, 235, 235)));
  background-image: -webkit-linear-gradient(top, rgb(214, 214, 214), rgb(235, 235, 235));
  background-image: -moz-linear-gradient(top, rgb(214, 214, 214), rgb(235, 235, 235));
  background-image: -o-linear-gradient(top, rgb(214, 214, 214), rgb(235, 235, 235));
  background-image: -ms-linear-gradient(top, rgb(214, 214, 214), rgb(235, 235, 235));
  background-image: linear-gradient(top, rgb(214, 214, 214), rgb(235, 235, 235));
  filter: progid:DXImageTransform.Microsoft.gradient(GradientType=0,StartColorStr='#d6d6d6', EndColorStr='#ebebeb');
  */
}
.ColorPicker br {
  clear: both;
  margin: 0;
  padding: 0;
}
.ColorPicker input.hexInput:hover,
.ColorPicker input.hexInput:focus {
  color: #aa1212;
}
.ColorPicker input.hexInput {
  -webkit-transition-property: color;
  -webkit-transition-duration: .5s;
  background: none;
  border: 0;
  margin: 0;
  font-family: courier,monospace;
  font-size: 20px;
  position: relative;
  top: -2px;
  float: left;
  color: #050505;
  cursor: text;
}
.ColorPicker div.hexBox {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  background: #FFF;
  float: left;
  font-size: 1px;
  height: 20px;
  margin: 0 5px 0 2px;
  width: 20px;
  cursor: pointer;
}
.ColorPicker div.hexBox div {
  width: inherit;
  height: inherit;
}
.ColorPicker div.hexClose {
  display: none;
  /*
	-webkit-transition-property: color, text-shadow;
	-webkit-transition-duration: .5s;
	position: relative;
	top: -1px;
	left: -1px;
	color:#FFF;
	cursor:pointer;
	float:right;
	padding: 0 5px;
	margin:0 4px 3px;
	user-select:none;
	-webkit-user-select: none;
  */
}
.ColorPicker div.hexClose:hover {
  text-shadow: 0 0 20px #fff;
  color: #FF1100;
}

`;