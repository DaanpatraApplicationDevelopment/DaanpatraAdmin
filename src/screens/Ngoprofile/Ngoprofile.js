import React from "react";
import MUIDataTable from "mui-datatables";







function Ngoprofile() {
    const columns = ["Name", "Company", "City", "State"];
  
    const data = [
      ["Joe James", "Test Corp", "Yonkers", "NY"],
      ["John Walsh", "Test Corp", "Hartford", "CT"],
      ["Bob Herm", "Test Corp", "Tampa", "FL"],
      ["James Houston", "Test Corp", "Dallas", "TX"],
    ];
  
    const options = {
      filterType: "checkbox",
    };
    return (
      <article>
        <MUIDataTable
          title={"NGO Profile"}
          data={data}
          columns={columns}
          options={options}
        />
      </article>
    );
  }

  export default Ngoprofile;
  