var getRepos = require('./../js/github.js').getRepos;

$(document).ready(function(){
  $('#github').submit(function(event){
    event.preventDefault();
    var username = $('#username').val();
    getRepos();
    $('input#username').val('');
    $('#results').val('');
  });
});
