import React from "react";
import pic1 from "../../public/pic1.png";
import Image from "next/image";
const Testimonials = () => {
  return (
    <div className="w-full h-[75vh] flex items-center justify-center bg-white">
      <div className="w-[80%] xl:h-[80%] rounded-[8px] bg-[#f7f5f9] flex flex-col gap-10 p-10 border-[1px] drop-shadow-md xl:mt-10 lg:mt-[20%] sm:mt-[30%] mt-[50%]">
        <div className="flex gap-3">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 40.0005C31.0277 40.0005 40 31.0282 40 20.0005C40 16.7252 39.1373 13.6637 37.7383 10.9341L36 7.99854L33 4.99854L29.0566 2.2583C26.3293 0.862223 23.2723 0.000490634 20 0.000490347C8.9723 0.000489383 2.71253e-06 8.97278 1.74846e-06 20.0005C7.84383e-07 31.0282 8.97229 40.0005 20 40.0005ZM26 26.9985C23.791 26.9985 22 25.2075 22 22.9985C22 22.9125 22.0204 22.8316 22.0254 22.7466C22.0114 22.6656 22 22.5826 22 22.4966C22 22.2216 22.0526 15.7084 26.5996 12.2974C26.8696 12.0954 27.185 11.9966 27.498 11.9966C27.954 11.9966 28.4042 12.2051 28.6992 12.5981C29.1962 13.2611 29.0624 14.2008 28.4004 14.6978C26.8924 15.8288 26.0568 17.5196 25.5898 19.0396C25.7268 19.0256 25.859 18.9985 26 18.9985C28.209 18.9985 30 20.7895 30 22.9985C30 25.2075 28.209 26.9985 26 26.9985ZM14 26.9985C11.791 26.9985 10 25.2075 10 22.9985C10 22.9125 10.0204 22.8316 10.0254 22.7466C10.0114 22.6656 10 22.5826 10 22.4966C10 22.2216 10.0526 15.7084 14.5996 12.2974C14.8696 12.0954 15.185 11.9966 15.498 11.9966C15.954 11.9966 16.4042 12.2051 16.6992 12.5981C17.1962 13.2611 17.0624 14.2008 16.4004 14.6978C14.8924 15.8288 14.0568 17.5195 13.5898 19.0396C13.7268 19.0256 13.859 18.9985 14 18.9985C16.209 18.9985 18 20.7895 18 22.9985C18 25.2075 16.209 26.9985 14 26.9985Z"
              fill="#8064A2"
            />
          </svg>
          <h1 className="text-[24px] font-[600]">Testimonials</h1>
        </div>
        <p className="text-justify xl:text-[18px] text-[#6D747A] ">
          In a fast growing and ever changing city like Bangalore, it sometimes
          becomes very difficult to find or connect with like minded people.
          Websites like hobbycue.com is a great service which helps me get in
          touch with, communicate, connect, and exchange ideas with other
          dancers. It also provides the extra benefit of finding products and
          services that I can avail, which I can be assured is going to be of
          great quality as it comes recommended by people of the hobbycue
          community. To have discussions, to get visibility, and to be able to
          safely explore various hobbies and activities in my city, all under
          one roof, is an excellent idea and I highly recommend it.
        </p>
        <div className="flex xl:items-center justify-between xl:flex-row flex-col-reverse">
          <div className="xl:w-[60%] h-[100px] rounded-[8px] bg-[#CCC1DA] flex items-center justify-around px-2">
            <div className="flex items-center justify-center relative">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute z-0 xl:w-[40px] xl:h-[40px] w-[25px] h-[25px]"
              >
                <circle cx="20" cy="20" r="20" fill="white" />
              </svg>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="z-10"
              >
                <path
                  d="M8 6.82001V17.18C8 17.97 8.87 18.45 9.54 18.02L17.68 12.84C18.3 12.45 18.3 11.55 17.68 11.15L9.54 5.98001C8.87 5.55001 8 6.03001 8 6.82001Z"
                  fill="#8064A2"
                />
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="6" cy="6" r="6" fill="#8064A2" />
              </svg>
              <svg
                width="468"
                height="2"
                viewBox="0 0 468 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="xl:w-[468px] w-[60%]"
              >
                <rect width="468" height="2" rx="1" fill="white" />
              </svg>
            </div>
            <Image src={pic1}></Image>
          </div>
          <div className=" xl:-[30%] h-[100px] flex items-center justify-start gap-5">
            <Image src={pic1}className="xl:w-[100px]"></Image>
            <div className="flex flex-col justify-around">
              <h1 className="xl:text-[18px] font-[600] text-[#8064A2] w-[100%]">
                Shubha Nagarajan
              </h1>
              <p className="text-[#0096C8] text-[14px] font-[400]">Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
