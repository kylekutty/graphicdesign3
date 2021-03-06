
var nutritionrotationRate = .1;


var qualityFatsSlider = d3.select("#qualityFatsSlider"),
    margin = {right: 50, left: 50},
    width = + qualityFatsSlider.attr("width") - margin.left - margin.right,
    height = + qualityFatsSlider.attr("height");

var x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, width])
    .clamp(true);

var y = d3.scaleLinear()
    .domain([0, 1])
    .range([0, 1])
    .clamp(true);



var slider6 = qualityFatsSlider.append("g")
    .attr("class", "slider")
    .attr("transform", "translate(" + margin.left + "," + height / 2 + ")");

slider6.append("line")
    .attr("class", "track")
    .attr("x1", x.range()[0])
    .attr("x2", x.range()[1])
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-inset")
  .select(function() { return this.parentNode.appendChild(this.cloneNode(true)); })
    .attr("class", "track-overlay")
    .call(d3.drag()
        .on("start.interrupt", function() { slider6.interrupt(); })
        .on("start drag", function() { hue6(x.invert(d3.event.x)); }));

slider6.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(0," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "start")
    .text("Saturated or Trans Fat");

slider6.insert("g", ".track-overlay")
    .attr("class", "ticks")
    .attr("transform", "translate(400," + 24 + ")")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("text-anchor", "end")
    .text("Unsaturated Fat");

var handle6 = slider6.insert("circle", ".track-overlay")
    .attr("class", "handle")
    .attr("r", 9);


var question6 = slider6.insert("g", ".question")
    .attr("class", "question")
    .attr("transform", "translate(0,0)")
  .selectAll("text")
  .data(x.ticks(1))
  .enter().append("text")
    .attr("x", 0)
    .attr("y",-20)
    .attr("text-anchor", "left")
    .text("What is the most prevalent type of fat?");



slider6.transition() // Gratuitous intro!
    .duration(0)
    .tween("hue6", function() {
      var i = d3.interpolate(0, .5);
      return function(t) { hue6(i(t)); };
    });



function hue6(h) {
  handle6.attr("cx", x(h));

  nutritionrotationRate =z(h);

  return nutritionrotationRate;

}















