$(document).ready(function(){
  var newHomes = [
    {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
    {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
    {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
    {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
  ];

  var tBody = $('tbody');

  for(var i = 0; i < newHomes.length; i++){
    var homeObject = newHomes[i];
    tBody += "<tr class='home-row'></tr>";
    for (var key in homeObject) {
      var newRow;
      var homeKey = homeObject[key];
      newRow += "<td>" + homeKey + "</td>";
      $('.home-row').append(newRow);
    }
  }







});
