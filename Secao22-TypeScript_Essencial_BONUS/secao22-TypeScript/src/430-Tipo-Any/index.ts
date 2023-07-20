// any -> qualquer tipo (não é ideal) -> usar em último caso

// por padrão já seria any -> mas para compilar sem erro precisa informar o tipo any
function showMessage(msg: any) {
  return msg;
}

showMessage('sla');
showMessage(10);

export default 1;
