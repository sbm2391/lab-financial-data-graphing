
function bitcoinEvolution(id) {
    axios.get("https://api.coindesk.com/v1/bpi/historical/close.json")
    .then(response => {
        var date = Object.keys(response.data.bpi);
        var value = Object.values(response.data.bpi);
    })
    .catch(err => {
      console.error(err)
    })
   }
   

   document.getElementById("bitcoinButton").onclick = function(){
    bitcoinEvolution(1);
   }

