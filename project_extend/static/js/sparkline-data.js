/*Sparkline Init*/
"use strict";
var sparklineLogin = function() { 
	if( $('#sparkline_1').length > 0 ){
		$("#sparkline_1").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '50',
			resize: true,
			lineWidth: '1',
			lineColor: '#88c241',
			fillColor: '#aed67e',
			spotColor:'#88c241',
			spotRadius:'2',
			minSpotColor: '#88c241',
			maxSpotColor: '#88c241',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#88c241'
		});
	}	
	if( $('#sparkline_2').length > 0 ){
		$("#sparkline_2").sparkline([0,2,8,6,8,5,6,4,8,6,6,2 ], {
			type: 'bar',
			width: '100%',
			height: '50',
			barWidth: '5',
			resize: true,
			barSpacing: '5',
			barColor: '#88c241',	
			highlightSpotColor: '#88c241'
		});
	}	
	if( $('#sparkline_3').length > 0 ){
		$("#sparkline_3").sparkline([20,4,4], {
			type: 'pie',
			width: '50',
			height: '50',
			resize: true,
			sliceColors: ['#88c241', '#c3e0a0', 'a58b84']
		});
	}
	if( $('#sparkline_7').length > 0 ){
		$('#sparkline_7').sparkline([15, 23, 55, 35, 54, 45, 66, 47, 30], {
			type: 'line',
			width: '100%',
			height: '50',
			chartRangeMax: 50,
			resize: true,
			lineWidth: '1',
			lineColor: '#88c241',
			fillColor: '#aed67e',
			spotColor:'#88c241',
			spotRadius:'2',
			minSpotColor: '#88c241',
			maxSpotColor: '#88c241',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#88c241'
		});
		$('#sparkline_7').sparkline([0, 13, 10, 14, 15, 10, 18, 20, 0], {
			type: 'line',
			width: '100%',
			height: '50',
			chartRangeMax: 40,
			lineWidth: '1',
			lineColor: '#88c241',
			fillColor: '#aed67e',
			spotColor:'#88c241',
			composite: true,
			spotRadius:'2',
			minSpotColor: '#88c241',
			maxSpotColor: '#88c241',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#88c241'
		});
	}	
}
sparklineLogin();
 
var sparkResize;
$(window).on("resize",function(){
	clearTimeout(sparkResize);
	sparkResize = setTimeout(sparklineLogin, 200);
});
