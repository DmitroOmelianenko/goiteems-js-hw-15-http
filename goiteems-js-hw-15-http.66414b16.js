let timeoutId,input=document.getElementById("search"),output=document.getElementById("country-list");input.addEventListener("input",()=>{clearTimeout(timeoutId);let t=input.value.trim();if(!t)return output.innerHTML="";timeoutId=setTimeout(()=>{fetch(`https://restcountries.com/v2/name/${t}`).then(t=>t.ok?t.json():Promise.reject()).then(t=>{if(output.innerHTML="",t.length>10)return PNotify.info({text:"Забагато результатів, уточніть запит."});if(t.length>1)output.innerHTML="<ul>"+t.map(t=>`<li>${t.name}</li>`).join("")+"</ul>";else{let e=t[0];output.innerHTML=`
            <h2>${e.name}</h2>
            <p>\u{421}\u{442}\u{43E}\u{43B}\u{438}\u{446}\u{44F}: ${e.capital}</p>
            <p>\u{41D}\u{430}\u{441}\u{435}\u{43B}\u{435}\u{43D}\u{43D}\u{44F}: ${e.population.toLocaleString()}</p>
            <p>\u{41C}\u{43E}\u{432}\u{438}: ${e.languages.map(t=>t.name).join(", ")}</p>
            <img src="${e.flag}" width="150" />
          `}}).catch(()=>PNotify.error({text:"Країну не знайдено."}))},500)});
//# sourceMappingURL=goiteems-js-hw-15-http.66414b16.js.map
