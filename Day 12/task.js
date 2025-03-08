const accounts = [
  {
      acno: 1000, ac_type: 'savings', balance: 45000, transaction: [
          { to: 1001, amount: 6000, msg: 'ebil', mode: 'gpay' },
          { to: 1002, amount: 2000, msg: 'emi', mode: 'neft' },
          { to: 1003, amount: 1000, msg: 'recharge', mode: 'phonepe' },
      ]
  },
  {
      acno: 1001, ac_type: 'current', balance: 30000, transaction: [
          { to: 1000, amount: 1000, msg: 'grossary', mode: 'gpay' },
          { to: 1001, amount: 5000, msg: 'ebil', mode: 'gpay' },
          { to: 1002, amount: 2000, msg: 'emi', mode: 'neft' },
          { to: 1003, amount: 1000, msg: 'recharge', mode: 'phonepe' },
      ]
  },
  {
      acno: 1002, ac_type: 'fixed', balance: 100000, transaction: [
          { to: 1000, amount: 5000, msg: 'ebil', mode: 'gpay' },
          { to: 1001, amount: 2000, msg: 'emi', mode: 'neft' },
          { to: 1003, amount: 1000, msg: 'recharge', mode: 'phonepe' },
      ]
  },
  {
      acno: 1003, ac_type: 'savings', balance: 30000, transaction: [
          { to: 1001, amount: 7000, msg: 'ebil', mode: 'gpay' },
          { to: 1002, amount: 2000, msg: 'emi', mode: 'neft' },
          { to: 1000, amount: 1000, msg: 'recharge', mode: 'phonepe' },
      ]
  }
];

// 1. Total number of accounts
console.log("Total number of accounts:", accounts.length);
console.log('-----------------------------------------------');


// 2. Account numbers with savings type
console.log("Accounts with savings type:", accounts.filter(acc => acc.ac_type === 'savings').map(acc => acc.acno));
console.log('-----------------------------------------------');

// 3. Balance of account number 1000
console.log("Balance of account 1000:", accounts.find(acc => acc.acno === 1000).balance);

// 4. All gpay transactions
console.log("All GPay transactions:", accounts.flatMap(acc => acc.transaction.filter(txn => txn.mode === 'gpay')));

// 5. Transactions where amount > 5000
console.log("Transactions with amount > 5000:", accounts.flatMap(acc => acc.transaction.filter(txn => txn.amount > 5000)));

// 6. Credit transactions of account 1002
console.log("Credit transactions of account 1002:", accounts.flatMap(acc => acc.transaction.filter(txn => txn.to === 1002)));

// 7. Debit transactions of account 1002
console.log("Debit transactions of account 1002:", accounts.find(acc => acc.acno === 1002).transaction);

// 8. Highest balance account details
console.log("Highest balance account:", accounts.reduce((max, acc) => acc.balance > max.balance ? acc : max));

// 9. Transaction history of account 1002
console.log("Transaction history of account 1002:", {
  credits: accounts.flatMap(acc => acc.transaction.filter(txn => txn.to === 1002)),
  debits: accounts.find(acc => acc.acno === 1002).transaction
});

// 10. Transaction history of account 1003
console.log("Transaction history of account 1003:", {
  credits: accounts.flatMap(acc => acc.transaction.filter(txn => txn.to === 1003)),
  debits: accounts.find(acc => acc.acno === 1003).transaction
});
