Modal = {
  open(){
    document.querySelector('.modal-overlay').classList.add('active')
  },
  close(){
    document.querySelector('.modal-overlay').classList.remove('active')
  }
}


const transactions = [
  {
    id: 1,
    description:'Luz',
    amount:-50085,
    date:'23/08/2023'
  },
  {
    id: 2,
    description:'Criação de Site',
    amount:500055,
    date:'23/08/2023'
  },
  {
    id: 3,
    description:'Internet',
    amount:-28013,
    date:'23/08/2023'
  },
  {
    id: 4,
    description:'Aplicativo',
    amount:380586,
    date:'23/08/2023'
  }
]

const Transaction = {
  incomes(){
    let income = 0;
    transactions.forEach(transaction => {
      if(transaction.amount > 0){
        income += transaction.amount;
      }
    })
    return income;
  }, 
  expenses(){  
    let expense = 0;
    transactions.forEach(transaction => {
      if(transaction.amount < 0){
        expense += transaction.amount;
      }
    })
    return expense;    
    return "Girosan"
  },
  total(){
    return Transaction.incomes() + Transaction.expenses();
  }
}

const DOM = {
  transactionsContainer: document.querySelector('#data-table tbody'),

  addTrasaction(transaction, index){
    console.log(transaction)
    const tr = document.createElement('tr')
    tr.innerHTML = DOM.innerHTMLTransaction(transaction)

    DOM.transactionsContainer.appendChild(tr)
  },

  innerHTMLTransaction(transaction){
    const CSSClass=transaction.amount > 0 ? "income" : "expense"

    const amount = Utils.formatCurrancy(transaction.amount)

    const html =  `
    <td class="description">${transaction.description}</td>
    <td class="${CSSClass}">${amount}</td>
    <td class="date">${transaction.date}</td>
    <td>
      <img src="assets/minus.svg" alt="Remover transação">
    </td>
    `

    return html
  }, 

  updateBalance(){
    document.getElementById('incomeDisplay').innerHTML= Utils.formatCurrancy(Transaction.incomes());
    document.getElementById('expenseDisplay').innerHTML=Utils.formatCurrancy(Transaction.expenses())
    document.getElementById('totalDisplay').innerHTML=Utils.formatCurrancy(Transaction.total())
  }
}

const Utils = {
  formatCurrancy(value){
    const signal = Number(value) < 0 ? "- " : ""

    value = String(value).replace(/\D/g, "")

    value = Number(value) / 100

    value = value.toLocaleString("pt-BR", {
      style:"currency",
      currency:"BRL"
    })


    return signal + value
  }
}

transactions.forEach(function(transaction){
  DOM.addTrasaction(transaction)
})

DOM.updateBalance()
