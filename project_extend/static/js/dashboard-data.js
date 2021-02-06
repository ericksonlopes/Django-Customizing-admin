/*Dashboard3 Init*/
 
"use strict"; 
$(document).ready(function() {
	/*Toaster Alert*/
	$.toast({
		heading: 'Well done!',
		text: '<p>You have successfully completed level 1.</p><button class="btn btn-primary btn-sm mt-10">Play again</button>',
		position: 'top-right',
		loaderBg:'#88c241',
		class: 'jq-toast-primary',
		hideAfter: 3500, 
		stack: 6,
		showHideTransition: 'fade'
	});
	if($('#area_chart').length > 0) {
		var data=[{
            period: 'Son',
            iphone: 10,
            ipad: 80,
        }, {
            period: 'Mon',
            iphone: 130,
            ipad: 100,
        }, {
            period: 'Tue',
            iphone: 80,
            ipad: 30,
        }, {
            period: 'Wed',
            iphone: 70,
            ipad: 200,
        }, {
            period: 'Thu',
            iphone: 180,
            ipad: 50,
        }, {
            period: 'Fri',
            iphone: 105,
            ipad: 170,
        },
         {
            period: 'Sat',
            iphone: 250,
            ipad: 150,
        }];
		
		var lineChart = Morris.Area({
        element: 'area_chart',
        data: data ,
        xkey: 'period',
        ykeys: ['iphone', 'ipad'],
        labels: ['iphone', 'ipad'],
        pointSize: 0,
        lineWidth:0,
		fillOpacity: 0.95,
		pointStrokeColors:['#97ca5a','#88c241'],
		behaveLikeLine: true,
		grid: false,
		hideHover: 'auto',
		lineColors: ['#97ca5a','#88c241'],
		resize: true,
		redraw: true,
		smooth: true,
		gridTextColor:'#878787',
		gridTextFamily:"Nunito",
        parseTime: false
    });
	}
	if( $('#m_chart_4').length > 0 ){
		// Line Chart
		var data=[{ y: '100', a: 10, b: 20, c: 40},
				  { y: '200', a: 30, b: 50, c: 70},
				  { y: '300', a: 20, b: 40, c: 50},
				  { y: '400', a: 50, b: 70, c: 90},
				  { y: '500', a: 10, b: 40, c: 100},
				  
				];
		var lineChart = Morris.Line({
				element: 'm_chart_4',
				data: data,
				xkey: 'y',
				ykeys: ['a', 'b', 'c'],
				labels: ['Total Income', 'Total Outcome', 'Total Expences'],
				gridLineColor: 'transparent',
				resize: true,
				gridTextColor:'#6f7a7f',
				gridTextFamily:"Inherit",
				hideHover: 'auto',
				behaveLikeLine: true,
				smooth:false,
				pointSize:4,
				lineWidth:2,
				pointFillColors:['#fff','#fff','#fff'],
				pointStrokeColors: ['#88c241','#97ca5a','#aed67e'],
				lineColors: ['#88c241','#97ca5a','#aed67e'],
			});	
	}

	
});

/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#e_chart_6').length > 0 ){
		var eChart_6 = echarts.init(document.getElementById('e_chart_6'));
		var option5 = {
			color: ['#aed67e'],
			tooltip: {
				show: true,
				trigger: 'axis',
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
					fontFamily: '"Nunito", sans-serif;',
					fontSize: 12
				}	
			},
			
			grid: {
				top: '3%',
				left: '3%',
				right: '3%',
				bottom: '3%',
				containLabel: true
			},
			xAxis : [
				{
					type : 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#6f7a7f'
						}
					}
				}
			],
			yAxis : [
				{
					type : 'value',
					axisLine: {
						show:false
					},
					axisTick: {
						show:false
					},
					axisLabel: {
						textStyle: {
							color: '#6f7a7f'
						}
					},
					splitLine: {
						lineStyle: {
							color: 'transparent',
						}
					}
				}
			],
		   
			series: [
				{
					data:[420, 332, 401, 334, 400, 330, 410],
					type: 'bar',
					barMaxWidth: 30,
				},
				{
					data: [120, 152, 251, 124, 250, 120, 110],
					type: 'bar',
					symbolSize: 6,
					smooth: true,
					itemStyle: {
						color: '#88c241',
					},
					lineStyle: {
						color: '#88c241',
						width:2,
					}
				}
			]
		};
		eChart_6.setOption(option5);
		eChart_6.resize();
	}
	
}
/*****E-Charts function end*****/

var sparklineLogin = function() { 
	if( $('#sparkline_1').length > 0 ){
		$("#sparkline_1").sparkline([2,4,4,6,8,5,6,4,8,6,6,2 ], {
			type: 'bar',
			width: '100%',
			height: '40',
			barWidth: '5',
			resize: true,
			barSpacing: '5',
			barColor: '#88c241',	
			highlightSpotColor: '#88c241'
		});
	}	
	if( $('#sparkline_2').length > 0 ){
		$("#sparkline_2").sparkline([2,7,7,5,8,5,4,4,3,4,6,1 ], {
			type: 'bar',
			width: '100%',
			height: '40',
			barWidth: '5',
			resize: true,
			barSpacing: '5',
			barColor: '#88c241',	
			highlightSpotColor: '#88c241'
		});
	}	
	if( $('#sparkline_3').length > 0 ){
		$("#sparkline_3").sparkline([9,3,3,2,8,6,4,3,3,2,6,1 ], {
			type: 'bar',
			width: '100%',
			height: '40',
			barWidth: '5',
			resize: true,
			barSpacing: '5',
			barColor: '#88c241',	
			highlightSpotColor: '#88c241'
		});
	}
	if( $('#sparkline_4').length > 0 ){
		$("#sparkline_4").sparkline([5,3,3,2,1,6,2,3,5,2,2,1 ], {
			type: 'bar',
			width: '100%',
			height: '40',
			barWidth: '5',
			resize: true,
			barSpacing: '5',
			barColor: '#88c241',	
			highlightSpotColor: '#88c241'
		});
	}
}
sparklineLogin();

/*****Resize function start*****/
var sparkResize,echartResize;
$(window).on("resize", function () {
	/*Sparkline Resize*/
	clearTimeout(sparkResize);
	sparkResize = setTimeout(sparklineLogin, 200);
	
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
/*****Function Call end*****/