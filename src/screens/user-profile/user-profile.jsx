import React from "react";
import MUIDataTable from "mui-datatables";
import "../user-profile/user-profile.css";
import img from '../user-profile/avatar.svg';
import { useState, useEffect, } from "react";
import { getUserprofile } from "../../config/ApiHandler";




function UserProfile() {



  const [getdata, setGetdata] = useState([]);

  useEffect(() => {

    getUserprofile((response) => {
      let temp = [];
      if (response.length) {
        response.map((item, index) => {
          console.log(response)
          temp.push({

            id: index + 1,

            profile_pic: item.image,

            Name: item.first_name,

            last: item.last_name,

            contact: item.contact,

            date_of_enroll: item.date_joined,

          })
        })
      }
      setGetdata(temp);

    },

    )
  }, [])


  const columns = [

    { name: "id", label: "S.no" },
    {
      name: "profile_pic", label: "Profile pic",
      options: {
        customBodyRender: (value) => {
          return <img style={{ width: 50, height: 50 }} src={img} alt={"s"} />
        }
      }
    },

    { name: "Name", label: "user name" },
    { name: "last", label: "user name" },
    { name: "contact", label: "Contact no" },
    { name: "date_of_enroll", label: "date" },

  ];



  const options = {
    filterType: "checkbox",
    responsive: "vertical"
  };
  return (
    <article>
      <MUIDataTable
        title={"User Profile"}
        columns={columns}
        data={getdata}
        options={options}
      />
    </article>

  );

}

export default UserProfile;
