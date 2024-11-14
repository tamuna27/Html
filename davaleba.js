var user = [
  
    { product:"body care",
      name:"Fragrance Mist" ,
      photo:"j.jpg",
      price:"20$",
      Type: "Fruity Fresh",
      Notes: "raspberry glisten, peach tea, pomelo drip Tip",
  },

 
]
var html = '';
var role;

  for (var i = 0; i < user.length; i++) {

    if(user[i].role ==1){
        role = 'ადმინისტრატორი';
    }else{
       role ="Beauty Catalog" ;
    }
    console.log(user[i])



 html+=  '<div class="col-md-3 mt-5">';
  html+=   '<div class="card" style="width: 18rem;">';
  html+=   '<img src="' + user[i].photo + '" class="card-img-top" alt="..." width=300 height=462  ';
  html+=   '<div class="card-body">'+user[i].price ;
  html+=   '<h5 class="card-text">'+user[i].name+'</h5>';
  html+=   '<p class="card-text">'+user[i].product+'</p>';
  html+=   '<p class="card-text">'+user[i].Notes+'</p>';
  html+=   '<p class="card-text">'+role+'</p>';
  html+=   '<a href="#" class="btn btn-primary"></a>'+user[i].Type;
  html+=   '</div>';
  html+=   '</div>';
  html +=  '</div>';
  
  console.log(html);
  }

  document.getElementById('test').innerHTML = html;
  