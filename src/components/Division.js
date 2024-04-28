

function Division ({spendings}){

const divisons = spendings.map((payment, index)=>{
    return(
        <tr key={index+1}>
            <td>{payment.date}</td>
            <td>{payment.description}</td>
            <td>{payment.category}</td>
            <td>{payment.amount}</td>
        </tr>
    )
})
    return(
        <>
        {divisons}
        </>
    )
}


export default Division