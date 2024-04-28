import { useState } from "react"
function Form({ addPayment}){

const[formContent, setFormContent]= useState({
    date: "",
    description: "",
    category: "",
    amount: ""
})

function onSubmit(event){
    event.preventDefault()
    addPayment(formContent)
    setFormContent({
        date: "",
        description: "",
        category: "",
        amount: ""
      });
}

function inputForm(event){
    const { name, value } = event.target;
        setFormContent(prevFormContent => ({
            ...prevFormContent,
            [name]: value
        }));
}

    return(
        <>
        <form onSubmit={onSubmit}>
            <div className="row p-3 bg-light mx-auto">
                <div className="col-3 d-flex align-items">
                <input className="form-control" onChange={inputForm} type="date" name="date" value={formContent.date}  placeholder="date"/>
                <label className="me-2">Date:</label>
                </div>
                <div className="col-3 ">
                <input className="form-control" onChange={inputForm} type="text" name="description" value={formContent.description} placeholder="describe here" />
                </div>
                <div className="col-3 ">
                <input className="form-control" onChange={inputForm} type="text" name="category" value={formContent.category} placeholder="category here" />
                </div>
                <div className="col-3 ">
                <input className="form-control" onChange={inputForm} type="number" name="amount" value={formContent.amount} placeholder="amount here" />
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