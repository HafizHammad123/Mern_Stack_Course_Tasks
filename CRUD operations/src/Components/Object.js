import React from "react";

const  Object_Simple = () => 
{
  
   

    const [Data,Update_Array]=React.useState([])

      
    function update_object()
    {

    Update_Array
    (
        [
            ...Data,
            {name:'hammad',roll_no:3}
        ]
        );

        console.log(Data)

    }
    return<>
    <button onClick={update_object}>Update_Object</button>
    </>
}

export default Object_Simple;