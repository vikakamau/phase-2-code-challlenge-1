
import Division from "./Division"
import Input from "./input"
import { useState } from "react"
import Form from "./Form"

function Transaction(){
    const transactions=[
        {
            date: "13/01/2022",
            description: "Paycheck from vikoz motors",
            category: "income",
            amount: "$7000"
        },
        {
            date: "16/01/2022",
            description: "Dunken Burgers",
            category: "Food",
            amount: "$400"
        },
        {
            date: "17/01/2022",
            description: "pavilion hotel",
            category: "Accomodation",
            amount: "$2000"
        },
        {
            date: "19/01/2022",
            description: "Naivas kilimani mall",
            category: "Shopping",
            amount: "$200"
        },
        {
            date: "20/01/2022",
            description: "Lc Waikiki",
            category: "Shopping",
            amount: "$500"
        }
     ]
    const [payments, setPayments] = useState(transactions)
    const addPayment = (newPayment) => {
        setPayments([...payments, newPayment]);
    };

    
    return(
        <>
          <Input payments={payments} setPayments={setPayments} transactions={transactions}/>
          <Form  addPayment={addPayment}/>
        <table className="table table-secondary">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>

                </tr>
            </thead>
            <tbody>
                <Division spendings={payments}/>
            </tbody>
        </table>
        </>
    )
}


export default Transaction 