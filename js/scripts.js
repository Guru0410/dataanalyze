// defaults for all charts
Chart.defaults.global.responsive = true;
Chart.defaults.global.defaultFontColor = 'blue';
Chart.defaults.global.tooltips.mode = 'label';
Chart.defaults.global.tooltips.backgroundColor = '#000';
Chart.defaults.global.tooltips.titleColor = '#888';
Chart.defaults.global.tooltips.bodyColor = '#888';


var data = {
    //labels: days,
    labels: ["Feb 7", "Feb 8", "Feb 9", "Feb 10", "Feb 11", "Feb 12", "Feb 13"],
    datasets: [
        {   labels: "Active",
            fill: true,
            backgroundColor: "rgba(250,220,220,0.2)",
            borderWidth: 2,
            borderColor: "rgba(220,220,220,1)",
            pointBorderColor: "rgba(220,220,220,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(220,220,220,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            data: [65, 59, 80, 81, 56, 55, 40],
            // data: clicks,
        }
    ]
};
var activeCases = $("#activeCases");
var confirmedCases =  $("#confirmedCases");
var recoveredCases =  $("#recoveredCases");
var deceasedCases =  $("#deceasedCases");

var listOfCases = [activeCases,confirmedCases,recoveredCases,deceasedCases]

for(const cases of listOfCases){
    new Chart(cases, {
        type: 'line',
        data: data,
        scaleFontColor: 'red',
        options: {
            scaleFontColor: 'red',
            legend: {display: false},
            responsive: true,
            tooltips: {
                mode: 'single',
            },
            scales: {
                xAxes: [{ 
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    drawBorder: false,
                    ticks: {
                      fontColor: "#fff", // this here
                    },
                }],
                yAxes: [{
                    display: false,
                    gridLines: {
                        display: false,
                    },
                }],
            }
        }         
    });
}


$('#vmap').vectorMap(
{
    map: 'world_en',
    backgroundColor: '#a5bfdd',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    enableZoom: false,
    hoverColor: '#c9dfaf',
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: null,
    showTooltip: true,
    onRegionClick: function(element, code, region)
    {
        var message = 'You clicked "'
            + region
            + '" which has the code: '
            + code.toUpperCase();

        alert(message);
    },
    onLabelShow: function(event, label, code)
    {
        // HTML Based Labels. You can use any HTML you want, this is just an example
        label.html('<div class="map-tooltip"><h1 class="header">Header</h1><p class="description">Some Description</p></div>');
    }
});
