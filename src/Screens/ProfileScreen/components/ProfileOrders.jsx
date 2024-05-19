import React from 'react'

function ProfileOrders() {
    const orders=[
        {
            number_id:"#3456_789",
            dates:"October 17,2024",
            status:"Delivered",
            Price:"$420.00",
        },
        {
            number_id:"#3456_789",
            dates:"October 17,2024",
            status:"Delivered",
            Price:"$420.00",
        },
        {
            number_id:"#3456_789",
            dates:"October 17,2024",
            status:"Delivered",
            Price:"$420.00",
        },
        {
            number_id:"#3456_789",
            dates:"October 17,2024",
            status:"Delivered",
            Price:"$420.00",
        },
        {
            number_id:"#3456_789",
            dates:"October 17,2024",
            status:"Delivered",
            Price:"$420.00",
        },
        {
            number_id:"#3456_789",
            dates:"October 17,2024",
            status:"Delivered",
            Price:"$420.00",
        },
        {
            number_id:"#3456_789",
            dates:"October 17,2024",
            status:"Delivered",
            Price:"$420.00",
        },
        {
            number_id:"#3456_789",
            dates:"October 17,2024",
            status:"Delivered",
            Price:"$420.00",
        }
    ]
  return (
    <div className='flex flex-1 flex-col gap-10'>
        <h1 className='text-black font-bold text-xl'>Orders History</h1>
        <table className='w-full text-justify ' >
            <thead className='border-b-2 border-slate-300 text-gray-700 font-mono'>
                <th >Number_ID</th>
            
                <th>Dates</th>
          
                <th>Status</th>
           
                <th>Price</th>
            </thead>
            <tbody >
                {
                    orders.map((item,index)=>{
                        return(
                            <tr className='border-b-2  border-slate-300  text-gray-700 '>
                                <td className='p-4 ' >
                                    {item.number_id}
                                </td>
                                <td>
                                    {item.dates}
                                </td>
                                <td>
                                    {item.status}
                                </td>
                                <td>
                                    {item.Price}
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default ProfileOrders