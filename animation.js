function main(){

    // d3.select('#container')
    //     .transition().duration(2000) // in milliseconds
    //     .style('background-color','red')
    //     .transition().duration(2000) // in milliseconds
    //     .style('background-color','yellow')

    var t = d3.transition().duration(2000)
    
    d3.select('#container').transition(t).style('background-color', 'red')
                            .transition(t).style('background-color', 'yellow');
                            ///https://observablehq.com/@d3/easing-animations

    var svg = d3.select('body')
        .append('svg')
        .attr('width', 500)
        .attr('height', 500);

    var bar1 = svg.append('rect')
                    .attr('fill', 'navy')
                    .attr('x', 100)
                    .attr('y', 20)
                    .attr('height', 20)
                    .attr('width', 10);

    var bar2 = svg.append('rect')
                    .attr('fill', 'navy')
                    .attr('x', 120)
                    .attr('y', 20)
                    .attr('height', 20)
                    .attr('width', 10);
    update();
    
    function update(){
        bar1.transition()
            .ease(d3.easeLinear)
            .duration(2000)
            .attr('height', 100)
        bar2.transition()
            .ease(d3.easeLinear)
            .duration(2000)
            .delay(2000)
            .attr('height', 100)
    }

}