
// fetching data API
const loadData = async() =>{
 const url = `https://forbes400.onrender.com/api/forbes400?limit=${10}`;
 const res = await fetch(url);
 const data = await res.json();
 displayPerson(data); 
}

const displayPerson = (Billionaires)=>{
console.log(Billionaires)
const CardContainer = document.getElementById('card-container');


// display all Billionaire
Billionaires.forEach(Billionaire => {
    // console.log(Billionaire)
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('col');
    cardDiv.innerHTML =`
    <div class="col">
              <div class="card h-100">
                <img src="${Billionaire.person.squareImage ? Billionaire.person.squareImage :'no image available'}" class="card-img-top img-fluid" alt="...">
                <div class="card-body">
                  <h5 class="card-title">Person Name: ${Billionaire.personName}</h5>
                  <h5 class="card-title">Ranking: ${Billionaire.rank}</h5>
                  <h3 class="card-title">Net Archive Worth: ${Billionaire.archivedWorth}</h3>
                  <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <div id="btn-show-all" class="btn btn-primary">Show Details</div>
                  </div>
              </div>
            </div>

    `;
CardContainer.appendChild(cardDiv);
});
}
loadData(10);
