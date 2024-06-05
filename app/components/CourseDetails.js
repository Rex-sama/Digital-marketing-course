import Benefits from "./Benefits";
import CourseText from "./CourseText";

const CourseDetails = () => {
  return (
    <div className="mb-4 text-black">
      <h2 className="text-lg font-bold mb-2 mt-8 ">Course Overview</h2>
      {/* <p className="mb-2 ">Our Digital Marketing Course is designed to provide you with the skills needed to excel in the digital marketing field. Topics covered include SEO, SEM, social media marketing, content marketing, and more.</p> */}
      <p className="mb-2 text-gray-600 leading-tight">
        Our comprehensive Digital Marketing Course is designed to be your
        one-stop shop for success. We&apos;ll equip you with the in-demand skills you
        need to skyrocket your online presence, dominate search engines, and
        convert website visitors into loyal customers.
      </p>

      <div className="border border-1 border-indigo-300 rounded-lg shadow-lg shadow-red-300/50 p-4 mt-5">
        <h2 className="text-lg font-bold mb-4">What you&apos;ll learn</h2>
        <div className="grid sm:grid-cols-2 gap-2">
          <CourseText text={"SEO Techniques"} />
          <CourseText text={"Pay-Per-Click Advertising"} />
          <CourseText text={"Social Media Strategies"} />
          <CourseText text={"Email Marketing"} />
          <CourseText text={"Content Creation"} />
          <CourseText text={"Analytics and Data Interpretation"} />
        </div>
      </div>

      <h2 className="text-lg font-bold mt-10 mb-1">Benefits</h2>
      <p className="text-gray-600 leading-tight mb-4">Unleash the power of digital marketing to reach new heights - explore the benefits below!</p>
      <div className="grid grid-cols-2 gap-2 ">
        <Benefits
          text="40%"
          label="Avg. Salary Hike"
          icon={
            <img
              src={"hike.svg"}
              style={{ width: "25px", height: "25px" }}
              alt="hike"
            />
          }
        />
        <Benefits
          text="300+"
          label="Hiring Partners"
          icon={
            <img
              src={"partner.svg"}
              style={{ width: "25px", height: "25px" }}
              alt="partner"
            />
          }
        />
        <Benefits
          text="600+"
          label="Career Transitions"
          icon={
            <img
              src={"transition.svg"}
              style={{ width: "25px", height: "25px" }}
              alt="transition"
            />
          }
        />
        <Benefits
          text="80%"
          label="Avg. Outcome Achieved"
          icon={
            <img
              src={"tick.svg"}
              style={{ width: "25px", height: "25px" }}
              alt="Tick"
            />
          }
        />
      </div>

      {/* <p>Stop missing out on potential customers!</p> 
            <p>Enroll today and unlock the secrets to digital marketing success!</p> */}
    </div>
  );
};

export default CourseDetails;
