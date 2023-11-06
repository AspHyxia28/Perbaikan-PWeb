var url = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

var req = new Request(url);
fetch(req)
  .then((response) => response.json())
  .then((data) => {
    let output = "";
    console.log(data);
    data.results.forEach((post) => {
      output += `
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div  
                  class="h2 font-weight-bold text-primary text-uppercase mb-1"
                >
                ${post.name}
                </div>
                <button type='button' onclick="alert('${post.url}')">Details</button>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    });
    document.getElementById("output").innerHTML = output;
  });