import HighlightText from "../components/core/HomePage/HighlightText";
import ContactFormSection from "../components/core/About/ContactFormSection";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="mx-auto w-11/12 max-w-[1260px] flex flex-col gap-16">
      {/* ===== Section 1: Hero ===== */}
      <section className="mt-[100px] flex flex-col items-center text-center">
        <h1 className="text-white text-4xl w-[65%]">
          Get in Touch with <HighlightText>StudyNotion</HighlightText>
        </h1>

        <p className="text-[#838894] mt-5 w-[65%]">
          Have questions, feedback, or need support? Our team is here to help
          you on your learning journey.
        </p>
      </section>

      {/* ===== Section 2: Contact Info Cards ===== */}
      <section className="flex flex-col lg:flex-row justify-center gap-8">
        {/* Phone */}
        <div className="bg-richblack-800 p-6 rounded-lg flex flex-col items-center gap-3 w-full lg:w-[30%]">
          <FaPhoneAlt className="text-yellow-400 text-3xl" />
          <h3 className="text-white text-xl font-semibold">Call Us</h3>
          <p className="text-[#838894] text-center">+91 98765 43210</p>
        </div>

        {/* Email */}
        <div className="bg-richblack-800 p-6 rounded-lg flex flex-col items-center gap-3 w-full lg:w-[30%]">
          <FaEnvelope className="text-blue-400 text-3xl" />
          <h3 className="text-white text-xl font-semibold">Email Us</h3>
          <p className="text-[#838894] text-center">support@studynotion.com</p>
        </div>

        {/* Address */}
        <div className="bg-richblack-800 p-6 rounded-lg flex flex-col items-center gap-3 w-full lg:w-[30%]">
          <FaMapMarkerAlt className="text-red-400 text-3xl" />
          <h3 className="text-white text-xl font-semibold">Visit Us</h3>
          <p className="text-[#838894] text-center">
            Lucknow, Uttar Pradesh, India
          </p>
        </div>
      </section>

      {/* ===== Section 3: Contact Form ===== */}
      <section className="mt-10">
        <ContactFormSection />
      </section>
    </div>
  );
};

export default ContactUs;
