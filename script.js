const Modal = {
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
    amount:-50000,
    date:'23/08/2023'
  },
  {
    id: 2,
    description:'Criação de Site',
    amount:500000,
    date:'23/08/2023'
  },
  {
    id: 3,
    description:'Internet',
    amount:-28000,
    date:'23/08/2023'
  }
]

const Transaction = {
  incomes(){
    //somar entradas
  }, 
  expenses(){
    //somar as saidas
  },
  total(){
    ///entradas menos saidas
  }


}

