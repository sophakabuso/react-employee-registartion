import React,{useState} from "react";

const AddEmployee = ()=> {
    const [employee, setEmployee] = useState({
        name:'',surname:'',email:'',phone:'',imge:'',position:'',id:'',
    });
    return(
        <h1>Please Enter employee Details</h1>
    )
}

export default AddEmployee;