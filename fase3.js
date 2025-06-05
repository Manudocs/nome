// Função para adicionar nova UC via prompt e mostrar na lista
function adicionarUC() {
  const novaUC = prompt("Digite o nome da nova UC:");
  if (novaUC) {
    const listaUCs = document.getElementById("lista-ucs");
    const li = document.createElement("li");
    li.textContent = novaUC;
    // Criar botões de mover pra cima e pra baixo
    li.appendChild(criarBotao("↑", moverParaCima));
    li.appendChild(criarBotao("↓", moverParaBaixo));
    listaUCs.appendChild(li);
  }
}

// Cria botão com texto e evento de click
function criarBotao(texto, funcao) {
  const botao = document.createElement("button");
  botao.textContent = texto;
  botao.style.marginLeft = "5px";
  botao.onclick = function () {
    funcao(this.parentElement);
  };
  return botao;
}

// Move o item para cima na lista
function moverParaCima(item) {
  const prev = item.previousElementSibling;
  if (prev) {
    item.parentNode.insertBefore(item, prev);
  }
}

// Move o item para baixo na lista
function moverParaBaixo(item) {
  const next = item.nextElementSibling;
  if (next) {
    item.parentNode.insertBefore(next, item);
  }
}

// Valida CPF no formato ddd.ddd.ddd-dd
function validarCPF() {
  const cpfInput = document.getElementById("cpf");
  const cpf = cpfInput.value;
  const regex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
  if (!regex.test(cpf)) {
    alert("CPF inválido! Use o formato ddd.ddd.ddd-dd");
    cpfInput.focus();
  }
}

// Valida email básico
function validarEmail() {
  const emailInput = document.getElementById("email");
  const email = emailInput.value;
  const regex = /^\S+@\S+\.\S+$/;
  if (!regex.test(email)) {
    alert("Email inválido!");
    emailInput.focus();
  }
}

// Permite editar perfil pessoal no campo textarea
function habilitarEdicaoPerfil() {
  const textarea = document.getElementById("perfil-pessoal");
  textarea.removeAttribute("readonly");
}

// Evento para adicionar UC ao clicar no botão
document.getElementById("btn-adicionar-uc").onclick = adicionarUC;

// Eventos para validar CPF e email ao sair do campo
document.getElementById("cpf").addEventListener("blur", validarCPF);
document.getElementById("email").addEventListener("blur", validarEmail);

// Evento para habilitar edição no perfil pessoal
document.getElementById("btn-editar-perfil").onclick = habilitarEdicaoPerfil;
