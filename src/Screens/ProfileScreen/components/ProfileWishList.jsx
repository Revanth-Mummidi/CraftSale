import React from 'react'
import { IoClose } from "react-icons/io5";

function ProfileWishList() {
    const wishlist=[
        {
            product:{
                photo_url:"https://www.thesprucecrafts.com/thmb/kQZ-0iYS6qFVKgDtrIWjhA49mgU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/IMG-0316-1-5ae3e39b43a103003693c397-5ae906ceba61770036789da8-5b538a34c9e77c003703ade4.jpg",
                name:"Clock",
                color:"Black"
            },
            Price:"$420.00",
        },
        {
            product:{
                photo_url:"https://www.thesprucecrafts.com/thmb/kQZ-0iYS6qFVKgDtrIWjhA49mgU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/IMG-0316-1-5ae3e39b43a103003693c397-5ae906ceba61770036789da8-5b538a34c9e77c003703ade4.jpg",
                name:"Clock",
                color:"Black"
            },
            Price:"$420.00",
        },
        {
            product:{
                photo_url:"https://www.thesprucecrafts.com/thmb/kQZ-0iYS6qFVKgDtrIWjhA49mgU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/IMG-0316-1-5ae3e39b43a103003693c397-5ae906ceba61770036789da8-5b538a34c9e77c003703ade4.jpg",
                name:"Clock",
                color:"Black"
            },
            Price:"$420.00",
        },
        {
            product:{
                photo_url:"https://www.thesprucecrafts.com/thmb/kQZ-0iYS6qFVKgDtrIWjhA49mgU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/IMG-0316-1-5ae3e39b43a103003693c397-5ae906ceba61770036789da8-5b538a34c9e77c003703ade4.jpg",
                name:"Clock",
                color:"Black"
            },
            Price:"$420.00",
        },
        
    ]
  return (
    <div className='flex flex-1 flex-col gap-10'>
        <h1 className='text-black font-bold text-xl'>Orders History</h1>
        <table className='w-full text-justify ' >
            <thead className='border-b-2 border-slate-300 text-gray-700 font-mono'>
                <th >Product</th>
            
                <th>Price</th>
          
                <th>Action</th>
            </thead>
            <tbody >
                {
                    wishlist.map((item,index)=>{
                        return(
                            <tr className='border-b-2  border-slate-300  text-gray-700 '>
                                <td className='p-4 ' >
                                   <div className='flex flex-row  gap-2  items-center'>
                                        <IoClose className='text-lg' />
                                        <img src={item.product.photo_url} className='w-14'></img>
                                        <div className='flex flex-col'>
                                            <p className='font-bold text-lg'>{item.product.name}</p>
                                            <p className='text-sm font-semibold'>Color: {item.product.color}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.Price}
                                </td>
                                <td>
                                    <div className='bg-black p-2 rounded-2xl self-start w-40'>
                                        <p className='text-white font-semibold text-center'>Add to cart</p>
                                    </div>
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

export default ProfileWishList