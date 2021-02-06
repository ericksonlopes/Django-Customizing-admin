/*Dashboard3 Init*/
 
"use strict"; 
$(document).ready(function() {
	if( $('#m_chart_3').length > 0 ){
		// Line Chart
		var data=[{ y: '100', a: 10, b: 20},
				  { y: '200', a: 30, b: 50},
				  { y: '300', a: 20, b: 40},
				  { y: '400', a: 50, b: 70},
				  { y: '500', a: 10, b: 40},
				  
				];
		var lineChart = Morris.Line({
				element: 'm_chart_3',
				data: data,
				xkey: 'y',
				ykeys: ['a', 'b'],
				labels: ['Total Income', 'Total Outcome'],
				gridLineColor: '#eaecec',
				resize: true,
				gridTextColor:'#5e7d8a',
				gridTextFamily:"Inherit",
				hideHover: 'auto',
				behaveLikeLine: true,
				smooth:true,
				pointSize: 3,
				lineWidth:2,
				pointFillColors:['#88c241','#c3e0a0'],
				pointStrokeColors: ['#88c241','#c3e0a0'],
				lineColors: ['#88c241','#c3e0a0'],
			});	
	}
});

var sparklineLogin = function() { 
	if( $('#sparkline_1').length > 0 ){
		$("#sparkline_1").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '50',
			resize: true,
			lineWidth: '1',
			lineColor: '#88c241',
			fillColor: '#c3e0a0',
			spotColor:'88c241',
			spotRadius:'2',
			minSpotColor: '#88c241',
			maxSpotColor: '#88c241',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#88c241'
		});
	}
	if( $('#sparkline_2').length > 0 ){
		$("#sparkline_2").sparkline([7,4,5,6,8,5,6,4,9,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '50',
			resize: true,
			lineWidth: '1',
			lineColor: '#88c241',
			fillColor: '#c3e0a0',
			spotColor:'88c241',
			spotRadius:'2',
			minSpotColor: '#88c241',
			maxSpotColor: '#88c241',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#88c241'
		});
	}
	if( $('#sparkline_3').length > 0 ){
		$("#sparkline_3").sparkline([5,4,5,5,8,5,6,4,5,6,6,2 ], {
			type: 'line',
			width: '100%',
			height: '50',
			resize: true,
			lineWidth: '1',
			lineColor: '#88c241',
			fillColor: '#c3e0a0',
			spotColor:'88c241',
			spotRadius:'2',
			minSpotColor: '#88c241',
			maxSpotColor: '#88c241',
			highlightLineColor: 'rgba(0, 0, 0, 0)',
			highlightSpotColor: '#88c241'
		});
	}
	if( $('#sparkline_4').length > 0 ){
		$("#sparkline_4").sparkline([20,4,4], {
			type: 'pie',
			width: '50',
			height: '50',
			resize: true,
			sliceColors: ['#88c241', '#c3e0a0', '#97ca5a']
		});
	}
	if( $('#sparkline_5').length > 0 ){
		$("#sparkline_5").sparkline([10,30,20], {
			type: 'pie',
			width: '50',
			height: '50',
			resize: true,
			sliceColors: ['#88c241', '#c3e0a0', '#97ca5a']
		});
	}
}

/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#e_chart_1').length > 0 ){
		var eChart_1 = echarts.init(document.getElementById('e_chart_1'));
		var option = {
			tooltip: {
				show: true,
				backgroundColor: '#fff',
				borderRadius:6,
				padding:6,
				axisPointer:{
					lineStyle:{
						width:0,
					}
				},
				textStyle: {
					color: '#324148',
					fontFamily: '"Roboto", sans-serif',
					fontSize: 12
				}	
			},
			series: [
				{
					type: 'pie',
					selectedMode: 'single',
					radius: ['80%', '60%'],
					labelLine: {
						normal: {
							show: false
						}
					},
					color: ['#88c241', '#c3e0a0', '#97ca5a'],
					data:[
						{value:435, name:''},
						{value:679, name:''},
						{value:848, name:''},
						{value:348, name:''},
					]
				}
			]
		};
		eChart_1.setOption(option);
		eChart_1.resize();
	}
	if( $('#e_chart_6').length > 0 ){
		var eChart_6 = echarts.init(document.getElementById('e_chart_6'));
		function detectionData(str) {
		var color = '#97ca5a';
		if (str >= 30 && str <= 60) {
			color = '#c3e0a0';
		} 
		return color;
		}
		var option5 = {
			"tooltip": {
				"formatter": "{a} <br/>{b} : {c}%"
			},
			"series": [{
				"name": "traffic",
				"type": "gauge",
				"splitNumber": 5,
				"axisLine": {
					"lineStyle": {
						"color": [
							[0.31, "#f4f4f4"],
							[1, "#f4f4f4"]
						],
						"width": 10
					}
				},
				"axisTick": {
					"lineStyle": {
						"color": '#88c241', 
						"width": 2
					},
					"length": -25,
					"splitNumber": 1
				},
				"axisLabel": {
					"distance": -80,
					"textStyle": {
						"color": "#6f7a7f"
					}
				},
				"splitLine": {
					"show": false
				},
				"itemStyle": {
					"normal": {
						"color": "#97ca5a"
					}
				},
				"detail": {
					"formatter": "{value}%",
					"offsetCenter": [0, "60%"],
					"textStyle": {
						"fontSize": 12,
						"color": "#6f7a7f"
					}
				},
				"title": {
					"offsetCenter": [0, "100%"]
				},
				"data": [{
					"name": "",
					"value": 31
					
				}]
			}]
		}
		var app = [];
		app.timeTicket = setInterval(function() {
			var value = (Math.random() * 100).toFixed(2) - 0;
			option5.series[0].data[0].value = value;
			option5.series[0].axisLine.lineStyle.color[0][0] = value / 100;
			option5.series[0].axisLine.lineStyle.color[0][1] = detectionData(value);
			eChart_6.setOption(option5, true);
		}, 500);
		eChart_6.setOption(option5);
		eChart_6.resize();
	}
}
/*****E-Charts function end*****/
$('#dash-tab a').on('click', function (e) {
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
})

/*****Resize function start*****/
var sparkResize,echartResize;
$(window).on("resize", function () {
	/*Sparkline-Chart Resize*/
	clearTimeout(sparkResize);
	sparkResize = setTimeout(sparklineLogin, 200);
	
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
sparklineLogin();
/*****Function Call end*****/