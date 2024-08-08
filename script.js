var arr = [
  {
    Name: "petals of roses ",
    Image:
      "https://images.unsplash.com/photo-1550593854-87edb352e3be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvc2VzfGVufDB8fDB8fHww",
  },
  {
    Name: "apple of roses ",
    Image:
      "https://images.unsplash.com/photo-1550593854-87edb352e3be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvc2VzfGVufDB8fDB8fHww",
  },
  {
    Name: "banana of roses ",
    Image:
      "https://images.unsplash.com/photo-1550593854-87edb352e3be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvc2VzfGVufDB8fDB8fHww",
  },
  {
    Name: "alsa of roses ",
    Image:
      "https://images.unsplash.com/photo-1550593854-87edb352e3be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvc2VzfGVufDB8fDB8fHww",
  },
  {
    Name: "mango of roses ",
    Image:
      "https://images.unsplash.com/photo-1550593854-87edb352e3be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJvc2VzfGVufDB8fDB8fHww",
  },
];


function showtheCards(){
    var clutter='';
arr.forEach(function(obj){
    clutter +=`<div class="box">
    <img class="cursor-pointer" src="${obj.Image}" alt="image">
    <div class="caption">${obj.Name} </div>
</div>`;
    

})
// console.log(clutter);
document.querySelector('.container').innerHTML=clutter;


}

function handle_search_functionality(){

  var input = document.querySelector("#searchinput");
 input.addEventListener("focus",function(){
    document.querySelector(".overlay").style.display="block";
  })
 input.addEventListener("blur",function(){
    document.querySelector(".overlay").style.display="none";
  })

  input.addEventListener("input",function(){
    var clutter="";
    const filteredArray=arr.filter(obj => obj.Name.toLowerCase().startsWith(input.value));
    filteredArray.forEach(function(obj){
      clutter+=`<div class="res flex px-8 py-3">
      <i class="ri-search-line font-semibold mr-5"></i>
      <h3 class="font-semibold">${obj.Name}</h3>
  </div>`

    })
    document.querySelector(".searchdata").style.display="block";
    document.querySelector(".searchdata").innerHTML=clutter;

    
  })
}




handle_search_functionality();
showtheCards();