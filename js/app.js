// Declara a função principal `comprar`, que será responsável por gerenciar o processo de compra.
function comprar() {
  // Obtém o elemento do tipo de ingresso selecionado pelo usuário (ex.: "pista", "superior", "inferior").
  let tipo = document.getElementById("tipo-ingresso");

  // Obtém a quantidade de ingressos que o usuário deseja comprar e converte o valor para um número inteiro.
  let qtd = parseInt(document.getElementById("qtd").value);

  // Verifica o tipo de ingresso selecionado e chama a função correspondente para processar a compra.
  if (tipo.value == "pista") {
    // Chama a função `comprarPista` passando a quantidade desejada como argumento.
    comprarPista(qtd);
  } else if (tipo.value == "superior") {
    // Chama a função `comprarSuperior` passando a quantidade desejada como argumento.
    comprarSuperior(qtd);
  } else {
    // Chama a função `comprarInferior` passando a quantidade desejada como argumento.
    comprarInferior(qtd);
  }
}

// Função para realizar a compra de ingressos da categoria "Pista".
function comprarPista(qtd) {
  // Obtém a quantidade disponível de ingressos para a categoria "Pista" e converte para número inteiro.
  let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);

  // Verifica se a quantidade desejada é maior que a disponível.
  if (qtd > qtdPista) {
    // Exibe um alerta informando que não há ingressos suficientes.
    alert("Quantidade indisponível para 'Pista'");
  } else {
    // Atualiza a quantidade disponível de ingressos subtraindo a quantidade comprada.
    qtdPista = qtdPista - qtd;
    // Atualiza o texto no elemento HTML para refletir a nova quantidade disponível.
    document.getElementById("qtd-pista").textContent = qtdPista;
    // Exibe uma mensagem de sucesso para o usuário.
    alert("Compra realizada com sucesso!");
  }
}

// Função para realizar a compra de ingressos da categoria "Superior".
function comprarSuperior(qtd) {
  // Obtém a quantidade disponível de ingressos para a categoria "Superior" e converte para número inteiro.
  let qtdSuperior = parseInt(
    document.getElementById("qtd-superior").textContent
  );

  // Verifica se a quantidade desejada é maior que a disponível.
  if (qtd > qtdSuperior) {
    // Exibe um alerta informando que não há ingressos suficientes.
    alert("Quantidade indisponível para 'Superior'");
  } else {
    // Atualiza a quantidade disponível de ingressos subtraindo a quantidade comprada.
    qtdSuperior = qtdSuperior - qtd;
    // Atualiza o texto no elemento HTML para refletir a nova quantidade disponível.
    document.getElementById("qtd-superior").textContent = qtdSuperior;
    // Exibe uma mensagem de sucesso para o usuário.
    alert("Compra realizada com sucesso!");
  }
}

// Função para realizar a compra de ingressos da categoria "Inferior".
function comprarInferior(qtd) {
  // Obtém a quantidade disponível de ingressos para a categoria "Inferior" e converte para número inteiro.
  let qtdInferior = parseInt(
    document.getElementById("qtd-inferior").textContent
  );

  // Verifica se a quantidade desejada é maior que a disponível.
  if (qtd > qtdInferior) {
    // Exibe um alerta informando que não há ingressos suficientes.
    alert("Quantidade indisponível para 'Inferior'");
  } else {
    // Atualiza a quantidade disponível de ingressos subtraindo a quantidade comprada.
    qtdInferior = qtdInferior - qtd;
    // Atualiza o texto no elemento HTML para refletir a nova quantidade disponível.
    document.getElementById("qtd-inferior").textContent = qtdInferior;
    // Exibe uma mensagem de sucesso para o usuário.
    alert("Compra realizada com sucesso!");
  }
}
