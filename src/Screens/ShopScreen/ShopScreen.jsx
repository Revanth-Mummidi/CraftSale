import React, { useState } from "react";
import Blog from "../../assets/shop.jpeg";
import DownMark from "../../assets/Shape.svg";
import Star from "../../assets/Star Fill.svg";
function ShopScreen() {
  return (
    <div className="flex flex-1  flex-col items-center  ">
      <div className="h-full flex items-center justify-center relative">
        <img src={Blog} className="w-[1120px] h-[500px] "></img>
        <div className="absolute z-10 flex flex-col items-center justify-center gap-6">
          <div className="flex flex-row gap-2 ">
            <p className=" text-[#605F5F] ">Home {`>`} </p>
            <p className="text-[#121212] font-semibold">Shop</p>
          </div>
          <p className="text-[#121212] font-bold text-2xl lg:text-5xl">
            Shop Page
          </p>
          <p className="text-[#121212] font-semibold text-sm">
            Let’s design the place you always imagined.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-row justify-around mt-10 px-10 my-5">
        <div className="flex flex-row font-semibold text-sm justify-start items-center gap-4">
          <SuggestionBlock
            Title={"CATEGORIES"}
            Suggestions={[
              "Living Room",
              "Bed Room",
              "Dinning Room",
              "Bath Room",
            ]}
          />
          <SuggestionBlock
            Title={"PRICE"}
            Suggestions={["ALL PRICE", "Cheaper", "Costly", "Average"]}
          />
        </div>
        <div className="flex flex-row  flex-1 justify-end items-center gap-4">
          <p>sort by</p>
        </div>
      </div>
      <div className="my-10 w-full">
        <ContentCard />
      </div>
    </div>
  );
}

function SuggestionBlock({ Title, Suggestions }) {
  const [isExpand, SetExpand] = useState(false);
  return (
    <div className="flex flex-col justify-center items-start gap-2">
      <p className="font-semibold self-start text-[#6C7275] text-[16px]">
        {Title}
      </p>
      <div
        onClick={() => {
          SetExpand(!isExpand);
        }}
        className="border-[#6C7275] relative z-0  self-start border-[2px] w-[262px] py-[8px] px-[16px] flex justify-between rounded-[8px]"
      >
        <p>{Suggestions[0]}</p>
        <img src={DownMark} className={isExpand ? "rotate-180" : ""} />
        {isExpand ? (
          <div className=" absolute z-10 left-0 top-14 h-[150px] overflow-y-auto flex flex-col bg-white   gap-5 w-[262px] p-5">
            {Suggestions.map((data, index) => {
              return (
                <p className="text-[#6C7275] text-[16px] font-normal">{data}</p>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}

function ContentCard() {
  const ShopData = [
    {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
      {
        pic: "https://s3-alpha-sig.figma.com/img/ad39/442a/09e9f258591ca60c51fbb83b2fe3c83b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NHvzZyBbE5haRG9qFwojMTDMbMHq7nYk2CABGCiDm-aPMiI5UzIdHraldk53NWmI6eOBZHekk1KCOiu94sJq7DZxHciZRmXijHXvtBDIktbzG3YB0h7EtpVhrgjWtjcwuI2zccMyJsFdpG2aeMUI9ceuefNtI0vyXSc1YwsgRjXyqPz9km5C38hfHgerdmkBbjCmv0hZNKnuybCpLhXwHCfS7iD~rs-NBgVnw~Mn225jXfkammC4DA7n61MUnr31YkyisFCRGokxYF3m2wUzRgjG98OPHm4sQf3keujL9QQDnHKfNnvA1uLVGH6W9~RyUJduqc46MN3szh4fUcgiVw__",
        name:"Loveseat Sofa",
        before_price:"$400.00",
        after_price:"$199.00",
        discount:"50%"
      },
  ]
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 w-full gap-x-5 gap-y-5">
      {ShopData.map((data, index) => {
        return <Card key={index} data={data} />;
      })}
    </div>
  );
}
function Card({ data }) {
  return (
    <div className="flex flex-col gap-2 w-[262px] mx-auto">
    <div className="h-[349px] relative bg-[#F3F5F7] shadow-md items-center justify-center flex flex-col">
      <div className="self-start absolute top-5 left-5"> 
      <div className="flex flex-col gap-2">

        <p className="bg-[#FFFFFF] text-[16px] text-[#121212] font-bold rounded-[4px] px-[14px] py-[4px]">New</p>
        <p className="bg-[#38CB89] text-[16px] text-[#FEFEFE] font-bold rounded-[4px] px-[14px] py-[4px]">{"-"+data.discount}</p>
      </div>
      </div>
      <img src={data.pic} className="object-contain object-center"></img>
    </div>
      
      <div className="flex  flex-row gap-2">

        {
            [0,0,0,0,0].map((data,index)=>{
                return(
                    <img key={index} src={Star} className="w-[16px] aspect-square"/>
                )
            })
        }
        </div>
      
      <p className="font-medium text-[16px] text-[#141718] leading-[28px]">
        {data.name}
      </p>
      <div className="flex items-center font-semibold justify-start gap-3">

      <p className="text-[#121212] text-[14px] ">{data.after_price}</p>
      <p className="text-[#6C7275] text-[14px] line-through ">{data.before_price}</p>
      </div>
    </div>
  );
}

export default ShopScreen;
