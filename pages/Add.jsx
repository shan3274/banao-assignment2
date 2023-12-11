import Header from "@/src/components/Header";
import React from "react";

const Add = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-screen flex flex-col justify-center items-center bg-[#F7F5F9] lg:mt-[5%] sm:mt-[7%] mt-[10%] xl:mt-0">
        <div className="flex gap-3 mb-5">
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0002 0.333252C7.80016 0.333252 0.333496 7.79992 0.333496 16.9999C0.333496 26.1999 7.80016 33.6666 17.0002 33.6666C26.2002 33.6666 33.6668 26.1999 33.6668 16.9999C33.6668 7.79992 26.2002 0.333252 17.0002 0.333252ZM23.6668 18.6666H18.6668V23.6666C18.6668 24.5833 17.9168 25.3333 17.0002 25.3333C16.0835 25.3333 15.3335 24.5833 15.3335 23.6666V18.6666H10.3335C9.41683 18.6666 8.66683 17.9166 8.66683 16.9999C8.66683 16.0833 9.41683 15.3333 10.3335 15.3333H15.3335V10.3333C15.3335 9.41659 16.0835 8.66659 17.0002 8.66659C17.9168 8.66659 18.6668 9.41659 18.6668 10.3333V15.3333H23.6668C24.5835 15.3333 25.3335 16.0833 25.3335 16.9999C25.3335 17.9166 24.5835 18.6666 23.6668 18.6666Z"
              fill="#0096C8"
            />
          </svg>
          <h1 className="text-[24px] font-[600]">Add Your Listing</h1>
        </div>
        <div className="w-[90%] xl:h-[80%] h-[100%] lg:w-[100%] flex items-center justify-center">
          <div className="w-[80%] h-[100%] grid gap-5 xl:grid-cols-2 grid-flow-row">
            <div className="2xl:w-[608px] 2xl:h-[297px] xl:w-[508px] xl:h-[260px] bg-white rounded-[8px] drop-shadow-md flex flex-col justify-around p-10 gap-4 hover:bg-[#bdf1ab] hover:text-white">
              <div className="flex gap-3 items-center">
                <svg
                  width="40"
                  height="20"
                  viewBox="0 0 40 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 11.25C22.7167 11.25 25.1167 11.9 27.0667 12.75C28.8667 13.55 30 15.35 30 17.3V20H10V17.3167C10 15.35 11.1333 13.55 12.9333 12.7667C14.8833 11.9 17.2833 11.25 20 11.25ZM6.66667 11.6667C8.5 11.6667 10 10.1667 10 8.33333C10 6.5 8.5 5 6.66667 5C4.83333 5 3.33333 6.5 3.33333 8.33333C3.33333 10.1667 4.83333 11.6667 6.66667 11.6667ZM8.55 13.5C7.93333 13.4 7.31667 13.3333 6.66667 13.3333C5.01667 13.3333 3.45 13.6833 2.03333 14.3C0.8 14.8333 0 16.0333 0 17.3833V20H7.5V17.3167C7.5 15.9333 7.88333 14.6333 8.55 13.5ZM33.3333 11.6667C35.1667 11.6667 36.6667 10.1667 36.6667 8.33333C36.6667 6.5 35.1667 5 33.3333 5C31.5 5 30 6.5 30 8.33333C30 10.1667 31.5 11.6667 33.3333 11.6667ZM40 17.3833C40 16.0333 39.2 14.8333 37.9667 14.3C36.55 13.6833 34.9833 13.3333 33.3333 13.3333C32.6833 13.3333 32.0667 13.4 31.45 13.5C32.1167 14.6333 32.5 15.9333 32.5 17.3167V20H40V17.3833ZM20 0C22.7667 0 25 2.23333 25 5C25 7.76667 22.7667 10 20 10C17.2333 10 15 7.76667 15 5C15 2.23333 17.2333 0 20 0Z"
                    fill="#8064A2"
                  />
                </svg>

                <h1 className="text-[24px] font-[600]">People</h1>
              </div>
              <p className=" text-justify xl:text-[18px] lg:text-[15px]  text-[12px]">
                An Individual or Organization. Teacher, Coach, Professional or
                Online Seller. Company, Business or Association.
              </p>
            </div>
            <div className="2xl:w-[608px] 2xl:h-[297px] xl:w-[508px] xl:h-[260px] bg-white rounded-[8px] drop-shadow-md flex flex-col justify-around p-10 gap-4 hover:bg-[#abf1dd] hover:text-white">
              <div className="flex gap-3">
                <svg
                  width="24"
                  height="34"
                  viewBox="0 0 24 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0002 0.333328C5.55016 0.333328 0.333496 5.55 0.333496 12C0.333496 20.75 12.0002 33.6667 12.0002 33.6667C12.0002 33.6667 23.6668 20.75 23.6668 12C23.6668 5.55 18.4502 0.333328 12.0002 0.333328ZM12.0002 16.1667C9.70016 16.1667 7.8335 14.3 7.8335 12C7.8335 9.7 9.70016 7.83333 12.0002 7.83333C14.3002 7.83333 16.1668 9.7 16.1668 12C16.1668 14.3 14.3002 16.1667 12.0002 16.1667Z"
                    fill="#77933C"
                  />
                </svg>

                <h1 className="text-[24px] font-[600]">Place</h1>
              </div>
              <p className=" text-justify xl:text-[18px] lg:text-[15px]  text-[12px]">
                An Address. Classroom, Shop, Performance or Event Venue, Sports
                Arena, Play Area, Studio, School or Campus.
              </p>
            </div>
            <div className="2xl:w-[608px] 2xl:h-[297px] xl:w-[508px] xl:h-[260px] bg-white rounded-[8px] drop-shadow-md flex flex-col justify-around p-10 gap-4 hover:bg-[#f1abea] hover:text-white">
              <div className="flex gap-3">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_4253)">
                    <path
                      d="M28.6832 14.9997L21.3832 4.06636C21.0665 3.5997 20.5332 3.36636 19.9998 3.36636C19.4665 3.36636 18.9332 3.5997 18.6165 4.08303L11.3165 14.9997H3.33317C2.4165 14.9997 1.6665 15.7497 1.6665 16.6664C1.6665 16.8164 1.68317 16.9664 1.73317 17.1164L5.9665 32.5664C6.34984 33.9664 7.63317 34.9997 9.1665 34.9997H30.8332C32.3665 34.9997 33.6498 33.9664 34.0498 32.5664L38.2832 17.1164L38.3332 16.6664C38.3332 15.7497 37.5832 14.9997 36.6665 14.9997H28.6832ZM14.9998 14.9997L19.9998 7.66636L24.9998 14.9997H14.9998ZM19.9998 28.333C18.1665 28.333 16.6665 26.833 16.6665 24.9997C16.6665 23.1664 18.1665 21.6664 19.9998 21.6664C21.8332 21.6664 23.3332 23.1664 23.3332 24.9997C23.3332 26.833 21.8332 28.333 19.9998 28.333Z"
                      fill="#C0504D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_4253">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h1 className="text-[24px] font-[600]">Product</h1>
              </div>
              <p className=" text-justify xl:text-[18px] lg:text-[15px]  text-[12px]">
                An Item that you can Book, Buy or Rent. Appointment, Ticket, or
                Voucher. Equipment, Instrument or Activity Kit.
              </p>
            </div>
            <div className="2xl:w-[608px] 2xl:h-[297px] xl:w-[508px] xl:h-[260px] bg-white rounded-[8px] drop-shadow-md flex flex-col justify-around p-10 gap-4 hover:bg-[#f1abab] hover:text-white">
              <div className="flex gap-3">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_4273)">
                    <rect x="8" y="13" width="24" height="19" fill="#0096C8" />
                    <path
                      d="M26.6667 17.5498C26.1833 17.0665 25.3833 17.0665 24.9 17.5498L17.65 24.7998L15 22.1498C14.5167 21.6665 13.7167 21.6665 13.2333 22.1498C12.75 22.6332 12.75 23.4332 13.2333 23.9165L16.4667 27.1498C17.1167 27.7998 18.1667 27.7998 18.8167 27.1498L26.65 19.3165C27.15 18.8332 27.15 18.0332 26.6667 17.5498ZM31.6667 4.99984H30V3.33317C30 2.4165 29.25 1.6665 28.3333 1.6665C27.4167 1.6665 26.6667 2.4165 26.6667 3.33317V4.99984H13.3333V3.33317C13.3333 2.4165 12.5833 1.6665 11.6667 1.6665C10.75 1.6665 10 2.4165 10 3.33317V4.99984H8.33333C6.48333 4.99984 5.01667 6.49984 5.01667 8.33317L5 31.6665C5 33.4998 6.48333 34.9998 8.33333 34.9998H31.6667C33.5 34.9998 35 33.4998 35 31.6665V8.33317C35 6.49984 33.5 4.99984 31.6667 4.99984ZM30 31.6665H10C9.08333 31.6665 8.33333 30.9165 8.33333 29.9998V13.3332H31.6667V29.9998C31.6667 30.9165 30.9167 31.6665 30 31.6665Z"
                      fill="#0096C8"
                    />
                    <path
                      d="M26.7958 17.3625C26.3125 16.8792 25.5125 16.8792 25.0292 17.3625L17.7792 24.6125L15.1292 21.9625C14.6458 21.4792 13.8458 21.4792 13.3625 21.9625C12.8792 22.4458 12.8792 23.2458 13.3625 23.7292L16.5958 26.9625C17.2458 27.6125 18.2958 27.6125 18.9458 26.9625L26.7792 19.1292C27.2792 18.6458 27.2792 17.8458 26.7958 17.3625Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_4273">
                      <rect width="40" height="40" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <h1 className="text-[24px] font-[600]">Program</h1>
              </div>
              <p className=" text-justify xl:text-[18px] lg:text-[15px]  text-[12px]">
                An Event with Venue and Date. Meetup, Workshop or Webinar.
                Exhibition, Performance or Competition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
