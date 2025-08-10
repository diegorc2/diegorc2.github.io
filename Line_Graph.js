async function init() {
data = await d3.csv('us-states.csv')
axisLeft = d3.scalelog().domain(0, d3.max(data.cases)).range(0,300)
axisBottom = d3.scalelog().domain(0, d3.max(data.deaths)).range(0,300)
d3.select('svg').attr('width', 300).attr('height', 300).append('g').attr('transform', 'translate(50,50)').call(d3.axisLeft(axisLeft))
d3.select('svg').attr('width', 300).attr('height', 300).append('g').attr('transform', 'translate(50,50)').call(d3.axisLeft(axisBottom))
}