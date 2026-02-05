var weather = prompt (`
  Select Weather:
  1- winter
  2- summer
  3- autumn
  4- cloudy
  5- rainy
  6- spring
  `).toLowerCase();

if (weather === "winter") {
  document.writeln(`
    
     <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(127, 206, 226);

overflow: hidden;
">

    <div class="card" style="width: 25rem;
    color: rgb(67, 188, 244);">
      <img src="https://cdn.pixabay.com/animation/2023/11/09/12/48/12-48-54-742_512.gif" class="card-img-top"  alt="..." style="height:25rem;">
      <div class="card-body" >
        <h5 class="card-title">WINTER SEASON</h5>
        <p class="card-text">The winter season (typically December–March in the Northern Hemisphere) offers a rich variety of content themes focused on cozy living, festive celebrations, and outdoor adventure.</p>
      </div>
    </div>


  </div>
    
    `)
} else if (weather === "summer") {
  document.writeln(`
    
     <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(237, 201, 104) ;
overflow: hidden;
">

    <div class="card" style="width: 25rem;
    color: rgb(244, 167, 67);">
      <img src="https://media4.giphy.com/media/v1.Y2lkPTZjMDliOTUyYzdiMGF6bDJjZ3l3MTE0NWRtdWc2aWZkcTUwa3huZmdhM3BiMTZhMiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lMxgTrubpGu30jiOEe/giphy.gif" class="card-img-top" alt="..." style="height:25rem;>
      <div class="card-body" style="width: 30rem;
        ">
        <h5 class="card-title">SUMMER REASON</h5>
        <p class="card-text">Summer season content revolves around themes of warmth, long daylight hours, vacation, and outdoor activity. It covers a wide range of topics, from educational material for children to lifestyle, food, and travel content.</p>
       
      </div>
    </div>


  </div>
    
    `)
} else if (weather === "autumn") {
  document.writeln(`
 <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(233, 80, 4) ;
overflow: hidden;">

    <div class="card" style="width: 25rem;
    color: rgb(161, 46, 4);">
      <img src="https://media2.giphy.com/media/4TTqqym8oj0Q0/giphy.gif?w=144" class="card-img-top" alt="..." height="400rem>
      <div class="card-body">
        <h5 class="card-title">AUTUMN SEASON</h5>
        <p class="card-text">Autumn is a transitional season characterized by cooling temperatures, shorter days, and vibrant, changing foliage as trees shed leaves. Occurring between summer and winter, this period (September-December in the Northern Hemisphere) features.</p>
      </div>
    </div>
</div>`)
}else if (weather === "cloudy") {
  document.writeln(`
 <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(116, 125, 122)  ;
overflow: hidden;">

    <div class="card" style="width: 25rem;
    color: black;">
      <img src="https://i.pinimg.com/originals/72/19/e8/7219e89f474db55702ed3bd52e2c647b.gif" class="card-img-top" alt="..." height="400rem">
      <div class="card-body" >
        <h5 class="card-title">CLOUDY SEASON</h5>
        <p class="card-text">Moody, and rainy weather, often featuring thick gray clouds,, dramatic skies, and, specifically in gaming contexts, the "Cloudy Climb" adventure in Minecraft Dungeons.</p>
      </div>
    </div>
</div>`)
}else if (weather === "rainy") {
  document.writeln(

`
 <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(26, 26, 77) ;
overflow: hidden;">

    <div class="card" style="width: 25rem;
    color: rgb(2, 4, 70);">
      <img src="https://i.pinimg.com/originals/52/07/68/5207680e1eafd7233ab094b5f910e6af.gif" class="card-img-top" alt="..."height="400rem" >
      <div class="card-body">
        <h5 class="card-title">RAINY SEASON</h5>
        <p class="card-text">The rainy season, or monsoon (typically June–September in many regions), brings relief from summer heat with gray skies, refreshing petrichor, and lush green landscapes. It is a vital time for agriculture but requires caution due to slippery roads and potential floods.</p>
      </div>
    </div>
</div>`)
}else if (weather === "spring") {
  document.writeln(`
 <div class="d-flex align-items-center justify-content-center" style="
height: 100vh;
width: 100vw;
background-color: rgb(161, 15, 81) ;
overflow: hidden;">

    <div class="card" style="width: 25rem;
    color:rgb(210, 15, 83) ;">
      <img src="https://i.pinimg.com/originals/fa/79/13/fa791319a9a83aa38c158f306d156f44.gif" class="card-img-top" alt="..." height="400rem>
      <div class="card-body" ">
        <h5 class="card-title">SPRING SEASON</h5>
        <p class="card-text">Spring is a transitional season between winter and summer, characterized by warmer weather, longer days, and the renewal of nature. It is widely considered a season of growth, featuring blooming flowers, melting snow, and the birth of young animals. </p>
      </div>
    </div>
</div>`)
}
 else {
  console.log("CHOOSE FROM THE GIVEN OPTIONS ONLY!");
}