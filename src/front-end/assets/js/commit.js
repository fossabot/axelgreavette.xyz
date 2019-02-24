var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var sha = JSON.parse(this.response)[0].sha.substring(0, 7)
    var date = new Date(JSON.parse(this.response)[0].commit.author.date).toLocaleDateString("en-CA", options)
    document.getElementById("latest-commit-sha").innerHTML = '<strong><a href=https://github.com/axelgreavette/axelgreavette.xyz/commit/' + sha + '>' + sha + '</a></strong>'
    document.getElementById("latest-commit-date").innerHTML = '<strong>' + date + '</strong>'
  }  
}
xhttp.open("GET", "https://api.github.com/repos/axelgreavette/axelgreavette.xyz/commits", true)
xhttp.send()
