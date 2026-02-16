import ContactUsForm from "../../common/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto text-white p-2">
      <h1 className="text-4xl text-[#F1F2FF] font-semibold text-center mx-auto">
        Get in Touch
      </h1>
      <p className="text-[#838894] text-[16px] mt-3 mx-auto text-center">
        {" "}
        We' love to here for you, Please fill out this form.
      </p>
      <div className="mt-10">
        <ContactUsForm />
      </div>
    </div>
  );
};
export default ContactFormSection;
