import React,{useEffect,useState} from "react";
import MUIDataTable from "mui-datatables";
import { getContact } from "../../config/ApiHandler";








function Contactus() {

  const View  = () => {
  
  } ;  
 
  const [contact, setContact] = useState([])


  useEffect(() => {
    getContact((response) => {
      console.log(response)
      let temp = [];
      if(response.length){
        response.map((item)=>{
          temp.push({
            SL:item.id,
            first_name:item.first_name,
            last_name:item.last_name,
            email:item.email,
            message:item.message
          })
        })
      }
      setContact(temp);
    })
  }, [])

  const handleActionRender = () => {
    return (
      <button >View</button>
      
    )
  };

  const columns = [
    {name : "SL",lable : "Sl.no"},
    {name : "first_name",lable : "Fristname"},
    {name : "last_name",lable : "Lastname"},
    {name : "email",lable : "Email"},
    {name : "message",lable : "Message"}
  ];

 

  const options = {
    filterType: "checkbox",
    responsive: "vertical"
  };

  
  return (
    <article>
      <MUIDataTable
        title={"Contact Us"}
        data={contact}
        columns={columns}
        options={options}
      />
      
    </article>
  );
}

export default Contactus;

  
    
    
    



