import React, { useState } from "react";
import Blog from "../../assets/Paste Image.svg";
import Blog1 from "../../assets/Blog1.jpeg";
import DownMark from "../../assets/Shape.svg";
function HomeScreen() {
  return (
    <div className="flex flex-1  flex-col items-center  ">
      <div className="h-full flex items-center justify-center relative">
        <img src={Blog} className="w-full "></img>
        <div className="absolute z-10 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-row gap-2 ">
            <p className=" text-[#605F5F] ">Home {`>`} </p>
            <p className="text-[#121212] font-semibold">Blog</p>
          </div>
          <p className="text-[#121212] font-bold text-2xl lg:text-5xl">
            Our Blog
          </p>
          <p className="text-[#121212] font-semibold text-sm">
            Home ideas and design inspiration
          </p>
        </div>
      </div>
      <div className="w-full items-center flex flex-row justify-around mt-10 px-10 my-5">
        <div className="flex flex-row font-semibold text-sm justify-start items-center gap-4">
          <a className="underline underline-offset-2">All Blog</a>
          <a className="text-[#807E7E]">Featured</a>
        </div>
        <div className="flex flex-row  flex-1 justify-end items-center gap-4">
          <p>sort by</p>
        </div>
      </div>
      <div className="my-10 w-full">

      <ContentCard/>
      </div>
    </div>
  );
}
function ContentCard(){
  const BlogData=[
    {
      pic:"https://s3-alpha-sig.figma.com/img/82f8/3dfd/5a12911fed9d5a4917e973ec9a95c79f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2Hxdto7~l0zl~jFadZWpb99ZRc8sNqjepN~VLdQPa3AffmZl0IRQPd~dHwnZDSTbZvw7lADQGXL9szEq358zQ8yTnnOzqMkpAsuMTQYojlU-ofYD8TLIxJTYus1tsru~R7l5EknMIpusiRHqZpB5XFOfOOfoG~Co8fro-IHiNkyvPNqjOmrs8WcXfoNUDa66WzW4xlgm9tw9XZcLx8sYAK9sFxjUBN2OqXfdjB6bWTd~6yaXnQqs7JGByAKI8Rrld40mpsH-ckYPODL5u3ubioksmxbdAyi0Ceu~56h6BKBXZYtoVE7-eLzwZZS0jHNejobQuR7gxItieX4DknYww__",
      title:"7 ways to decor your home like a professional",
      date:"October 16, 2023",
    },
    {
      pic:"https://s3-alpha-sig.figma.com/img/82f8/3dfd/5a12911fed9d5a4917e973ec9a95c79f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2Hxdto7~l0zl~jFadZWpb99ZRc8sNqjepN~VLdQPa3AffmZl0IRQPd~dHwnZDSTbZvw7lADQGXL9szEq358zQ8yTnnOzqMkpAsuMTQYojlU-ofYD8TLIxJTYus1tsru~R7l5EknMIpusiRHqZpB5XFOfOOfoG~Co8fro-IHiNkyvPNqjOmrs8WcXfoNUDa66WzW4xlgm9tw9XZcLx8sYAK9sFxjUBN2OqXfdjB6bWTd~6yaXnQqs7JGByAKI8Rrld40mpsH-ckYPODL5u3ubioksmxbdAyi0Ceu~56h6BKBXZYtoVE7-eLzwZZS0jHNejobQuR7gxItieX4DknYww__",
      title:"7 ways to decor your home like a professional",
      date:"October 16, 2023",
    },
    {
      pic:"https://s3-alpha-sig.figma.com/img/82f8/3dfd/5a12911fed9d5a4917e973ec9a95c79f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2Hxdto7~l0zl~jFadZWpb99ZRc8sNqjepN~VLdQPa3AffmZl0IRQPd~dHwnZDSTbZvw7lADQGXL9szEq358zQ8yTnnOzqMkpAsuMTQYojlU-ofYD8TLIxJTYus1tsru~R7l5EknMIpusiRHqZpB5XFOfOOfoG~Co8fro-IHiNkyvPNqjOmrs8WcXfoNUDa66WzW4xlgm9tw9XZcLx8sYAK9sFxjUBN2OqXfdjB6bWTd~6yaXnQqs7JGByAKI8Rrld40mpsH-ckYPODL5u3ubioksmxbdAyi0Ceu~56h6BKBXZYtoVE7-eLzwZZS0jHNejobQuR7gxItieX4DknYww__",
      title:"7 ways to decor your home like a professional",
      date:"October 16, 2023",
    },
    {
      pic:"https://s3-alpha-sig.figma.com/img/82f8/3dfd/5a12911fed9d5a4917e973ec9a95c79f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2Hxdto7~l0zl~jFadZWpb99ZRc8sNqjepN~VLdQPa3AffmZl0IRQPd~dHwnZDSTbZvw7lADQGXL9szEq358zQ8yTnnOzqMkpAsuMTQYojlU-ofYD8TLIxJTYus1tsru~R7l5EknMIpusiRHqZpB5XFOfOOfoG~Co8fro-IHiNkyvPNqjOmrs8WcXfoNUDa66WzW4xlgm9tw9XZcLx8sYAK9sFxjUBN2OqXfdjB6bWTd~6yaXnQqs7JGByAKI8Rrld40mpsH-ckYPODL5u3ubioksmxbdAyi0Ceu~56h6BKBXZYtoVE7-eLzwZZS0jHNejobQuR7gxItieX4DknYww__",
      title:"7 ways to decor your home like a professional",
      date:"October 16, 2023",
    },
    {
      pic:"https://s3-alpha-sig.figma.com/img/82f8/3dfd/5a12911fed9d5a4917e973ec9a95c79f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2Hxdto7~l0zl~jFadZWpb99ZRc8sNqjepN~VLdQPa3AffmZl0IRQPd~dHwnZDSTbZvw7lADQGXL9szEq358zQ8yTnnOzqMkpAsuMTQYojlU-ofYD8TLIxJTYus1tsru~R7l5EknMIpusiRHqZpB5XFOfOOfoG~Co8fro-IHiNkyvPNqjOmrs8WcXfoNUDa66WzW4xlgm9tw9XZcLx8sYAK9sFxjUBN2OqXfdjB6bWTd~6yaXnQqs7JGByAKI8Rrld40mpsH-ckYPODL5u3ubioksmxbdAyi0Ceu~56h6BKBXZYtoVE7-eLzwZZS0jHNejobQuR7gxItieX4DknYww__",
      title:"7 ways to decor your home like a professional",
      date:"October 16, 2023",
    },
    {
      pic:"https://s3-alpha-sig.figma.com/img/82f8/3dfd/5a12911fed9d5a4917e973ec9a95c79f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d2Hxdto7~l0zl~jFadZWpb99ZRc8sNqjepN~VLdQPa3AffmZl0IRQPd~dHwnZDSTbZvw7lADQGXL9szEq358zQ8yTnnOzqMkpAsuMTQYojlU-ofYD8TLIxJTYus1tsru~R7l5EknMIpusiRHqZpB5XFOfOOfoG~Co8fro-IHiNkyvPNqjOmrs8WcXfoNUDa66WzW4xlgm9tw9XZcLx8sYAK9sFxjUBN2OqXfdjB6bWTd~6yaXnQqs7JGByAKI8Rrld40mpsH-ckYPODL5u3ubioksmxbdAyi0Ceu~56h6BKBXZYtoVE7-eLzwZZS0jHNejobQuR7gxItieX4DknYww__",
      title:"7 ways to decor your home like a professional",
      date:"October 16, 2023",
    }
  ]
  return(
    <div className="grid grid-cols-2 lg:grid-cols-3 w-full  gap-y-5">
      {
        BlogData.map((data,index)=>{
          return(
            <Card key={index} data={data} />
          )
        })
      }
    </div>
  )
}
function Card({data}){
  return(
    <div className="flex flex-col gap-2 w-[250px] lg:w-[357px] mx-auto">
      <img src={Blog1} className="h-[325px]"></img>
      <p className="font-medium text-[20px] text-[#23262F] leading-[28px]">{data.title}</p>
      <p className="text-[#6C7275] text-[12px] ">{data.date}</p>
    </div>
  )
}
export default HomeScreen;
