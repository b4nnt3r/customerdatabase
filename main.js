customers.results.forEach(function(data) {
  const template = `
  <div class="container">
  <img src="${data.picture.large}">
  <h3>${data.name.first}
  ${data.name.last}</h3>
  ${data.email}
  <div class="address">
  ${data.location.street}
  ${data.location.city}
  ${data.location.state}
  ${data.location.postcode}
  </div>
  ${data.phone}
  ${data.id.value}
  </div>
`;
  console.log(data);

  document.querySelector('.main').innerHTML += template


});
