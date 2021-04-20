import MUIDataTable from "mui-datatables"
import img from '../../../assets/images/avatar.svg';
import './Donationdetail.css'
import React, { useState, useEffect, useLayoutEffect } from "react";
import {getDonatedetails} from "../../../config/ApiHandler";



function Donationdetails() {

  const [getdata, setGetdata] = useState([]);
  

  useEffect(() => {

    getDonatedetails((response) => {
      console.log(response)
      let temp = [];
      if(response.length){
        response.map((item)=>{
          temp.push({

            id:item.id,

            name:item.first_name,

            contact:item.contact,

            Address:item.pickup_address,

            image:item.Product_Images,

            donation_date:item.pickup_date,
            
            quantity:item.quantity,

            details:item.product_description,

            Status:item.donation_status,

            Category:item.product_category,
          
          })
        }) 
      }
      setGetdata(temp);

    }, 
    
    )
  }, [])

  

  const columns = [
  { name: "id", label: "S. No" },
  { name: "name", label: "Donator Name" },
  { name: "contact", label: "Contact No" },
  { name: "Address", label: "Pickup Address" },
  {
    name: "image", label: "Item Image",
    options: {
      customBodyRender: (value) => {
        return <img style={{ width: 50, height: 50 }} src={img} alt={"ds"} />

      }
    }
  },
  { name: "donation_date", label: "Donation Date" },
  { name: "quantity", label: "item quantity" },
  { name: "Category", label: "Category" },
  { name: "details", label: "Description" },

  { name: "Status", label: "Donation status",

    options: {
      customBodyRender: (value) => {
        return <button className="btn" ></button>
      }

    }


  },

  ];
  



  const options = {
    filterType: "checkbox",
    responsive:"vertical"
  };
  return (
    <article>
      <MUIDataTable
        title={"Donation Details"}
        data={getdata}
        columns={columns}
        options={options}
      />
    </article>
  );
}

export default Donationdetails;
