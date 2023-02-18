
document.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    searchimg();
  }
});

async function searchimg() {
  let keyword = inputuser.value
  let currentPage = 1


  const data = await fetch(`https://api.unsplash.com/search/photos?page=${currentPage}&query=${keyword}&&client_id=Jh7_ryvh9E94kbuqhLW5AJFGOsogxUhBvornydumpuM`)
  data.json().then(


    output => imagedetails(output)
  )

}
function imagedetails(output) {
  let searchresult = output

let img1 = searchresult.results[0].urls.regular
  
let img2 = searchresult.results[1].urls.regular

let img3 = searchresult.results[2].urls.regular

let img4 = searchresult.results[3].urls.regular

let img5 = searchresult.results[4].urls.regular

let img6 = searchresult.results[5].urls.regular

let img7 = searchresult.results[6].urls.regular

let img8 = searchresult.results[7].urls.regular

let img9 = searchresult.results[8].urls.regular

let name1 = searchresult.results[0].user.name
  
let name2 = searchresult.results[1].user.name
  
let name3 = searchresult.results[2].user.name
  
let name4 = searchresult.results[3].user.name
  
let name5 = searchresult.results[4].user.name
  
let name6 = searchresult.results[5].user.name
  
let name7 = searchresult.results[6].user.name
  
let name8 = searchresult.results[7].user.name
  
let name9 = searchresult.results[8].user.name


  let html_data = `
 

<div class="image-grid">

  <div class="image-container">
    <img src="${img1}" class="imageresult img-fluid" alt="Image 1">
    <h5 class="photographer" >Captured by: ${name1}</h5>
  </div>

  <div class="image-container">
    <img src="${img2}" class="imageresult img-fluid" alt="Image 2">
    <h5 class="photographer" >Captured by: ${name2}</h5>
  </div>

  <div class="image-container">
    <img src="${img3}" class="imageresult img-fluid" alt="Image 3">
    <h5 class="photographer" >Captured by: ${name3}</h5>
  </div>

  <div class="image-container">
  <img src="${img4}" class="imageresult img-fluid" alt="Image 3">
  <h5 class="photographer" >Captured by: ${name4}</h5>
  </div>

  <div class="image-container">
  <img src="${img5}" class="imageresult img-fluid" alt="Image 3">
   <h5 class="photographer" >Captured by: ${name5}</h5>
  </div>

  <div class="image-container">
  <img src="${img6}" class="imageresult img-fluid" alt="Image 3">
  <h5 class="photographer" >Captured by: ${name6}</h5>
  </div>

  <div class="image-container">
  <img src="${img7}" class="imageresult img-fluid" alt="Image 3">
  <h5 class="photographer" >Captured by: ${name7}</h5>
  </div>

  <div class="image-container">
  <img src="${img8}" class="imageresult img-fluid" alt="Image 3">
  <h5 class="photographer" >Captured by: ${name8}</h5>
  </div>

  <div class="image-container">
  <img src="${img9}" class="imageresult img-fluid" alt="Image 3">
  <h5 class="photographer" >Captured by: ${name9}</h5>
  </div>

</div>



`

  result.innerHTML = html_data


}
