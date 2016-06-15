var getRepos = require('./../js/github.js').getRepos;

$(document).ready(function(){
  $('#github').submit(function(event){
    $('#output,#repos').empty();
    event.preventDefault();
    var username = $('#username').val();
    getRepos(username);
    $('input#username').val('');
  });
});
