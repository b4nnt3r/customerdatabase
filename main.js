



let main = document.querySelector(".main");
let doc1 = document.createElement("header");
let title = document.createTextNode("Internal Company Directory");

doc1.appendChild(title);
main.appendChild(doc1);

customers.results.forEach(function(data) {
  const template = `
  <article>
    <div class="customer">
      <div class="image">
      <img src="${data.picture.large}">
      </div>
      <div class="name">
      <h3>${data.name.first}
      ${data.name.last}</h3>
      </div>
      <div class="email">
      ${data.email}
      </div>
      <div class="address">
      ${data.location.street}<br>
      ${data.location.city}
      ${data.location.state}
      ${data.location.postcode}
      </div>
      <div class="phone">
      ${data.phone}
      </div>
      <div class="ssn">
      ${data.id.value}
      </div>
    </div>
  </article>
`;
  console.log(data);

  document.querySelector('.main').innerHTML += template


});
