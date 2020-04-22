$.ajax({
    type: "POST",
    url: "https://covid19.mathdro.id/api",
    beforeSend: function() { 
        $('span.item span').text('loading ...');
     },
    success: function (r) {
        var confirmed = r.confirmed.value;
        var deaths = r.deaths.value;
        var recovered = r.recovered.value;
        var time = r.lastUpdate.split('T');
        var time_d = time[0];
        var time_h = time[1].split('.')[0];
        console.log(confirmed);
        $('.w_f').html(confirmed);
        $('.w_d').html(deaths);
        $('.w_r').html(recovered);
        $('.w_t').html('<span>اليوم : '+time_d+'</span><span>الساعة : '+time_h+'</span>');
        
    },
    error:function () { 
        console.log('error');
        
     },
});

$.ajax({
    type: "POST",
    url: "https://covid19.mathdro.id/api/countries/Algeria",
    beforeSend: function() { 
        $('span.item span').text('loading ...');
     },
    success: function (r) {
        var a_confirmed = r.confirmed.value;
        var a_deaths = r.deaths.value;
        var a_recovered = r.recovered.value;
        var time = r.lastUpdate.split('T');
        var time_da = time[0];
        var time_ha = time[1].split('.')[0];
        console.log(a_confirmed);
        $('.a_f').html(a_confirmed);
        $('.a_d').html(a_deaths);
        $('.a_r').html(a_recovered);
        $('.a_t').html('<span>اليوم : '+time_da+'</span><span>الساعة : '+time_ha+'</span>');

    }
});
/* Algeria all time */
$.ajax({
    url: "https://api.covid19api.com/dayone/country/Algeria",
    beforeSend: function() { 
        $('span.item span').text('loading ...');
     },
    success: function (r) {
var labels = r.map(function(e) {
return e.Confirmed;
});
var data = r.map(function(e) {
return e.Date.split('T')[0].replace('-',' ');
});
var Deaths = r.map(function(e) {
    return e.Deaths;
    });
    var Recovered = r.map(function(e) {
        return e.Recovered;
        }); 
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {            
        labels: data,
        datasets: [{
            label: 'الوفايات',
            
            backgroundColor: '#0e0e0e',
            borderColor: '#e91e63', order: 1,
            data: Deaths

        },
        {
            label: 'الشفاء',           order: 2,
            backgroundColor: '#0e0e0e',
            borderColor: '#ffc107',
            data: Recovered

        },
        {
            label: 'الحالات',
            backgroundColor: '#0e0e0e', order: 3,
            borderColor: '#03a9f4',
            data: labels
        },]   
    },
    options: {}
});   
// smaller 
var dtx = document.getElementById('Deaths').getContext('2d');
var rtx = document.getElementById('Recovered').getContext('2d');
var ntx = document.getElementById('Confirmed').getContext('2d');

var chart = new Chart(dtx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {            
        labels: data,
        datasets: [{
            label: 'الوفايات',
            
            backgroundColor: '#e91e63',
            data: Deaths

        },
      ]   
    },
    options: {}
});   
var chart = new Chart(rtx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {            
        labels: data,
        datasets: [
        {
            label: 'الشفاء',          
            backgroundColor: '#ffc107',
            data: Recovered

        },
]   
    },
    options: {}
}); 
var chart = new Chart(ntx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {            
        labels: data,
        datasets: [
        {
            label: 'الحالات',
            backgroundColor: '#03a9f4', 
            data: labels
        },]   
    },
    options: {}
});   


}
});
