import React from "react";
import { Link } from "react-router-dom";

const Text5 = () => {
  return (
    <div className="flex justify-center px-4 py-8">
      <div className="min-h-screen bg-white shadow-lg rounded-lg p-6 md:p-10 text-gray-800">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-blue-600">
           Grant Application Service
        </h1>
        <p className="mt-4 text-lg leading-relaxed">
          This is a Federal Government and Private Grant Foundations issue billions of dollars in 
          grant money to a variety of groups each year. Grants are awarded to individuals each and 
          every day. Grant programs are not loans. You decide how much you need. As long as the 
          amount is lawful and you meet the Foundations' and government Agencies' requirements, 
          the money is yours to keep and never needs to be repaid.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          Grant money is non-taxable and interest-free. Grant programs do not require a credit 
          check, security deposits, or co-signers. You can apply even if you have declared 
          bankruptcy or have bad credit. As a taxpayer and U.S. citizen, you are entitled to apply 
          for this money. This program helps with medical bills, home buying, starting a business, 
          and education.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          When looking for financial assistance, remember that there is a difference between grants 
          and loans. Loans require repayment with interest, but government grants do not. However, 
          you only pay for the clearance and home delivery fee.
        </p>

        <p className="mt-4 text-lg leading-relaxed font-semibold text-center text-blue-500">
          How serious are you? If you need financial support, register today. Don't procrastinate. 
          Federal Government Grant is here to help your needs today, not next year.
        </p>

        <p className="mt-4 text-lg text-center">
          <span className="font-bold text-blue-600">"Change your future NOW!"</span> If free funding 
          to start or expand a business, or complete a worthwhile project, would change your life, 
          what are you waiting for? Get registered TODAY!
        </p>

        <div className="mt-6 flex justify-center">
          <Link 
          to='/form'
          
          className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Text5;
