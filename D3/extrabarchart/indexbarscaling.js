let dataset = [30,20,105,145,35,90];
let svgHeight= 200, svgWidth = 500, barSpacing = 5;
let totalBarWidth = (svgWidth/dataset.length);
let barWidth = totalBarWidth-barSpacing;
let svg = d3.select('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);
let scale = d3.scaleLinear()
              .domain([0,d3.max(dataset)])
              .range([0,svgHeight])
let barchart = svg.selectAll('rect')
                  .data(dataset)
                  .enter()
                  .append('rect')
                  .attr('y',d=>svgHeight-scale(d))
                  .attr('height',d=>scale(d))
                  .attr('width',barWidth)
                  .attr('transform', (d,i)=>{
                  let translate = [totalBarWidth*i, 0];
                      return `translate(${translate})`;
                  });