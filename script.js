let botao = document.querySelector("button");

const linkApi = "https://maps.googleapis.com/maps/api/geocode/json?address=";

function extrair(dados){
  return dados.json();
}

function inserirInfo(json){
  let NomeLocal= json.results[0].formatted_address;
  let latitude = json.results[0].geometry.location.lat;
  let longitude = json.results[0].geometry.location.lng;

  let divResposta = document.querySelector("#resposta");
  divResposta.innerHTML = `<p>${NomeLocal}</p>`;
  divResposta.innerHTML += `<p>Latitude: ${latitude}</p>`;
  divResposta.innerHTML += `<p>Longitude: ${longitude}</p>`;

}

botao.onclick = () => {
  let endereco = document.querySelector("input").value;
  let linkCompleto = linkApi + endereco;

  fetch(linkCompleto).then(extrair).then(inserirInfo).catch((erro) => console.log(erro));
}

