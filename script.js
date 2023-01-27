


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
 
  
  
  <div class="card" style="width: 80%; margin-left: 10%; margin-top: 10%;">
  <img src="${img1}" class="img-fluid float-auto "
      style="width: 100%; height: auto;">
  <div class="card-body">
      <p class="photographer text-center  text-white-50  "> Captured By : ${name1} </p>
  </div>
  </div>
  <div class="card" style="width: 80%; margin-left: 10%; margin-top: 10%;">
  <img src="${img2}" class="img-fluid float-auto "
      style="width: 100%; height: auto;">
  <div class="card-body">
      <p class="photographer text-center  text-white-50  "> Captured By : ${name2} </p>
  </div>
  </div>
  <div class="card" style="width: 80%; margin-left: 10%; margin-top: 10%;">
  <img src="${img3}" class="img-fluid float-auto "
      style="width: 100%; height: auto;">
  <div class="card-body">
      <p class="photographer text-center  text-white-50  "> Captured By : ${name3} </p>
  </div>
  </div>         
  <div class="card" style="width: 80%; margin-left: 10%; margin-top: 10%;">
  <img src="${img4}" class="img-fluid float-auto "
      style="width: 100%; height: auto;">
  <div class="card-body">
      <p class="photographer text-center  text-white-50  "> Captured By : ${name4} </p>
  </div>
  </div>
  <div class="card" style="width: 80%; margin-left: 10%; margin-top: 10%;">
  <img src="${img5}" class="img-fluid float-auto "
      style="width: 100%; height: auto;">
  <div class="card-body">
      <p class="photographer text-center  text-white-50  "> Captured By : ${name5} </p>
  </div>
  </div>
  <div class="card" style="width: 80%; margin-left: 10%; margin-top: 10%;">
  <img src="${img6}" class="img-fluid float-auto "
      style="width: 100%; height: auto;">
  <div class="card-body">
      <p class="photographer text-center  text-white-50  "> Captured By : ${name6} </p>
  </div>
  </div>
  <div class="card" style="width: 80%; margin-left: 10%;margin-top: 10%;">
  <img src="${img7}" class="img-fluid float-auto "
      style="width: 100%; height: auto;">
  <div class="card-body">
      <p class="photographer text-center  text-white-50  "> Captured By : ${name7} </p>
  </div>
  </div>
  <div class="card" style="width: 80%; margin-left: 10%;margin-top: 10%;">
  <img src="${img8}" class="img-fluid float-auto "
      style="width: 100%; height: auto;"
  <div class="card-body">
      <p class="photographer text-center  text-white-50  "> Captured By : ${name8} </p>
  </div>
  </div>
  <div class="card" style="width: 80%; margin-left: 10%; margin-top: 10%;">
  <img src="${img9}" class="img-fluid float-auto "
      style="width: 100%; height: auto;">
  <div class="card-body">
      <p class="photographer text-center  text-white-50  "> Captured By : ${name9} </p>
  </div>
  </div>


`

  result.innerHTML = html_data


}
