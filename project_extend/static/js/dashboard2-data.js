/*Dashboard3 Init*/
 
"use strict"; 
$(document).ready(function() {
	/*Toaster Alert*/
	$.toast({
		heading: 'Oh snap!',
		text: '<p>Change a few things and try submitting again.</p>',
		position: 'bottom-right',
		loaderBg:'#88c241',
		class: 'jq-toast-danger',
		hideAfter: 3500, 
		stack: 6,
		showHideTransition: 'fade'
	});
	
	if( $('#pie_chart_1').length > 0 ){
		$('#pie_chart_1').easyPieChart({
			barColor : '#88c241',
			lineWidth: 3,
			animate: 3000,
			size:	50,
			lineCap: 'square',
			scaleColor: '#f5f5f6',
			trackColor: '#f5f5f6',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	if( $('#pie_chart_2').length > 0 ){
		$('#pie_chart_2').easyPieChart({
			barColor : '#88c241',
			lineWidth: 3,
			animate: 3000,
			size:	50,
			lineCap: 'square',
			scaleColor: '#f5f5f6',
			trackColor: '#f5f5f6',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});
	}
	if($('#area_chart').length > 0) {
		// Area Chart
		var data=[{
            period: '01',
            iphone: 180,
        }, {
            period: '02',
            iphone: 105,
        },
         {
            period: '03',
            iphone: 250,
        },
		 {
            period: '04',
            iphone: 160,
        },
		 {
            period: '05',
            iphone: 130,
        },
		{
            period: '06',
            iphone: 155,
        },
		{
            period: '07',
            iphone: 150,
        },
		{
            period: '08',
            iphone: 110,
        },
		{
            period: '09',
            iphone: 170,
        },
		{
            period: '10',
            iphone: 150,
        },
		{
            period: '11',
            iphone: 150,
        },
		{
            period: '12',
            iphone: 150,
        },
		{
            period: '13',
            iphone: 150,
        },
		{
            period: '14',
            iphone: 150,
        },
		{
            period: '15',
            iphone: 160,
        },
		{
            period: '16',
            iphone: 180,
        }, {
            period: '17',
            iphone: 105,
        },
         {
            period: '18',
            iphone: 250,
        },
		 {
            period: '19',
            iphone: 160,
        },
		 {
            period: '20',
            iphone: 130,
        },
		{
            period: '21',
            iphone: 155,
        },
		{
            period: '22',
            iphone: 150,
        },
		{
            period: '23',
            iphone: 110,
        },
		{
            period: '24',
            iphone: 170,
        },
		{
            period: '25',
            iphone: 150,
        },
		{
            period: '26',
            iphone: 150,
        },
		{
            period: '27',
            iphone: 150,
        },
		{
            period: '28',
            iphone: 150,
        },
		{
            period: '29',
            iphone: 150,
        },
		{
            period: '30',
            iphone: 160,
        }];
		var areaChart = Morris.Area({
				element: 'area_chart',
				data: data,
				xkey: 'period',
				ykeys: ['iphone'],
				labels: ['iPhone'],
				pointSize: 3,
				lineWidth: 2,
				grid: false,
				pointStrokeColors:['#88c241'],
				pointFillColors:['#ffffff'],
				behaveLikeLine: true,
				smooth: false,
				hideHover: 'auto',
				lineColors: ['#88c241'],
				resize: true,
				gridTextColor:'#878787',
				gridTextFamily:"Nunito",
				parseTime: false,
				fillOpacity:0.6
			});	
	}
	
	
	var data = [],
	totalPoints = 300;

	/*Getting Random Data*/
	function getRandomData() {

		if (data.length > 0)
			data = data.slice(1);

		// Do a random walk

		while (data.length < totalPoints) {

			var prev = data.length > 0 ? data[data.length - 1] : 50,
				y = prev + Math.random() * 10 - 5;

			if (y < 0) {
				y = 0;
			} else if (y > 100) {
				y = 100;
			}

			data.push(y);
		}

		// Zip the generated y values with the x values

		var res = [];
		for (var i = 0; i < data.length; ++i) {
			res.push([i, data[i]])
		}

		return res;
	}
	
	/***Filled Line Chart***/
	if( $('#flot_line_chart_moving').length > 0 ){	
		/*Defining Option*/
		var fill_line_chartop = {
			series:{
				shadowSize: 0,
				lines: {
					fill: false
				},
			},
				grid: {
				color: "#fff",
				hoverable: true,
				borderWidth: 0,
				backgroundColor: 'transparent'
			},
			colors: ["#88c241"],
			tooltip: true,
			tooltipOpts: {
				content: "Y: %y",
				defaultTheme: false
			},
			yaxis: {
				show: true,
				color: '#6f7a7f',
				tickColor: 'transparent'
			},
			xaxis: {
				show: false
			}
		};
		
		/*Defining Data*/
		var fill_line_chart_data = {
			data: getRandomData(),
		}

		/*Chart Plot*/
		$.plot($("#flot_line_chart_moving"), [fill_line_chart_data], fill_line_chartop);
		
		/*Realtime Data*/
		setInterval(function updateRandom() {
			fill_line_chart_data = getRandomData();
			$.plot($("#flot_line_chart_moving"), [fill_line_chart_data], fill_line_chartop)
		}, 40);	
	}

	/***Line Chart***/
	if( $('.risk-switch').length > 0 )
		$('.risk-switch').toggles({
			drag: true, // allow dragging the toggle between positions
			click: true, // allow clicking on the toggle
			text: {
			on: '', // text for the ON position
			off: '' // and off
			},
			on: false, // is the toggle ON on init
			animate: 250, // animation time (ms)
			easing: 'swing', // animation transition easing function
			checkbox: null, // the checkbox to toggle (for use in forms)
			clicker: null, // element that can be clicked on to toggle. removes binding from the toggle itself (use nesting)
			
			type: 'compact' // if this is set to 'select' then the select style toggle will be used
		});
});

/*****E-Charts function start*****/
var echartsConfig = function() { 
	if( $('#e_chart_4').length > 0 ){
		var eChart_4 = echarts.init(document.getElementById('e_chart_4'));
		var option4 = {
			color: ['#88c241'],
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
					fontFamily: '"Nunito", sans-serif',
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
			xAxis: [{
				type: 'value',
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
			}],
			yAxis: {
				type: 'category',
				data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun','Mon', 'Tue', 'Wed', 'Thu'],
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
			},
			series: [{
					name:'1',
					type:'bar',
					barMaxWidth: 10,
					data:[320, 332, 301, 334, 390, 330, 320,334,301, 334, 390],
				}]
		};
		eChart_4.setOption(option4);
		eChart_4.resize();
	}
	
	if( $('#e_chart_5').length > 0 ){
		var eChart_5 = echarts.init(document.getElementById('e_chart_5'));
		var option5 = {
			color: ['#88c241', '#97ca5a'],		
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
					fontFamily: '"Nunito", sans-serif',
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
					data : ['2011','2012','2013','2014','2015','2016','2017','2018'],
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
							color: '#eaecec',
						}
					}
				}
			],
			series : [
				{
					name:'1',
					type:'bar',
					barMaxWidth: 30,
					data:[320, 332, 301, 334, 390, 330, 320,200],
				},
				{
					name:'2',
					type:'bar',
					barMaxWidth: 30,
					data:[120, 132, 101, 134, 90, 230, 210,180],
				}
			]
		};

		eChart_5.setOption(option5);
		eChart_5.resize();
	}

	if( $('#e_chart_9').length > 0 ){
		var eChart_9 = echarts.init(document.getElementById('e_chart_9'));
		
		var option8 = {
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
					fontFamily: '"Nunito", sans-serif',
					fontSize: 12
				}	
			},
			series: [
				{
					name:'',
					type:'pie',
					radius : '60%',
					center : ['50%', '50%'],
					roseType : 'radius',
					color: ['#88c241', '#c3e0a0', '#aed67e', '#f6f3f2'],
					data:[
						{value:735, name:''},
						{value:479, name:''},
						{value:548, name:''},
						{value:348, name:''},
					],
					label: {
						normal: {
							formatter: '{b}\n{d}%'
						},
				  
					}
				}
			]
		};
		eChart_9.setOption(option8);
		eChart_9.resize();
	}

	if( $('#e_chart_10').length > 0 ){
		var e_chart_10 = echarts.init(document.getElementById('e_chart_10'));
		
		var option9 = {
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
					fontFamily: '"Nunito", sans-serif',
					fontSize: 12
				}	
			},
			series: [
				{
					name:'',
					type:'pie',
					radius: ['0', '50%'],
					color: ['#88c241', '#97ca5a', '#aed67e', '#c3e0a0'],
					data:[
						{value:435, name:''},
						{value:679, name:''},
						{value:848, name:''},
						{value:348, name:''},
					],
					label: {
						normal: {
							formatter: '{b}\n{d}%'
						},
				  
					}
				}
			]
		};
		e_chart_10.setOption(option9);
		e_chart_10.resize();
	}
}
/*****E-Charts function end*****/

/*****Resize function start*****/
var echartResize;
$(window).on("resize", function () {
	/*E-Chart Resize*/
	clearTimeout(echartResize);
	echartResize = setTimeout(echartsConfig, 200);
}).resize(); 
/*****Resize function end*****/

/*****Function Call start*****/
echartsConfig();
/*****Function Call end*****/