export default function Footer() {
  return (
    <footer id="footer" className="bg-[#f4c430]	text-black py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-2xl font-bold">Savory Slices</h3>
          <p className="text-sm mt-2">
            Bringing Kerala’s authentic banana chips to every home — the good old snack, made right.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Explore</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-[#d4001a]">About Us</a></li>
            <li><a href="#products" className="hover:text-[#d4001a]">Our Products</a></li>
            <li><a href="#contact" className="hover:text-[#d4001a]">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="hover:text-[#d4001a]">Facebook</a>
            <a href="#" className="hover:text-[#d4001a]">Instagram</a>
            <a href="#" className="hover:text-[#d4001a]">WhatsApp</a>
          </div>
        </div>
        {/* Contact Section */}
        <div>
        <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4 text-sm">
            <a href="mailto:info@savoryslices.com" className="hover:text-[#d4001a]">
            📧 info@savoryslices.com
            </a>
            <a href="tel:+919876543210" className="hover:text-[#d4001a]">
            📞 +91 98765 43210
            </a>
        </div>
        </div>

      </div>

      <div className="mt-10 text-center text-md">
        © {new Date().getFullYear()} Savory Slices. All rights reserved.
      </div>
    </footer>
  );
}
