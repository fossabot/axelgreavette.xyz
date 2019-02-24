var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var sha = JSON.parse(this.response)[0].sha.substring(0, 7)
    document.getElementById("latest-commit").innerHTML = '<a href=https://github.com/axelgreavette/axelgreavette.xyz/commit/' + sha + '>' + sha + </a>'
  }  
}
xhttp.open("GET", "https://api.github.com/repos/axelgreavette/axelgreavette.xyz/commits", true)
xhttp.send()
