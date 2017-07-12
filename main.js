

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
      ${data.email}
      </div>
      <div class="address">
      ${data.location.street}
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
