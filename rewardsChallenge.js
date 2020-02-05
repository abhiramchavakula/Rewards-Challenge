//calcualting transaction rewards

function calculateTransactionRewards(amount) {
  if (amount >= 50 && amount < 100) {
    return amount-50;
  } else if (amount > 100) {
      return (2*(amount-100) + 50 );
  }
  return 0;
}

class Transaction {
  constuctor(amount) {
    this.amount = amount;
    this.rewards = calculateTransactionRewards(amount);
    this.transactionDate = new Date();
  }
}

 class TransactionList {
   constuctor() {
     this.list = [];
   }
 }

    getSampleDataList() {
        var today = new Date();
        const sampleDate = today.setMonth(today.getMonth() - 3);
        let rewardsList = this.list.filter(trans => trans.transactionDate > sampleDate);
        return rewardsList.sort((a,b) => b.transactionDate - a.transactionDate);
    }

    getTransactions() {
        return this.list.sort((a,b) => b.transactionDate-a.transactionDate);
    }

    pushTransaction(amount) {
        const transaction = new Transaction(amount);
        this.list.push(transaction);
    }

    getAllRewards() {
        return this.list.length ? this.list.reduce((acc,key)=>key.rewards+acc, 0) : 0;
    }

    getRewardsPerMonth() {
        let last3MonthRewardsInDesc = [];
        for(let i=0; i<3; i++) {
            let rewardsList = this.list.filter(trans => trans.transactionDate.getMonth() == (new Date).getMonth() - i );
            RewardsInDesc[i] = rewardsList.reduce((acc,key)=>key.rewards+acc,0);
        }
        return RewardsInDesc;
    }
}

let myTransactionList = new TransactionList();
myTransactionList.pushTransaction(154);
myTransactionList.pushTransaction(54);
myTransactionList.pushTransaction(200);
myTransactionList.pushTransaction(20);
myTransactionList.pushTransaction(300);
let arr = myTransactionList.getTransactions();
