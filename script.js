var dataP = d3.json('https://ghibliapi.herokuapp.com/films')
dataP.then(function(data){
  drawChart(data)
});

var drawChart = function(data){

  var height = 600;
  var width = 500;

  var xScale = d3.scaleLinear()
                  .domain([0,data.length])
                  .range([0,width]);

  var yScale = d3.scaleLinear()
                  .domain([0,100])
                  .range([height,0]);

  var svg = d3.select('svg')
              .attr("height",height)
              .attr("width",width)
              .selectAll('rect')
                .data(data)
                .enter()
                .append('rect')
                .attr('x',function(d,i){
                  return xScale(i);
                })
                .attr('y',0)
                .attr('width',width/data.length)
                .attr('height',function(d,i){
                  return yScale(d.rt_score);
                })
                .attr('fill','blue');



}
