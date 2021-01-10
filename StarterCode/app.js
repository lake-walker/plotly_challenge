// I believe this is the right way to do it.
function getPlots(id) {
  d3.json('samples.json').then(function(data) {
    console.log(data);
    var ids = data.samples[0].otu_ids;
    console.log(ids);
    var values = data.samples[0].sample_values;
    console.log(values);
    var topValues = data.samples[0].sample_values.slice(0,10).reverse();
    console.log(topValues);
    var labels = data.samples[0].otu_labels;
    console.log(labels);
    var topLabels = data.samples[0].otu_labels.slice(0,10);
    console.log(topLabels);
    // Top ten bacteria ids
    var top_ids = (data.samples[0].otu_ids.slice(0,10)).reverse();
    console.log(top_ids);
    // Reformat the ids
    var otuID = top_ids.map(d => 'OTU' + d);
    console.log(otuID);
    // Create traces for ids
    var trace = {
      x: topValues,
      y: otuID,
      text: topLabels,
      color: 'red',
      type: 'bar',
      orientation:'h',
    };
    var data = [trace];

    var layout = {
      title: 'Top 10 OTU',
      yaxis:{tickmode:'linear'},
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 30
    }
    };
    Plotly.newPlot('bar',data,layout);

    // Create the bubble chart
    var trace1 = {
      x: ids,
      y: values,
      mode: 'markers',
      marker: {
        size: values,
        color: ids,
      },
      text: labels,
    };

    var data1 = [trace1];

    var layout1 = {
      title: 'OTU Data',
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 30
      }
    };
    Plotly.newPlot('bubble', data1, layout1);

  })
};

getPlots();

// Function to retrieve data for demographics info 
function getData(id) {
  d3.json('samples.json').then(function(data) {
    var metadata = data.metadata;
    console.log(metadata);

    // Filter metadata by id
    var selection = metadata.filter(meta => meta.id.toString() === id)[0];
    // var id = metadata[0].id;
    // console.log(id);
    // Select the demographic area to add in metadata
    var demographic = d3.select('#sample-metadata');

    demographic.html("");

    Object.entries(selection).forEach(key => {
      demographic.append('h3').text(key[0].toUpperCase() + ': ' + key[1] + "\n");
    });
});
};

getData();

// function getData(id) {
//   d3.event.preventDefault();

//   d3.json('samples.json').then(function(data) {
//     var metadata = data.metadata;

//     var demographic = d3.select('.panel-body');

//     var filteredData = metadata.filter(meta => meta.id === )
//   })
// }


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

// Option Changed function 
function optionChanged(id) {
  getPlots(id);
  getData(id);
}

function init() {
  var dropdown = d3.select('#selDataset');
  d3.json('samples.json').then((data)=> {
    console.log(data)

    data.names.forEach(function(name) {
      dropdown.append('option').text(name).property('value');
    });
    getPlots(data.names[0]);
    getData(data.names[0]);
  });
}

init();

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
