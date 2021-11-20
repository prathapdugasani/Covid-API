let searchInput = document.getElementById('search');
let templete = document.getElementById('templete');
searchInput.addEventListener('keyup',e =>{
    if(e.key==='Enter'){
        let searchText = e.target.value;
        searchCovid(searchText);
    }
})


async function searchCovid(searchValue){
    let URL = 'https://api.covid19api.com/country';
    let DATA = await window.fetch(`${URL}/${searchValue}`);
    let JSON = await DATA.json();
    console.log(JSON);
    let updated = JSON.length-1
    let {Deaths,Country,Confirmed,Active,Province,Recovered,Lat,Lon} = JSON[updated];
   

templete.innerHTML =` 
<main class="main2">
<div class="sec1">
 <div class="country">
   <h1 class="name"> ${Country}</h1>
   <p class="pera"> COVID - 19 Tracker of ${Country}. Minstry of Health & Family Welfare.</p>
 </div>
<div class="sub">
   <h1 class="userName1">+${Confirmed}</h1>
   <p class="userName1">New Cases</p>
</div>
<div class="sub">
   <h1 class="userName2">+${Deaths}</h1 >
   <p class="userName2">Deaths</p>
</div>
 </div>
</div>
   <div class="sec2">
       
           <div class="line11">
               <h1 class="line1"> +${Confirmed}</h1>
               <p>Total cases</p>
           </div>
           <div class="line11">
               <h1 class="line1"> +${Deaths}</h1>
               <p>Deaths</p>
           </div>
           <div class="line11">
               <h1 class="line1"> ${Active}</h1>
               <P>Active</P>
           </div>
       
   </div>
   <div class="sec3">
       
           <div class="line12">
               <h1 class="line2">${Lat}&${Lon}</h1>
               <p>Lat & Lon</p>
           </div>
           <div class="line12">
               <h1 class="line2">${Recovered}</h1>
               <p>Recovered</p>
           </div>
           <div class="line12">
               <h1 class="line2">+${Deaths}</h1>
               <p>Deaths</p>
           </div>
       
   </div>
</main>

`
}