import React from "react";
import { Link } from "react-router-dom";

const FooterArea = () => {
  return (
    <div className="footer-top bg-[#333333] text-white mt-16">
      <div className="grid grid-cols-1 md:grid-cols-4 px-12 py-16 gap-8">
        <div>
          <h4 className="font-semibold mb-8 uppercase">CONTACT INFO</h4>
          <p className="text-[#666] mb-2 uppercase">STORE LOCATION</p>
          <address className="text-[#b0b0b0]">
            85 Lake View Drive Marshfield, New York, 54449
          </address>
          <p className="mt-4 text-[#666] uppercase">EMAIL US</p>
          <p className="text-[#b0b0b0]">demo@demo.com</p>
        </div>
        <div>
          <h4 className="font-semibold mb-8 uppercase">Useful links</h4>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            Legal & Privacy
          </Link>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            Contact
          </Link>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            Gift Card
          </Link>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            Customer Service
          </Link>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            My Account
          </Link>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            Find a Store
          </Link>
        </div>
        <div>
          <h4 className="font-semibold mb-8 uppercase">My Account</h4>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            My Profile
          </Link>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            My Order History
          </Link>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            My Wish List
          </Link>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            Order Tracking
          </Link>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            Shopping Cart
          </Link>
        </div>
        <div>
          <h4 className="font-semibold mb-8 uppercase">Company</h4>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            About Us
          </Link>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            Careers
          </Link>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            Blog
          </Link>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            Affiliate
          </Link>
          <Link className="text-[#b0b0b0] block mb-2" to="/">
            Contact Us
          </Link>
        </div>
      </div>
      <hr className="bg-[#b0b0b0]" />
      <p className="text-center py-12 text-[#b0b0b0]">
        Copyright © 2022 Manufacture. All rights reserved
      </p>
    </div>
  );
};

export default FooterArea;
