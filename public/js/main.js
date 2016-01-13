var editor;
var endpoints = [
    "/users",
    "/users/:user",
    "/repos/:owner/:repo/stargazers",
    "/users/:username/starred",
    "/users/:user",
    "/repos/:owner/:repo/events",
    "/repos/:owner/:repo/collaborators"
];

$(document).ready(function(){

    //$('#urlbox').click(function(){
    //    var pos = $("#urlbox").getCursorPosition();
    //    var text = $("#urlbox").val();
    //    console.log("pos : " + pos);
    //    var start = text.
    //    createSelection( document.getElementById('urlbox') , pos , pos+4);
    //});

    $('#urlbox').keypress(function(e){
        if(e.keyCode==13){
            var url = $("#urlbox").val();
            sendRequest(url);
        }
    });
    


    var myTextArea = document.getElementById('output');
    editor = CodeMirror.fromTextArea(myTextArea, {
        lineNumbers: true
    });

    // populate endpoint divs
    for( var i = 0 ; i < endpoints.length ; ++i ){
        $('#left-panel').append('<div class="row fullwidth panel"> <a href="#" class="api">' + endpoints[i] + '</a></div>');
    }

    $(".api").click(function(e){
        var url = $(e.target).html();
        $('#urlbox').val(url);
    });

    $("#execute").click(function(e){
        var url = $("#urlbox").val();
        sendRequest(url);
    });
});

function sendRequest(url){
    console.log("url : " + url);
    $.get('/exec?url=' + url , function(data){
        var data = JSON.parse(data);
        editor.setValue(JSON.stringify(data, null, 2));
        data.forEach(function(i){
            console.log(i);
        });
    });
}

(function($) {
    $.fn.getCursorPosition = function() {
        var input = this.get(0);
        if (!input) return; // No (input) element found
        if ('selectionStart' in input) {
            // Standard-compliant browsers
            return input.selectionStart;
        } else if (document.selection) {
            // IE
            input.focus();
            var sel = document.selection.createRange();
            var selLen = document.selection.createRange().text.length;
            sel.moveStart('character', -input.value.length);
            return sel.text.length - selLen;
        }
    }
})(jQuery);

function createSelection(field, start, end) {
    if( field.createTextRange ) {
        var selRange = field.createTextRange();
        selRange.collapse(true);
        selRange.moveStart('character', start);
        selRange.moveEnd('character', end);
        selRange.select();
    } else if( field.setSelectionRange ) {
        field.setSelectionRange(start, end);
    } else if( field.selectionStart ) {
        field.selectionStart = start;
        field.selectionEnd = end;
    }
    field.focus();
}       

