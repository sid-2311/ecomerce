"use client";
import { FaFacebookF, FaInstagram, FaPinterestP, FaTiktok } from "react-icons/fa";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t text-sm text-black">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Links Section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-4">SHOP</h3>
            <ul className="space-y-2">
              <li>New Arrivals</li>
              <li>Collections</li>
              <li>Accessories</li>
              <li>Shoes</li>
              <li>Inspiration</li>
              <li>Brands</li>
              <li>Gift Cards</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">POPULAR</h3>
            <ul className="space-y-2">
              <li>Seasonal Favorites</li>
              <li>Must-Have Bags</li>
              <li>Cozy Knitwear</li>
              <li>Trendy Accessories</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">SUPPORT</h3>
            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>Account</li>
              <li>Store Locations</li>
              <li>Shipping And Delivery</li>
              <li>Returns</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">INFO</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Career</li>
              <li>Sustainability</li>
              <li>Investor Relations</li>
              <li>Press</li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-wrap items-center gap-4 mb-8">
          <Image src="/visa.png" alt="Visa" width={40} height={25} />
          <Image src="/applepay.png" alt="Apple Pay" width={40} height={25} />
          <Image src="/googlepay.png" alt="Google Pay" width={40} height={25} />
          <Image src="/klarna.png" alt="Klarna" width={40} height={25} />
          <Image src="/mastercard.png" alt="MasterCard" width={40} height={25} />
          <Image src="/paypal.png" alt="PayPal" width={40} height={25} />
        </div>

        {/* Social Media */}
        <div className="flex items-center gap-5 mb-8">
          <FaFacebookF size={20} />
          <FaInstagram size={20} />
          <FaPinterestP size={20} />
          <FaTiktok size={20} />
        </div>

        {/* Bottom Links */}
        <div className="flex flex-col sm:flex-row justify-between text-gray-500 text-xs border-t pt-4">
          <p>© 2024 Amara Noir</p>
          <div className="flex flex-wrap gap-4">
            <span>Cookies</span>
            <span>Privacy Policy</span>
            <span>Terms and Conditions</span>
            <span>Sitemap</span>
          </div>
          <span>Denmark</span>
        </div>
      </div>
    </footer>
  );
}
