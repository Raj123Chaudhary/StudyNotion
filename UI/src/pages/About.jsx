import HighlightText from "../components/core/HomePage/HighlightText";
import BannerImage1 from "../assets/Images/aboutus1.webp";
import BannerImage2 from "../assets/Images/aboutus2.webp";
import BannerImage3 from "../assets/Images/aboutus3.webp";
import Quate from "../components/core/About/Quate";
import LearningGrid from "../components/core/About/LearningGrid";
import StatsComponent from "../components/core/About/StatsComponent";
import FoundingStoryImage from "../assets/Images/FoundingStory.png";
import ContactFormSection from "../components/core/About/ContactFormSection";
const About = () => {
  return (
    <div className="mx-auto w-11/12 max-w-[1260px] justify-between flex-col items-center gap-5">
      {/* section 1 */}
      <section className=" mt-[100px]">
        <div className="flex items-center flex-col">
          <h1 className="text-white text-4xl text-center w-[65%]">
            Driving Innovation in Online Education for a{" "}
            <HighlightText>Brighter Future</HighlightText>
          </h1>
          <p className="text-[#838894] text-center mt-5 w-[66%]">
            Studynotion is at the forefront of driving innovation in online
            education. We're passionate about creating a brighter future by
            offering cutting-edge courses, leveraging emerging technologies, and
            nurturing a vibrant learning community.
          </p>
          <div className="flex lg:flex-row gap-x-3 flex-wrap justify-center mx-auto mt-5">
            <img src={BannerImage1} alt="img1" />
            <img src={BannerImage2} alt="img2" />
            <img src={BannerImage3} alt="img3" />
          </div>
        </div>
      </section>
      {/* section2  */}
      <section>
        <Quate />
      </section>
      {/* section3 */}
      <section>
        <div className="flex flex-col mt-20">
          {/* fouding story wala div */}
          <div className="flex lg:flex-row  lg:justify-evenly lg:gap-10 justify-center  items-center flex-col">
            {/* left box */}
            <div className="lg:w-[40%] w-full p-3 ">
              <h1 className=" text-4xl text-red-600 font-semibold">
                Our Founding Story{" "}
              </h1>
              <p className="text-[#838894] mt-4 text-[16px] w-[90%]">
                Our e-learning platform was born out of a shared vision and
                passion for transforming education. It all began with a group of
                educators, technologists, and lifelong learners who recognized
                the need for accessible, flexible, and high-quality learning
                opportunities in a rapidly evolving digital world.
              </p>
              <p className="text-[#838894] mt-4 text-[16px] w-[90%]">
                As experienced educators ourselves, we witnessed firsthand the
                limitations and challenges of traditional education systems. We
                believed that education should not be confined to the walls of a
                classroom or restricted by geographical boundaries. We
                envisioned a platform that could bridge these gaps and empower
                individuals from all walks of life to unlock their full
                potential.
              </p>
            </div>
            {/* right box */}
            <div className="lg:w-[40%] w-full p-3 mx-auto">
              <img
                src={FoundingStoryImage}
                alt="FoundingStoryImage"
                className="w-full"
              />
            </div>
          </div>
          {/* vision and mission wala div  */}
          <div className="flex lg:flex-row lg:justify-evenly gap-10 flex-col">
            {/* left box */}
            <div className="lg:w-[40%] p-3">
              <h1 className="text-4xl text-orange-600 font-semibold">
                Our Vision
              </h1>
              <p className="text-[#838894] mt-4 text-[16px] w-[90%]">
                With this vision in mind, we set out on a journey to create an
                e-learning platform that would revolutionize the way people
                learn. Our team of dedicated experts worked tirelessly to
                develop a robust and intuitive platform that combines
                cutting-edge technology with engaging content, fostering a
                dynamic and interactive learning experience.
              </p>
            </div>
            {/* right box */}
            <div className="lg:w-[40%] p-3">
              <h1 className="text-blue-500 text-4xl font-semibold">
                Our Mission
              </h1>
              <p className="text-[#838894] mt-4 text-[16px] w-[90%]">
                our mission goes beyond just delivering courses online. We
                wanted to create a vibrant community of learners, where
                individuals can connect, collaborate, and learn from one
                another. We believe that knowledge thrives in an environment of
                sharing and dialogue, and we foster this spirit of collaboration
                through forums, live sessions, and networking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* section4 */}
      <section>
        <StatsComponent />
      </section>
      {/* section 5 */}
      <section className="flex flex-col gap-5 mt-20">
        <LearningGrid />
        <ContactFormSection />
      </section>
    </div>
  );
};
export default About;
