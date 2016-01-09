$(document).ready(function(){
    $.get('/starrers', function(data){
        //console.log(data);
        var data = JSON.parse(data);
        $('#output').val(JSON.stringify(data));
        data.forEach(function(i){
            console.log(i);
        });
    });
});
