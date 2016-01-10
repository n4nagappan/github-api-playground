var editor;
$(document).ready(function(){
    $('#urlbox').keypress(function(e){
        if(e.keyCode==13)
        sendRequest();
    });
    var myTextArea = document.getElementById('output');
    editor = CodeMirror.fromTextArea(myTextArea, {
        lineNumbers: true
    });
});

function sendRequest(){
    var url = $('#urlbox').val();
    console.log(url);
    $.get('/exec?url=' + url , function(data){
        var data = JSON.parse(data);
        editor.setValue(JSON.stringify(data, null, 2));
        data.forEach(function(i){
            console.log(i);
        });
    });
}
