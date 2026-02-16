import { FooterLink1, FooterLink2 } from "../data/footer-links";
import { Link } from "react-router-dom";
// Genrated by chatgpt in one prompt
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* LEFT SIDE */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {FooterLink1.map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-3">
                  {section.title}
                </h3>

                <ul className="space-y-2 text-sm">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.link}
                        className="hover:text-white transition"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {FooterLink2.map((section, index) => (
              <div key={index}>
                <h3 className="text-white font-semibold mb-3">
                  {section.title}
                </h3>

                <ul className="space-y-2 text-sm">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.link}
                        className="hover:text-white transition"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
          © {new Date().getFullYear()} YourCompany. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// I try to make footer like chatgpt with full responsive
// const Footet = ()=>{
//      return <div>
//           <div>

//           </div>
//      </div>
// }
export default Footer;
