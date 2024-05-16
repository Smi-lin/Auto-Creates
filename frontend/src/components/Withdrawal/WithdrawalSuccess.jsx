"use client"
import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const WithdrawalSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center gap-4 withdrawal-succ-wrapper">
      <span className="text-green-500">
        <FaCheck className="text-green-500" size={55}/>
      </span>

      <div>
        <p className="text-xl font-semibold">Withdrawal Successful</p>
        <p>You have successfully withdrawn $100 into your wallet</p>

        <Link to="/" className="btn">Dismiss</Link>
      </div>
    </div>
  );
};

export default WithdrawalSuccess;
