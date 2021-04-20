import React, { useState, useEffect, useLayoutEffect } from "react";
import MUIDataTable from "mui-datatables";
import { getDriverDetails } from "../../config/ApiHandler";

function DriverDetails() {
  const [getdata, setGetdata] = useState([]);

  useEffect(() => {
    getDriverDetails((response) => {
      console.log(response);
      let temp = [];
      if (response.length) {
        response.map((item) => {
          temp.push({
            id: item.id,
            name: item.full_name,
            Address: item.address,
            contact: item.contact_no,
            email: item.email,
          });
        });
      }
      setGetdata(temp);
    });
  }, []);

  const columns = [
    { name: "id", label: "S.No" },
    { name: "name", label: "Driver Name" },
    { name: "Address", label: "Driver Address" },
    { name: "contact", label: "Contact no" },
    { name: "email", label: "Email" },
  ];

  const options = {
    filterType: "checkbox",
  };
  return (
    <article>
      <MUIDataTable
        title={"Volunteer"}
        data={getdata}
        columns={columns}
        options={options}
      />
    </article>
  );
}

export default DriverDetails;
