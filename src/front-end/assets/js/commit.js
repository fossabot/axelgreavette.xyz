var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var res = JSON.parse(this.response)
    document.getElementById("latest-commit").innerHTML = '<a href="' + res[0].html_url + '">' + res[0].sha.substring(0, 7) + '</a>'
  }  
}
xhttp.open("GET", "https://api.github.com/repos/axelgreavette/axelgreavette.xyz/commits", true)
xhttp.send()
