import React from "react";
import Container from "../container/Container";
import { Link } from "react-router";

function Footer() {
  return (
    <>
      <div>
        <footer className="bg-gray-800 text-white py-8">
          <Container>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* <!-- Left Section --> */}
              <div>
                <Link to={"/"}>
                  <h2 className="text-xl font-semibold">YourWebsite</h2>
                </Link>
                <p className="mt-2">Phone: +1 (123) 456-7890</p>
                <p>Email: contact@yourwebsite.com</p>
                <p className="mt-2">
                  Website:{" "}
                  <Link to={"/"} className="text-blue-400 hover:underline">
                    www.yourwebsite.com
                  </Link>
                </p>
              </div>
              {/* <!-- Right Section --> */}
              <div className="md:text-right">
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link
                      to={"/about-us"}
                      className="text-gray-400 hover:text-white"
                    >
                      About Us
                    </Link>
                  </li>

                  <li>
                    <Link
                      to={"/contact-us"}
                      className="text-gray-400 hover:text-white"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/contact-us"}
                      className="text-gray-400 hover:text-white"
                    >
                      Twitter
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/contact-us"}
                      className="text-gray-400 hover:text-white"
                    >
                      Facebook
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/contact-us"}
                      className="text-gray-400 hover:text-white"
                    >
                      Instagram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* <!-- Bottom Section --> */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center">
              <p className="text-sm">
                © 2025 YourWebsite. All rights reserved.
              </p>
              <div className="mt-4">
                <Link to={"/"} className="text-gray-400 hover:text-white mx-2">
                  Privacy Policy
                </Link>
                <Link to={"/"} className="text-gray-400 hover:text-white mx-2">
                  Terms of Service
                </Link>
                <Link to={"/"} className="text-gray-400 hover:text-white mx-2">
                  Contact
                </Link>
              </div>
            </div>
          </Container>
        </footer>
      </div>
    </>
  );
}

export default Footer;
