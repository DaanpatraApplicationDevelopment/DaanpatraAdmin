import React from "react";
import MUIDataTable from "mui-datatables";
import "../user-profile/user-profile.css";
import img from "../user-profile/avatar.svg";
import { useState, useEffect } from "react";
import { getSubAdminDetails } from "../../config/ApiHandler";

function SubadminDetails() {
  const [getdata, setGetdata] = useState([]);

  useEffect(() => {
    getSubAdminDetails((response) => {
      let temp = [];
      if (response.length) {
        response.map((item, index) => {
          console.log(response);
          temp.push({
            id: index + 1,

            profile_pic: item.image,

            Name: item.first_name,

            last: item.last_name,

            contact: item.contact,

            date_of_enroll: item.date_joined,
          });
        });
      }
      setGetdata(temp);
    });
  }, []);

  const columns = [
    { name: "id", label: "S.no" },
    {
      name: "profile_pic",
      label: "Profile pic",
      options: {
        customBodyRender: (value) => {
          return <img style={{ width: 50, height: 50 }} src={img} alt={"s"} />;
        },
      },
    },

    { name: "First Name", label: "First Name" },
    { name: "Last Name", label: "Last Name" },
    { name: "email", label: "Username" },
    { name: "password", label: "Password" },
    { name: "contact", label: "Contact no" },
    { name: "Address", label: "Address" },
    { name: "City", label: "City" },
    { name: "State", label: "State" },
  ];

  const options = {
    filterType: "checkbox",
    responsive: "vertical",
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

export default SubadminDetails;
