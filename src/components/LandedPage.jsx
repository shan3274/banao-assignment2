import React, { useState } from "react";
import peoples from "../../public/peoples.png";
import Image from "next/image";
const LandedPage = () => {
  const [activeBtn, setActiveBtn] = useState(true);
  return (
    <div className="flex items-start justify-around  xl:flex-row flex-col bg-[#F7F5F9] w-full h-[100vh] gap-[32px] pt-[100px] ">
      <div className="xl:w-[707px] w-[100%] lg:h-[578px] flex flex-col gap-10 xl:p-0  lg:px-[100px] px-[20px] lg:pt-[100px] pt-[200px] sm:pt-[200px]  ">
        <h1 className="sm:text-[36px] font[600] text-[25px]">
          Explore your <span className="text-[#0096C8]">hobby</span> or{" "}
          <span className="text-[#8064A2]">passion</span>
        </h1>
        <p className="text-[14px] w-[100%] text-justify">
          Sign-in to interact with a community of fellow hobbyists and an
          eco-system of experts, teachers, suppliers, classes, workshops, and
          places to practice, participate or perform. Your hobby may be about
          visual or performing arts, sports, games, gardening, model making,
          cooking, indoor or outdoor activities…
        </p>
        <p className="text-[14px]  w-[100%] text-justify">
          If you are an expert or a seller, you can Add your Listing and promote
          yourself, your students, products, services or events. Hop on your
          hobbyhorse and enjoy the ride.
        </p>
        <Image src={peoples} className="lg:block hidden" />
      </div>
      <div
        className={`xl:w-[410px] w-[100%] lg:h-[434px] flex flex-col gap-5 xl:p-0  lg:px-[100px] px-[20px] pb-10`}
      >
        <div className="flex items-center gap-5  lg:justify-start justify-center ">
          <button
            className={`text-[20px] text-gray-500  border-gray-500 ${
              activeBtn && "text-[#8064A2] border-[#8064A2] border-b-[1px]"
            }`}
            onClick={() => setActiveBtn(true)}
          >
            Sign In
          </button>
          <button
            className={`text-[20px] text-gray-500  border-gray-500 ${
              !activeBtn && "text-[#8064A2] border-[#8064A2] border-b-[1px]"
            }`}
            onClick={() => setActiveBtn(false)}
          >
            Join In
          </button>
        </div>
        <div className="flex flex-col gap-3 my-5">
          <div className="relative">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[20%] top-[30%]"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.44827 8.00005C3.44827 7.48043 3.53452 6.98218 3.68865 6.51493L0.992398 4.45605C0.466898 5.52293 0.170898 6.72518 0.170898 8.00005C0.170898 9.27393 0.466648 10.4753 0.991273 11.5416L3.68602 9.47868C3.5334 9.01355 3.44827 8.51718 3.44827 8.00005Z"
                fill="#FBBC05"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.18206 3.27275C9.31094 3.27275 10.3306 3.67275 11.1317 4.32725L13.4622 2C12.0421 0.763625 10.2213 0 8.18206 0C5.01606 0 2.29506 1.8105 0.992188 4.456L3.68831 6.51487C4.30956 4.62912 6.08044 3.27275 8.18206 3.27275Z"
                fill="#EA4335"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.18206 12.7274C6.08056 12.7274 4.30969 11.371 3.68844 9.48523L0.992188 11.5437C2.29506 14.1896 5.01606 16.0001 8.18206 16.0001C10.1361 16.0001 12.0017 15.3062 13.4018 14.0062L10.8426 12.0277C10.1204 12.4826 9.21106 12.7274 8.18206 12.7274Z"
                fill="#34A853"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.8293 8.00022C15.8293 7.52747 15.7564 7.01834 15.6471 6.54572H8.18213V9.63659H12.4791C12.2643 10.6905 11.6795 11.5006 10.8426 12.0278L13.4019 14.0063C14.8726 12.6413 15.8293 10.6078 15.8293 8.00022Z"
                fill="#4285F4"
              />
            </svg>
            <button className="w-[100%] h-[40px] rounded-[8px] flex items-center justify-center text-[14px] border-[1px] border-[#8064A2]">
              Continue with Google
            </button>
          </div>
          <div className="relative">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-[20%] top-[30%]"
            >
              <path
                d="M15.9 8C15.9 11.9027 13.0699 15.1445 9.35 15.785V10.4125H11.1141H11.1999L11.2129 10.3277L11.5676 8.01516L11.5853 7.9H11.4688H9.35V6.49931C9.35 6.19752 9.42409 5.91182 9.60483 5.70282C9.78323 5.49653 10.0785 5.35 10.5537 5.35H11.5625H11.6625V5.25V3.28125V3.19687L11.5793 3.18268L11.5625 3.28125L11.5793 3.18267L11.5793 3.18266L11.5791 3.18264L11.5785 3.18254L11.5764 3.18219L11.5683 3.18084L11.5372 3.17579C11.5101 3.17146 11.4705 3.16529 11.4203 3.1579C11.32 3.14313 11.1772 3.12345 11.0068 3.10379C10.6666 3.0645 10.2147 3.025 9.77172 3.025C8.83783 3.025 8.05466 3.30837 7.50485 3.8587C6.95494 4.40912 6.65 5.21504 6.65 6.2375V7.9H4.71875H4.61875V8V10.3125V10.4125H4.71875H6.65V15.785C2.93015 15.1445 0.1 11.9027 0.1 8C0.1 3.63695 3.63695 0.1 8 0.1C12.3631 0.1 15.9 3.63695 15.9 8Z"
                fill="#1877F2"
                stroke="white"
                stroke-width="0.2"
              />
              <path
                d="M6.75 10.2125H4.81875V8.1H6.75H6.85V8V6.2375C6.85 5.25496 7.14223 4.50463 7.64634 4.00005C8.15054 3.49538 8.87824 3.225 9.77172 3.225C10.204 3.225 10.6475 3.26363 10.9839 3.30246C11.1518 3.32186 11.2926 3.34125 11.3912 3.35577C11.4182 3.35975 11.4421 3.36336 11.4625 3.36651V5.15H10.5537C10.0351 5.15 9.67856 5.31179 9.45354 5.572C9.23087 5.82949 9.15 6.16845 9.15 6.49931V8V8.1H9.25H11.3522L11.0282 10.2125H9.25H9.15V10.3125V15.8168C8.7746 15.8716 8.39066 15.9 8 15.9C7.60934 15.9 7.22537 15.8716 6.85 15.8168V10.3125V10.2125H6.75Z"
                fill="white"
                stroke="white"
                stroke-width="0.2"
              />
            </svg>

            <button className="w-[100%] h-[40px] rounded-[8px] flex items-center justify-center text-[14px] border-[1px] border-[#8064A2]">
              Continue with Facebook
            </button>
          </div>
        </div>
        <div className="w-[100%] flex items-center justify-center gap-1 mb-5">
          <div className="w-[35%] h-[1px] bg-gray-500"></div>
          <p className="text-[12px] ">Or connect with</p>
          <div className="w-[35%] h-[1px] bg-gray-500"></div>
        </div>
        <div className={`w-[100%] flex flex-col gap-3 pb-10`}>
          <input
            type="text"
            name=""
            id=""
            className="pl-3  text-[12px] w-[100%] h-[40px]"
            placeholder="Email"
          />
          <div className="relative">
            <input
              type="text"
              name=""
              id=""
              className="pl-3  text-[12px] w-[100%] h-[40px]"
              placeholder="Password"
            />
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[30%] right-5"
            >
              <path
                d="M0.910417 0.15625L0.15625 0.910417L15.0896 15.8438L15.8438 15.0896L12.6302 11.876C14.8146 10.397 15.8929 8.32887 15.9073 8.30104C15.9678 8.21232 16.0001 8.10739 16 8C15.9999 7.8797 15.9592 7.76297 15.8844 7.66875C15.8288 7.5793 12.7564 2.66667 8 2.66667C6.65059 2.66667 5.43964 3.06677 4.39167 3.6375L0.910417 0.15625ZM8 4.26667C10.0619 4.26667 11.7333 5.93813 11.7333 8C11.7333 8.83838 11.4507 9.60685 10.9833 10.2292L9.83438 9.08021C10.0229 8.76379 10.1333 8.39558 10.1333 8C10.1333 6.82187 9.17813 5.86667 8 5.86667C7.60442 5.86667 7.23621 5.97707 6.91979 6.16563L5.77083 5.01667C6.39315 4.54931 7.16162 4.26667 8 4.26667ZM2.64063 4.84063C1.05555 6.17393 0.146656 7.61975 0.116667 7.66771C0.0412742 7.76207 0.000141568 7.87922 0 8C0.000105292 8.10448 0.0308933 8.20662 0.0885417 8.29375C0.0977116 8.31267 2.67671 13.3333 8 13.3333C8.98667 13.3333 9.87762 13.1592 10.6771 12.8781L9.29688 11.4969C8.89208 11.6473 8.45653 11.7333 8 11.7333C5.93813 11.7333 4.26667 10.0619 4.26667 8C4.26667 7.54347 4.35273 7.10793 4.50313 6.70313L2.64063 4.84063ZM5.87292 8.05938C5.90492 9.18844 6.81052 10.0951 7.93958 10.1271L5.87292 8.05938Z"
                fill="#6D747A"
              />
            </svg>
          </div>
          <div
            className={`flex items-center justify-between w-[100%] text-[12px] mt-5 relative`}
          >
            <div className={`flex gap-2 ${!activeBtn && "hidden"}`}>
              <input type="checkbox" name="" id="" />
              <label htmlFor="" className="text-12px text-gray-500">
                Remember me
              </label>
            </div>

            <div
              className={`flex gap-2  absolute right-0 ${
                activeBtn && "hidden"
              }`}
            >
              <label htmlFor="" className="text-12px text-gray-500">
                Password strength
              </label>
            </div>

            <div
              className={`flex gap-2  mt-10 items-center justify-center text-center ${
                activeBtn && "hidden"
              }`}
            >
              <label htmlFor="" className="text-12px text-gray-500">
                By continuing, you agree to our Terms of Service and Privacy
                Policy.
              </label>
            </div>

            <div className={`flex gap-2 ${!activeBtn && "hidden"}`}>
              <svg
                width="12"
                height="15"
                viewBox="0 0 12 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.81945 5.33334H9.1628V4.00001C9.1628 2.16001 7.69193 0.666672 5.8796 0.666672C4.06727 0.666672 2.59639 2.16001 2.59639 4.00001V5.33334H1.93975C1.21744 5.33334 0.626465 5.93334 0.626465 6.66667V13.3333C0.626465 14.0667 1.21744 14.6667 1.93975 14.6667H9.81945C10.5418 14.6667 11.1327 14.0667 11.1327 13.3333V6.66667C11.1327 5.93334 10.5418 5.33334 9.81945 5.33334ZM5.8796 11.3333C5.15729 11.3333 4.56631 10.7333 4.56631 10C4.56631 9.26667 5.15729 8.66667 5.8796 8.66667C6.6019 8.66667 7.19288 9.26667 7.19288 10C7.19288 10.7333 6.6019 11.3333 5.8796 11.3333ZM3.90967 5.33334V4.00001C3.90967 2.89334 4.78957 2.00001 5.8796 2.00001C6.96962 2.00001 7.84952 2.89334 7.84952 4.00001V5.33334H3.90967Z"
                  fill="#939CA3"
                />
              </svg>

              <label htmlFor="" className="text-12px text-gray-500">
                Forget password?
              </label>
            </div>
          </div>
          <button
            className={`w-[100%] h-[40px] rounded-[8px] text-[14px] border-[1px] border-black  ${
              !activeBtn && "hidden"
            }`}
          >
            Continue
          </button>
          <button
            className={`w-[100%] h-[40px] rounded-[8px] text-[14px]  bg-[#8064A2] text-white mt-5  ${
              activeBtn && "hidden"
            }`}
          >
            Agree and Continue
          </button>
        </div>
        <Image src={peoples} className="lg:hidden block" />
      </div>
    </div>
  );
};

export default LandedPage;
