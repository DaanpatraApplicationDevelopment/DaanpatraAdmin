import React from "react";
import MUIDataTable from "mui-datatables";


function Topslidebar () {
    const columns = ["Name", "Submit"];
  
    const data = [
      [<input type="file"/> ,  <button>Submit</button>],
      [<input type="file"/> ,  <button>Submit</button>],
      [<input type="file"/> ,  <button>Submit</button>],
      [<input type="file"/> ,  <button>Submit</button>],
      [<input type="file"/> ,  <button>Submit</button>],
    ];
    
    const options = {
      filterType: "checkbox",
    };
    return (
      <article>
        <MUIDataTable
          title={"Top Slidebar"}
          data={data}
          columns={columns}
          options={options}
        />
      </article>
    );
  }

  export default   Topslidebar;
  