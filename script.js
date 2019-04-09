var dataP = d3.json('https://ghibliapi.herokuapp.com/films')
dataP.then(function(data){
  drawChart(data)
});

var drawChart = function(data){

  var height = 500;
  var width = 600;

  var xScale = d3.scaleLinear()
                  .domain([0,data.length])
                  .range([0,width]);

  var yScale = d3.scaleLinear()
                  .domain([0,100])
                  .range([0,height]);

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
                .attr('y',function(d){
                  return height - yScale(d.rt_score);
                })
                .attr('width',width/data.length)
                .attr('height',function(d,i){
                  return yScale(d.rt_score);
                })
                .attr('fill','navy');

  var labels = svg.select('text')
                  .data(data)
                  .enter()
                  .append('text')
                  .text(function(d){
                    return d.rt_score;
                  })
                  .attr('y',function(d){
                    return height - yScale(d.rt_score) + 20;
                  })
                  .attr('x',function(d,i){
                    return xScale(i) + 5
                  })
                  .attr("fill","white")

}
