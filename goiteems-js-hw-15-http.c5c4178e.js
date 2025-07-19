let e;const t=document.getElementById("search"),n=document.getElementById("country-list");t.addEventListener("input",()=>{clearTimeout(e);let u=t.value.trim();if(!u)return n.innerHTML="";e=setTimeout(()=>{fetch(`https://restcountries.com/v2/name/${u}`).then(e=>e.ok?e.json():Promise.reject()).then(e=>{if(n.innerHTML="",e.length>10)return PNotify.info({text:"Забагато результатів, уточніть запит."});if(e.length>1)n.innerHTML="<ul>"+e.map(e=>`<li>${e.name}</li>`).join("")+"</ul>";else{let t=e[0];n.innerHTML=`
            <h2>${t.name}</h2>
            <p>\u{421}\u{442}\u{43E}\u{43B}\u{438}\u{446}\u{44F}: ${t.capital}</p>
            <p>\u{41D}\u{430}\u{441}\u{435}\u{43B}\u{435}\u{43D}\u{43D}\u{44F}: ${t.population.toLocaleString()}</p>
            <p>\u{41C}\u{43E}\u{432}\u{438}: ${t.languages.map(e=>e.name).join(", ")}</p>
            <img src="${t.flag}" width="150" />
          `}}).catch(()=>PNotify.error({text:"Країну не знайдено."}))},500)});
//# sourceMappingURL=goiteems-js-hw-15-http.c5c4178e.js.map
