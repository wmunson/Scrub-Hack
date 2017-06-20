console.log('start')

    // FIND FREESPOUSE PROMO BY MONTH
const urlFree = "https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" 
            + "&rows=51000" 
            + "&q=promo_codes:FREESPOUSE" 
            + "&q=policy_start_date:[2016-01-01T00:00:00Z TO 2016-01-31T00:00:00Z]";

    // FIND ACCOFF10 PROMO BY MONTH
const urlOff = "https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" 
            + "&rows=51000" 
            + "&q=promo_codes:ACCOFF10" 
            + "&q=policy_start_date:[2016-01-01T00:00:00Z TO 2016-01-31T00:00:00Z]";

    // FIND FINCON PROMO BY MONTH
const urlFin = "https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" 
            + "&rows=51000" 
            + "&q=promo_codes:FINCON" 
            + "&q=policy_start_date:[2016-01-01T00:00:00Z TO 2016-01-31T00:00:00Z]";

        // url = "https://v3v10.vitechinc.com/solr/policy_info/select?indent=on&wt=json" 
        //     + "&rows=10000" 
        //     + "&q=promo_codes:NOT FREESPOUSE" 
        //     + "&q=date_added:[2016-01-01T00:00:00Z TO 2016-01-31T00:00:00Z]";

        // url = "https://v3v10.vitechinc.com/solr/activities/select?indent=on&q={!join from=_version_ to=_version_ fromIndex=participant}state:CA&wt=json";
var data=[];

// 1
var xhr1 = new XMLHttpRequest();
    xhr1.open('GET', urlFree);

    xhr1.onreadystatechange = function()
    {
        if(xhr1.readyState == XMLHttpRequest.DONE)
        {
           var dataFree = JSON.parse(xhr1.responseText);
           data.push(dataFree.response)
        }
    }
    xhr1.send(null);

//  2
var xhr2 = new XMLHttpRequest();
    xhr2.open('GET', urlOff);

    xhr2.onreadystatechange = function()
    {
        if(xhr2.readyState == XMLHttpRequest.DONE)
        {
            var dataOff = JSON.parse(xhr2.responseText);
        }
    }
    xhr2.send(null);

// 3
var xhr3 = new XMLHttpRequest();
    xhr3.open('GET', urlFin);

    xhr3.onreadystatechange = function()
    {
        if(xhr3.readyState == XMLHttpRequest.DONE)
        {
            var dataFin = (xhr3.responseText);
        }
    }
    xhr3.send(null);





// function searchSuccess(response)
// {
//     var json = JSON.parse(response);
//     // alert(json.response.numFound); //Print record count.
//     // alert(json.response["docs"]);
//     // json.response["docs"][0]
//     console.log(json.response);
// }

console.log(data)

const button = $('.search');

button.on('click', function(e){
    console.log('click');
    
    graph(data=0)
})


// ///// Graph func /////

require.config({
            baseUrl: '/js',
            paths: {
            d3: "http://d3js.org/d3.v3.min"
            }
        });

var graph = function(data){
    console.log("making BAR graph")
    // var stock_data = stock_info[0]
    // var ticker = stock_info[0]['company']
    // var count_list = ['Activity'].concat(stock_info[1])
    // var price_list = [ticker].concat(stock_data['price_list'])
    // var orig_date_list = stock_info[2]
    // var date_list = ['x'].concat(stock_info[2])
    // console.log(date_list)
    require(["d3", "c3"], function(d3, c3) {
var chart = c3.generate({
    data: {
        // iris data from R
        columns: [
            ['data1', 30],
            ['data2', 120],
        ],
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
    });
        
    });
}








// var graph = function(stock_info){
//     console.log("making BAR graph")
//     // var stock_data = stock_info[0]
//     // var ticker = stock_info[0]['company']
//     // var count_list = ['Activity'].concat(stock_info[1])
//     // var price_list = [ticker].concat(stock_data['price_list'])
//     // var orig_date_list = stock_info[2]
//     // var date_list = ['x'].concat(stock_info[2])
//     // console.log(date_list)
//     require(["d3", "c3"], function(d3, c3) {

//         var chart = c3.generate({
//             bindto: '.graphArea',
//             data: {
//                 x: 'x',
//                 columns: [['data1', -30, 200, 200, 400, -150, 250],
//                     ['data2', 130, 100, -100, 200, -150, 50],
//                     ['data3', -230, 200, 200, -300, 250, 250],
//                     ['data4', 100, -50, 150, 200, -300, -100]
//                 ],
//                 axes:{
//                     'Activity': 'y2'
//                 },
//                 type: 'bar',
//                 groups: [['data1', 'data2', 'data3', 'data4']]
//             },
//             bar: {
//                 width: {
//                     ratio: 0.3 // this makes bar width 50% of length between ticks
//                 }

//             },
//             axis: {
//                 y:{
//                     label: {
//                         text: "Price (in $USD)",
//                         position: 'outer-middle'
//                     }
//                 },

//                 y2:{
//                     show: true,
//                     label: {
//                         text: "Activity",
//                         position: 'outer-middle'

//                     }

//                 },

//                 x:{
//                     type:'timeseries'


//                 }

//             }
//         });
//     });

// };

