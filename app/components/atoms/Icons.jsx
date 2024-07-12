import Link from "next/link";
import React from "react";

export const Reset = () => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      <path
        d="M19.6757 8V0L9.87838 10L19.6757 20V12C26.1615 12 31.4324 17.38 31.4324 24C31.4324 30.62 26.1615 36 19.6757 36C13.1899 36 7.91892 30.62 7.91892 24H4C4 32.84 11.0149 40 19.6757 40C28.3365 40 35.3514 32.84 35.3514 24C35.3514 15.16 28.3365 8 19.6757 8Z"
        className="iconColor"
      />
    </svg>
  );
};

export const Coin = () => {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
    >
      <circle cx="20" cy="19.9912" r="20" className="timerbg" />
      <circle cx="20" cy="19.9914" r="15.1475" className="timertext" />
    </svg>
  );
};

export const Shop = () => {
  return (
    <Link href={"/shop"}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <path
          d="M21.1765 38.8C20.3755 39.6 19.4243 40 18.3229 40C17.2215 40 16.2703 39.6 15.4693 38.8L1.15144 24.5C0.383813 23.7333 0 22.7917 0 21.675C0 20.5583 0.383813 19.6167 1.15144 18.85L18.7735 1.2C19.1406 0.833333 19.5745 0.541667 20.0751 0.325C20.5757 0.108333 21.1097 0 21.6771 0H35.995C37.0964 0 38.0392 0.391667 38.8235 1.175C39.6078 1.95833 40 2.9 40 4V18.3C40 18.8667 39.8915 19.4 39.6746 19.9C39.4577 20.4 39.1656 20.8333 38.7985 21.2L21.1765 38.8ZM30.9887 12C31.8231 12 32.5323 11.7083 33.1164 11.125C33.7005 10.5417 33.9925 9.83333 33.9925 9C33.9925 8.16667 33.7005 7.45833 33.1164 6.875C32.5323 6.29167 31.8231 6 30.9887 6C30.1544 6 29.4451 6.29167 28.8611 6.875C28.277 7.45833 27.985 8.16667 27.985 9C27.985 9.83333 28.277 10.5417 28.8611 11.125C29.4451 11.7083 30.1544 12 30.9887 12Z"
          className="iconColor"
        />
      </svg>
    </Link>
  );
};

export const Report = () => {
  return (
    <Link href={"/report"}>
      <svg
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
      >
        <path
          d="M10.9512 13.1741H0.951172V40.6741H10.9512V13.1741Z"
          className="iconColor"
        />
        <path
          d="M40.9512 23.1741H30.9512V40.6741H40.9512V23.1741Z"
          className="iconColor"
        />
        <path
          d="M25.9512 0.674194H15.9512V40.6742H25.9512V0.674194Z"
          className="iconColor"
        />
      </svg>
    </Link>
  );
};
