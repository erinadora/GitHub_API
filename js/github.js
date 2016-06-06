var apiKey = require('./../.env').apiKey;

  exports.getRepos = function(){
    var github = $('#username').val();
    $.get('https://api.github.com/users/' + github + '/repos?access_token=' + apiKey + '&per_page=500&sort=update').then(function(response){
      console.log(response);
      $('#output').append('<h2>' + response[0].owner.login + '</h2>');
      $('#output').append('<img src='+ response[0].owner.avatar_url+'>');
      $('#output').append('<h2>Repositories</h2>');
      for (var i = 0; i < response.length; i++) {
        $('#repos').append('<br><li><img id="arrow" src="./../images/arrow.png"> &nbsp' + response[i].full_name +  response[i].description + '<a class="view" target="_blank" href="' + response[i].html_url + '">&nbsp &nbsp View</a></li>');
      }
    }).fail(function(error){
  console.log(error.responseJSON.message);
  $('.repos').append('<h2>No repositories found</h2>');
});
};
