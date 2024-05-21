import React from "react";
import Chair from "../../assets/Chair.svg";
import Star from "../../assets/Star Fill.svg";

function ProductScreen() {
  const path = ["Home", "Shop", "Living Room", "Product"];
  const offerTime=[
    {
      duration:"02",
      unit:"Days"
    },
    {
        duration:"12",
        unit:"Hours"
      },
      {
        duration:"45",
        unit:"Minutes"
      },
      {
        duration:"05",
        unit:"Seconds"
      },
  ]
  return (
    <div className="flex flex-1 w-full p-10 overflow-x-auto flex-col gap-5 ">
      <div className="flex gap-2 text-[14px] font-medium flex-row my-5">
        {path.map((data, index) => {
          if (path.length - 1 == index) {
            return <p className="text-[#121212]">{data}</p>;
          } else {
            return (
              <div className="flex flex-row gap-2 text-[#605F5F] ">
                <p>{data}</p>
                <p>{">"}</p>
              </div>
            );
          }
        })}
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row gap-20 flex-1 mb-[20px]">
           {/* Left Part  */}

          <div className="relative flex w-[548px] flex-col justify-center bg-[#F3F5F7] items-center">
            <div className="self-start absolute top-5 left-5">
              <div className="flex flex-col gap-2">
                <p className="bg-[#FFFFFF] text-[16px] text-[#121212] font-bold rounded-[4px] px-[14px] py-[4px]">
                  New
                </p>
                <p className="bg-[#38CB89] text-[16px] text-[#FEFEFE] font-bold rounded-[4px] px-[14px] py-[4px]">
                  {"-" + "50%"}
                </p>
              </div>
            </div>
            <img src={Chair} className="w-[548px] h-[729px]"></img>
            <div className="flex gap-2 overflow-x-auto flex-row my-[10px]">
                {
                    [0,0,0].map((data,index)=>{
                        return(
                            <img key={index} src={Chair} className="w-[167px] aspect-square"/>
                        )
                    })
                }
            </div>
          </div>
          {/* Right Part  */}
          <div className="flex flex-col gap-5">
            <div className="flex flex-row gap-4 items-start">
              <div className="flex  flex-row gap-2">
                {[0, 0, 0, 0, 0].map((data, index) => {
                  return (
                    <img
                      key={index}
                      src={Star}
                      className="w-[16px] aspect-square"
                    />
                  );
                })}
              </div>
              <p className="text-[#141718] font-normal text-[12px]">
                11 Reviews
              </p>
            </div>
            <p className="font-medium text-[40px] text-[#141718]">Tray Table</p>
            <p className="text-[16px] font-normal text-[#6C7275]">
              Buy one or buy a few and make every space where you sit more
              convenient. Light and easy to move around with removable tray top,
              handy for serving snacks.
            </p>
            <div className="flex items-center  font-semibold justify-start gap-3">
              <p className="text-[#121212] text-[28px]  ">{"$199.00"}</p>
              <p className="text-[#6C7275] text-[20px] line-through ">
                {"$400.00"}
              </p>
            </div>
            <div className="w-full h-[0.4px]  bg-[#E8ECEF] "></div>
            <div className="flex flex-col gap-5">
                <p className="text-[#343839] text-[16px] font-normal">Offer expires in:</p>
                 <div className="flex flex-row gap-5">
                    {
                        offerTime.map((data,index)=>{
                            return(
                                <TimeCard duration={data.duration} unit={data.unit} key={index}/>
                            )
                        })
                    }
                </div>
            </div>
            <div className="w-full h-[0.4px]  bg-[#E8ECEF] "></div>
            <div className="flex flex-col gap-3">
                <p className="text-[16px] font-semibold text-[#6C7275]">Measurements</p>
                <p className="text-[20px] font-normal text-[#000000]">17 1/2x20 5/8 "</p>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-[16px] font-semibold text-[#6C7275]">Choose Color {">"}</p>
                <p className="text-[20px] font-normal text-[#000000]">Black</p>
                <div className="flex flex-row justify-start gap-3">
                    {
                        [0,0,0,0].map((data,index)=>{
                            return(
                                <img key={index} src={Chair} className="w-[72px] aspect-square"/>
                            )
                        })
                    }
                </div>

            </div>
            <div className="flex flex-col gap-4">

            <div className="flex flex-row gap-4">
                <div className="bg-[#F5F5F5] w-[127px] h-[52px] flex flex-row items-center justify-between rounded-[8px] px-[16px] py-[12px]">
                    <p>{"-"}</p>
                    <p>{"1"}</p>
                    <p>{"+"}</p>
                </div>
                <div className="w-[357px] h-[52px] px-[40px] py-[10px] border-[1px] flex items-center justify-center rounded-[8px] border-black ">
                    <p>{"❤️ "}Whishlist</p>

                </div>
            </div>
            <div className="bg-black w-[508px] items-center justify-center rounded-lg flex ">
                    <p className="text-white font-medium text-[18px]  px-[40px] py-[10px]">Add to Cart</p>
            </div>
            </div>
         
                <div className="grid grid-cols-2  gap-y-5">
                    <p className="text-[#6C7275] text-[12px] font-normal">SKU</p>
                    <p className="text-[#141718] font-normal text-[12px] ">1117</p>
                    <p className="text-[#6C7275] text-[12px] font-normal">Category</p>
                    <p className="text-[#141718] font-normal text-[12px] ">Living Room , Bedroom</p>
                </div>
            

          </div>
        </div>
      </div>
    </div>
  );
}

const TimeCard=({duration,unit})=>{
    return(
        <div className="flex flex-col items-center justify-center gap-2">
            <div className="bg-[#F3F5F7] w-[60px] aspect-square flex items-center justify-center">
                <p className="text-[34px] font-medium text-[#141718]">{duration}</p>
            </div>
            <p className="text-[#6C7275] text-[12px] font-normal">{unit}</p>
        </div>
    )
}

export default ProductScreen;
