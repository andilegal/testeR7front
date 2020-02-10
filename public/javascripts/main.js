// your code
let request = new XMLHttpRequest();

request.open("GET", "fazenda.json", true);

request.onload = function() {
  let usuarios = JSON.parse(this.response);

  usuarios.data.forEach(participante => {
    let pessoas = ` <ul>
          <li class="tolt">
            <img src="${participante.picture}" alt="">
            <div class="wrapper">
              <p class="nome">${participante.name}</p>
              <p class="descricao">${participante.description}</p>
              <span class="tooltiptext">
                <div class="aprovacao">
                  <p>Gostam</p>
                  <p>Não Gostaram</p>
                </div>
                <div class="porcentagem">
                    <p>30%</p>
                    <p>30% </p>
                </div>
              </span>
            </div>
          </li>
        </ul>`;
    let fazenda = document.querySelector(".fazenda");
    fazenda.insertAdjacentHTML("afterend", pessoas);
  });
};

request.send();
