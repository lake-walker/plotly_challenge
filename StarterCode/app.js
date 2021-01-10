// Read json file into js file and console log it
d3.json('samples.json').then(function(data) {
    // console.log(data[0]);
    var names = data.names;
    console.log(names);
    // Add options to the dropdown
    d3.select('#selDataset')
      .selectAll('myOptions')
        .data(names)
      .enter()
        .append('option')
      .text(function(d) {
        return d;
      })
      .attr('value', function(d) { return d});
});

// var select = document.getElementById('selDataset');
// for(index in names) {
//   select.options[select.options.length] = 
// }



// Create an unpack function to get the data we need
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
}


// Create the build plot function for the otu-data
// function buildPlot() {
//     d3.json('samples.json').then(function(data) {
//         var sample_values = unpack(data.samples)
//     })
// }
