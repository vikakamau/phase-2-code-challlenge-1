

function Input({payments, setPayments, transactions}){ 

    function handleSearch(event){
        const tag = event.target.value
    if(tag.length >0){
        const filter = payments.filter((payment)=>{
            const descriptions= payment.description.toLowerCase().includes(tag.toLowerCase())
            const categories= payment.category.toLowerCase().includes(tag.toLowerCase())
            const amounts= payment.amount.toLowerCase().includes(tag.toLowerCase())
            return descriptions || categories || amounts
        })
        if(filter.length >0){
            setPayments([...filter])
        }
        
    }
    else{
           setPayments([...transactions])
       }
    }
    return(
        <>
        <div className="m-2 p-3">
            <input onChange={handleSearch} className="form-control" type="text" placeholder="Enter the required payment"/>
        </div>
        </>
    )
}
export default Input