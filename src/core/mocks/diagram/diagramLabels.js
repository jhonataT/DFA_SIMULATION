export const DiagramEventLabels = [
  { id: 'B', label: 'RETIRAR CARTÃO', type: 'event' },
  { id: 'C', label: 'INSERIR CARTÃO', type: 'event' },
  { id: 'V', label: 'VOLTAR PARA TELA ANTERIOR', type: 'event' },
  { id: 'D', label: 'SACAR DINHEITO DISPONÍVEL', type: 'event' },
  { id: 'E', label: 'EFETUAR PAGAMENTO', type: 'event' },
  { id: 'F', label: 'EFETUAR PAGAMENTO PARCIAL', type: 'event' },
  { id: 'G', label: 'EFETUAR PAGAMENTO TOTAL', type: 'event' },
  { id: 'H', label: 'VERIFICAR SALDO', type: 'event' },
  { id: 'J', label: 'SOLICITAR EMPRÉSTIMO', type: 'event' }
]

export const DiagramStateLabels = [
  { id: 'Q0', label: 'ESTADO INICIAL / FINAL', type: 'state' },
  { id: 'Q1', label: 'CARTÃO INSERIDO', type: 'state' },
  { id: 'Q2', label: 'RETIRADA DE SALDO (SACAR)', type: 'state' },
  { id: 'Q3', label: 'VERIFICANDO SALDO', type: 'state' },
  { id: 'Q4', label: 'EMPRÉSTIMO', type: 'state' },
  { id: 'Q5', label: 'OPÇÕES DE PAGAMENTO', type: 'state' },
  { id: 'Q6', label: 'EFETUANDO PAGAMENTO PARCIAL', type: 'state' },
  { id: 'Q7', label: 'EFETUANDO PAGAMENTO TOTAL', type: 'state' },
]