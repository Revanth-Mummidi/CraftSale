import React from "react";
import Furniture from "../../assets/Chair.svg";
import AddressIcon from "../../assets/store 01.png";
import CallIcon from "../../assets/call.png";
import MailIcon from "../../assets/mail.svg";
import MapComponent from "../../Components/MapComponent";
function ContactScreen() {
  const path = ["Home", "Contact Us"];
  const content =
    "We believe in sustainable decor. We’re passionate about life at home.";
  const subContent =
    "Our features timeless furniture, with natural fabrics, curved lines, plenty of mirrors and classic design, which can be incorporated into any decor project. The pieces enchant for their sobriety, to last for generations, faithful to the shapes of each period, with a touch of the present";
  return (
    <div className="flex flex-col ">
    <div className="flex text-[#121212] flex-1 min-h-[100vh] w-full p-10 overflow-x-auto flex-col gap-5 ">
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

      <p
        className="text-[54px] text-[
#141718] leading-[58px] font-medium"
      >
        {content}
      </p>
      <p
        className="text-[16px] text-[
#141718] leading-[26px] font-normal"
      >
        {subContent}
      </p>
      <div className="grid grid-cols-2 h-[413px]">
        <img
          src={
            "https://s3-alpha-sig.figma.com/img/9f9e/fb2e/4439d804a7b6bed916b72b3bda48939a?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ByRXbP0et~W-~RNzo2khmAu7tyvqW8Ae2XyUeDTbp~NGC2JfXi0nmDh~c-9vOqTPZys1bUoV-T3U~cbZM18VHKIkJR4whrJ464G3s8uYSPhpaYIKRABFNJRzDNn7PIxqNfoF1oHMjwyE8gEr3~nVLThaxQXnAsKrzYu2qsxtmIzYNJw35DoDdqOozOVzj8Ao-tbCAgvetgqYxd9oA-fV2t0KnhOCrrRwFi3019JIb4QD2zBg68q1DZG1juzZPQl6QE52NbEVw4rKQu-FtHJ1re6-7sOnk70JbTGJuy6C1vbeilMwzl26nci1GQ7UPfpFaYOxFADq~RCK1gzCA9IulQ__"
          }
          className="h-[413px] w-full"
        ></img>
        <div className="bg-[#F3F5F7] w-full h-[413px] gap-[44px] flex flex-col items-start px-[100px] justify-center">
          <p
            className="font-medium text-[
#121212]  text-[40px]"
          >
            About Us
          </p>
          <p
            className="font-normal text-[
#121212] leading-[26px] text-[16px]"
          >
            3legant is a gift & decorations store based in HCMC, Vietnam. Est
            since 2019. <br />
            Our customer service is always prepared to support you 24/7
          </p>
          <p className="text-black text-[16px] font-medium underline underline-offset-4">
            Shop Now
          </p>
        </div>
      </div>
      <ContactUs />
    </div>
     <div className="w-full bg-[#F3F5F7] px-[160px] py-[16px] grid grid-cols-4">
        

     </div>
     </div>
  );
}

function ContactUs() {
  return (
    <div className="flex flex-col gap-[25px]">
      <p className="font-medium text-[40px] text-center">Contact Us</p>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-x-4  ">
        <Card
          icon={AddressIcon}
          title={"ADDRESS"}
          subtitle={"234 Hai Trieu, Ho Chi Minh City, Viet Nam"}
        />
        <Card
          icon={CallIcon}
          title={"CONTACT US"}
          subtitle={"+91 9382920202"}
        />
        <Card
          icon={MailIcon}
          title={"EMAIL"}
          subtitle={"craftsale@gmail.com"}
        />
      </div>
      <div className="grid grid-cols-2 gap-x-2 w-full">
        <div className="flex flex-1 flex-col gap-4 items-start justify-start">
          <div className="flex flex-col w-full gap-2">

          <p className="text-[#6C7275] text-[12px] font-bold">FULL NAME</p>
          <input type="text" placeholder="Your Name" className="border border-[#CBCBCB] rounded-[6px] h-[40px] items-center px-[16px] w-full" />
          </div>
          <div className="flex flex-col w-full gap-2">

          <p className="text-[#6C7275] text-[12px] font-bold">EMAIL ADDRESS</p>
          <input type="text" placeholder="Your Email" className="border border-[#CBCBCB] rounded-[6px] h-[40px] items-center px-[16px] w-full" />
          </div>
          <div className="flex flex-col w-full gap-2">

          <p className="text-[#6C7275] text-[12px] font-bold">MESSAGE</p>
          <textarea
        rows={5} 
        cols={35}
        style={{borderWidth:1,borderColor:"#CBCBCB"}}
        placeholder={"Your Message"}
        className="border border-[#CBCBCB] rounded-[6px] h-[140px] text-wrap items-center px-[16px] py-2 w-full"
      />
                   </div>
                  <div className="w-[189px] h-[40px] flex items-center justify-center bg-[#141718] rounded-[8px]">
        <p className="text-[16px] text-white font-medium">Send Message</p>
      </div>
        </div>
        <div>
          <MapComponent/>
        </div>

      
      </div>
    </div>
  );
}

function Card({ icon, title, subtitle }) {
  return (
    <div className="bg-[#F3F5F7] flex flex-col gap-[16px] w-full items-center justify-center p-5 mx-auto">
      <img src={icon} className="w-[26.52px] aspect-square" />
      <p className="text-[#6C7275] text-[16px] font-bold">{title}</p>
      <p className="text-[#141718] text-[16px] font-semibold leading-[26px]">{subtitle}</p>
    </div>
  );
}
export default ContactScreen;
