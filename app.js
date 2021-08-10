 // ton tableau
 var myArray = [];
 // ton container
 var main = document.getElementById('main');  
 var imgUrl = 'https://www.studentcorner.fr/media/cache/blogPetit/blog/logo-';      
 const getData = HttpRequest("GET", "https://www.studentcorner.fr/api/d88DhaVji9GJA6n4dBcW6P78Z6m4Pb/articles?page=", null, 1).then(res => {
     console.log(res);
     res['hydra:member'].forEach(element => {
         myArray.push(element);
     });
     console.log(myArray);

     generateCards(myArray, buttonClick, main, imgUrl, 1, 'VOIR', 'id', 'title', 'description', true,  true, true, true);
 })
 function buttonClick(id){
    alert('click avec l\'id '+id);
 }

