var TRX;
var chartI;

$(document).ready(function(){
	
	inicializaGraficaGeneric("","");
	
});


function putDatos(jsonStr){
	
	if(jsonStr!=null &&  jsonStr!=""){

		if(typeof jsonStr =='object')
		{
		  obj=jsonStr;
		}else{
			//obj = JSON && JSON.parse(jsonStr);
			obj=jQuery.parseJSON(jsonStr);
		}
	}
	
	//console.log(jsonStr);
	
	TRX.series[0].addPoint([Number(obj.hora),Number(obj.conteo)],true,false);
	TRX.series[1].addPoint([Number(obj.hora),Number(obj.conteo)],true,false);
	
	//chartI.series[0].addPoint([Number(obj.hora),Number(obj.conteo)],true,false);
	
}



function inicializaGraficaGeneric(id, data) {	
	id="TRX";
	
	data="[{ \"name\": \"Incorrectas\", \"type\": \"area\", \"color\": \"#FFff00\",\"tooltip\": { \"valueDecimals\": 0 },  \"fillColor\": {  \"linearGradient\": {  \"x1\": 0, \"y1\": 0, \"x2\": 0, \"y2\": 1 },  \"stops\": [[0, \"rgb(255, 255, 0)\"], [1, \"rgb(85,255,0)\"]] }, \"pointInterval\": 1000, \"pointStart\": 1381254009795, \"showInLegend\": true, \"data\": [ [1381254009795,0],[1381255160172,510]] }," +
		   "{ \"name\": \"Correctas\", \"type\": \"area\", \"color\": \"#00FFFF\", \"tooltip\": { \"valueDecimals\": 0}, \"fillColor\": {  \"linearGradient\": {  \"x1\": 0, \"y1\": 0, \"x2\": 0, \"y2\": 1 },  \"stops\": [ [0, \"rgb(6, 255, 255)\"], [1, \"rgb(153,0,255)\"]] }, \"yAxis\": 1, \"pointInterval\": 1000, \"pointStart\": 1381254009795, \"showInLegend\": true, \"data\": [ [1381254009795,0 ],[1381255160172,510]] }]";
	
	str = jQuery.parseJSON(data);
	
	var options ={ 
					chart :{
					backgroundColor: true,
					marginTop: 0,
					renderTo: id,
					borderRadius: 0,
					type: 'area',
					zoomType: 'x',
					width:560,
					height:333
				},
				
				rangeSelector: {
					
					 buttonTheme: {
					 align: 'right',
					 fill: {
						 	linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						 	fillWidth: 0,
						 	stops: [[0.4, '#373737'],[0.6, '#141414']]
			       },
			       stroke: false,
			       style: {
			          color: '#787878',
			          fontSize: '10px',
			          fontFamily: 'Gill Sans'
			       },
			       states: {
			          hover: {
			             fill: {
			                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			                stops: [[0.4, '#888'],[0.6, '#555']]
			             },
			             stroke: false,
			             style: {
			                    color: '#787878',
			                    fontSize: '10px',
			                    fontFamily: 'Gill Sans'
			             }
			          },
			          select: {
			             fill: {
			                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			                stops: [[0.1, '#464646'],[0.3, '#1E1E1E']]
			             },
			             stroke: false,
			             style: {
			                 color: '#787878',
			                 fontSize: '10px',
			     			  fontFamily: 'Gill Sans'
			             }
			          }
			       }
			    },
					buttons: [{
						count: '30',
						type: 'minute',
						text: '30m'
					}, {
						count: '2',
						type: 'hour',
						text: '2h'
					}, {
						type: 'all',
						text: 'All'
					}],
					inputEnabled: false,
					selected: 0,
					labelStyle: {
							fontSize: '6px',
							color: '#939393',
							fontFamily: 'Lucida Sans Unicode, Lucida Grande'
						}
				},
				
				scrollbar: {
					enabled: false,
					trackBackgroundColor: {
				         linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				         stops: [
				            [0, '#000'],
				            [1, '#333']
				         ]
				      },
				      trackBorderColor: '#666'
				},
				
				navigator: {
					maskFill: 'rgba(10, 10, 10, 0.7)',
			    	series: {
						type: "area",
			        	color: "#6E6E6E",
			        	fillColor:{
			        	 linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			             stops: [
			                [0, '#5F5F5F'],
			                [1, '#5F5F5F']
			             ]
			          },
			            lineColor: "#6E6E6E"
			        },
				      
					xAxis: {
						tickWidth: 0,
						lineWidth: 0,
						startOnTick: false,
						endOnTick: false,
						gridLineWidth: 0,
						tickPixelInterval: 100,
						labels: {
							style: {
			    				fontSize: '8px',
			    				color: '#939393',
			    				fontFamily: 'Lucida Sans Unicode, Lucida Grande'
							},	
							y: 8,
							x: -10
							
						}
					},
					
			    	height: 23,
			    	margin: 0,
			    	marker: {
						enabled: false
					},
					shadow: false,
					
			    	handles: {
			    		backgroundColor: 'RGB(130,130,130)'
			    	}
				},
				
				credits:{
					enabled:false
			    },	
			    exporting: {
					enabled: false
			    },
			    tooltip: {
					valueDecimals : 0,
					shared: true,
					backgroundColor: 'rgba(10,10,10, 0.6)',
			  	borderWidth: 1,
			  	style: {
			  		color: 'rgb(255,255,255)',
			  		fontSize: '11px',
			  		fontFamily: 'Gill Sans'    			
			  		
			  	},
				crosshairs: {
					dashStyle: 'dash'
				}
				},
				xAxis: {
				      lineColor: '#6e6e6e',
						type :'datetime',
						tickInterval : 240000 * 60 *1,
						dateTimeLabelFormats: {
							day:'%H:%M:%S'
						},
					labels: {
				          style: {
				          	fontSize: '9px',
				          	color: '#5a5a5a',
				          	fontFamily: 'Gill Sans'
							},	
				          enabled: true
				      }, 
						showFirstLabel: true
					},		
					yAxis: [{
						labels: {
							style: {
								fontSize: '11px',
								color: '#FFFF00',
								fontFamily: 'Gill Sans'
							},
							enabled: true
						},
						plotLines: [{
							width: 1,
							color: '#FFFF00'
						}],
						height: 129,
						top: 10,
						min: 0,
						offset: 0,
						endOnTick: true,
						startOnTick: true,
						showFirstLabel: true,
						gridLineColor: ''
				  },{
					    height: 129,
						top: 142,
						offset: 0,
						lineWidth: 0,
						min: 0,
						endOnTick: true,
						startOnTick: true,
						showFirstLabel: true,
						labels: {
							style: {
								fontSize: '11px',
								color: '#05E8FA',
								fontFamily: 'Gill Sans'
							},
							enabled: true
						},
						gridLineColor: ''
				  }],
			    legend: {
			        enabled: false
			    },
				plotOptions: {
					area: {
						marker: {
							enabled: false,
							symbol: 'circle',
							radius: 1,
							states: {
								hover: {
									enabled: true
								}
							}
						}
					}  
				},
			    series:str
			};	
				Highcharts.setOptions({
					global : {
						useUTC : false
					}

				});	

				TRX= new Highcharts.StockChart(options);
}

	
	

