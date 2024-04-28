import { useState } from "react"
function Form({ addPayment}){

const[formContent, setFormContent]= useState({
    date: "",
    description: "",
    category: "",
    amount: ""
})

function handleSubmit(event){
    event.preventDefault()
    addPayment(formContent)
    setFormContent({
        date: "",
        description: "",
        category: "",
        amount: ""
      });
}

function handleChange(event){
    const { name, value } = event.target;
        setFormContent(prevFormContent => ({
            ...prevFormContent,
            [name]: value
        }));
}

    return(
        <>
        <form onSubmit={handleSubmit}>
            <div className="row p-1">
                <div className="col-3 ">
                <input className="form-control" onChange={handleChange} type="date" name="date" value={formContent.date}  placeholder="date"/>
                </div>
                <div className="col-3 ">
                <input className="form-control" onChange={handleChange} type="text" name="description" value={formContent.description} placeholder="describe here" />
                </div>
                <div className="col-3 ">
                <input className="form-control" onChange={handleChange} type="text" name="category" value={formContent.category} placeholder="category here" />
                </div>
                <div className="col-3 ">
                <input className="form-control" onChange={handleChange} type="text" name="amount" value={formContent.amount} placeholder="amount here" />
                </div>
                <div className="col-2 mx-auto p-2 ">
                    <button className="btn btn-success" type="submit" >Add payments</button>
                </div>
            </div>
        </form>
        </>
    )
}


export default Form