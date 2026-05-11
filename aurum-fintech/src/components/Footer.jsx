export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-black text-yellow-400">AURUM</h1>
          <p className="text-gray-400 mt-4 max-w-sm leading-7">
            Premium institutional-grade crypto investment platform built for
            modern investors who demand security, speed, and transparency.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-semibold mb-4">Platform</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              Markets
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Pricing
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Security
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Support
            </li>
          </ul>
        </div>

        {/* Legal / Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-gray-400">
            <li className="hover:text-white transition cursor-pointer">
              About
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Careers
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </li>
            <li className="hover:text-white transition cursor-pointer">
              Terms
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm gap-4">
        <p>© {new Date().getFullYear()} AURUM. All rights reserved.</p>

        <div className="flex gap-6">
          <span className="hover:text-white transition cursor-pointer">
            Twitter
          </span>
          <span className="hover:text-white transition cursor-pointer">
            LinkedIn
          </span>
          <span className="hover:text-white transition cursor-pointer">
            Discord
          </span>
        </div>
      </div>
    </footer>
  );
}
