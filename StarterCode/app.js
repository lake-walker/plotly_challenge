// I believe this is the right way to do it.
function getPlots(id) {
  d3.json('samples.json').then(function(data) {
    console.log(data);
    var names = data.samples[0].otu_ids;
    console.log(names);
  })
};

getPlots();



// Read json file into js file and console log it
// d3.json('samples.json').then(function(data) {
//     console.log(data);
//     var names = data.names;
//     var values = data.samples.sample_values;
//     console.log(values);
//     console.log(names);
//     // Add options to the dropdown
//     d3.select('#selDataset')
//       .selectAll('myOptions')
//         .data(names)
//       .enter()
//         .append('option')
//       .text(function(d) {
//         return d;
//       })
//       .attr('value', function(d) { return d});
// });

// var data = [
//   {
//     x: sample_values,
//   }
// ]

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
