function bodyLoad() {
    loadProduct('https://fakestoreapi.com');
}

function loadProduct(url) {
    document.getElementById("main").innerHTML = "";
    fetch(url)
        .then(function (res) {
            return res.json();
        })
        .then(function (products) {
            for (var product of products) {
                var card = document.createElement("div");
                card.className = "card p-2 m-2";
                card.style.width = "200px";
                card.innerHTML = `
           <img src=${product.image} class="card-img-top" height="100";
           <div class="card-header overflow-auto" style="height:80px"> 
                            <p>${product.title}</p> 
                        </div>
                        <div class="card-body">
                            <dl>
                            <dt>Price<dt>
                            <dd>${product.price}<dd>
                            <dt>Rating<dt>
                            <dd>${product.rating}</dd>
                            <dl>
                        </div>
       `
            }
        })

}