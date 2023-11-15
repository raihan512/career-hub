import { Link } from "react-router-dom";
import JobCard from "../../Shared/JobCard/JobCard";
import "./Hero.css";
import { IoSearch } from "react-icons/io5";
import { IoMdStar } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { PiShareFatFill } from "react-icons/pi";

const jobCard = [
  {
    id: 1,
    img: "https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/l-1.png",
    title: "Jr. PHP Developer",
    location: ["Canada", "USA"],
    openPosition: 6,
    salary: "5K -8K",
    jobtype: "Enternship",
    urgent: true,
    featured: true,
  },
  {
    id: 2,
    img: "https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/l-9.png",
    title: "Sr. MERN Developer",
    location: ["India"],
    openPosition: 1,
    salary: "10K",
    jobtype: "Fulltime",
    urgent: true,
    featured: true,
  },
];

const Hero = () => {
  return (
    <section className="container mx-auto my-5 md:my-10 lg:my-20">
      {/* Hero Left Area */}
      <div className="lg:flex justify-between">
        <div className="lg:w-6/12">
          {/* Caption */}
          <p className="text-cyan-600 bg-cyan-600/5 inline-block py-1 px-4 rounded-2xl hero-caption">
            Get Hot & Trending Jobs
          </p>
          {/* Title */}
          <h1 className="text-4xl xl:text-6xl font-bold my-6 lg:my-10">
            Remote Work Platform For Digital Team
          </h1>
          <p className="text-xl text-gray-400">
            Getting a new job is never easy. Check what new jobs we have in
            store for you on Job Stock.
          </p>
          {/* Search */}
          <form className="my-6 lg:my-10 border p-8 rounded-md relative overflow-hidden">
            <input
              type="search"
              placeholder="Skills, Designations, Keyword"
              className="absolute top-0 left-0 h-full w-full focus:outline-none pl-10"
            />
            <IoSearch className="text-cyan-600 h-6 w-6 absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="submit"
              value="Find Job"
              className="absolute top-1/2 -translate-y-1/2 right-2 text-white p-2 px-5 rounded-md bg-cyan-600 cursor-pointer"
            />
          </form>
          {/* Reviews */}
          <div className="mt-20">
            <div className="flex items-center">
              <p>14k reviews on</p>
              <div className="flex items-center ml-10">
                <IoMdStar className="text-[#FF8B00] text-lg" />
                <IoMdStar className="text-[#FF8B00] text-lg" />
                <IoMdStar className="text-[#FF8B00] text-lg" />
                <IoMdStar className="text-[#FF8B00] text-lg" />
                <IoMdStar className="text-[#FF8B00] text-lg" />
              </div>
            </div>
            <div className="flex items-center mt-5">
              <div className="flex items-center">
                <PiShareFatFill className="text-cyan-600 h-6 w-6 mr-2" />
                <p>4.9</p>
              </div>
              <div className="ml-5 w-72 grid grid-cols-9">
                <div className="rounded-full h-12 w-12 border-4 border-cyan-600/25 overflow-hidden">
                  <img
                    src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/user-3.png"
                    alt=""
                  />
                </div>
                <div className="rounded-full h-12 w-12 border-4 border-cyan-600/25 overflow-hidden">
                  <img
                    src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/user-5.png"
                    alt=""
                  />
                </div>
                <div className="rounded-full h-12 w-12 border-4 border-cyan-600/25 overflow-hidden">
                  <img
                    src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/user-7.png"
                    alt=""
                  />
                </div>
                <div className="rounded-full h-12 w-12 border-4 border-cyan-600/25 overflow-hidden">
                  <img
                    src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/user-6.png"
                    alt=""
                  />
                </div>
                <div className="rounded-full h-12 w-12 border-4 border-cyan-600/25 overflow-hidden flex items-center justify-center bg-cyan-50">
                  <p>12k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Hero Right Area */}
        <div className="lg:w-6/12 my-5 lg:my-0">
          <div className="lg:ml-6">
            <div className="grid sm:grid-cols-2 gap-3">
              {jobCard.map((job) => (
                <JobCard key={job.id} job={job} className="ml-2"></JobCard>
              ))}
            </div>

            <div>
              <div className="border p-5 flex items-center my-5 rounded-md">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <Link to="/">
                    <img
                      src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/team-7.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="ml-6">
                  <Link
                    to="/"
                    className="text-xl font-bold hover:text-cyan-600"
                  >
                    Kr. Dhananjay Preet
                  </Link>
                  <p className="flex items-center">
                    Sr. Web Designer .{" "}
                    <FaMapMarkerAlt className="h-4 w-4 mx-2" /> London
                  </p>
                </div>
              </div>
              <div className="border p-5 flex items-center my-5 rounded-md">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <Link to="/">
                    <img
                      src="https://themezhub.net/jobstock-landing-2.2/jobstock/assets/img/team-8.jpg"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="ml-6">
                  <Link
                    to="/"
                    className="text-xl font-bold hover:text-cyan-600"
                  >
                    Donald J. Merrick
                  </Link>
                  <p className="flex items-center">
                    Laravel Developer .{" "}
                    <FaMapMarkerAlt className="h-4 w-4 mx-2" />
                    California, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
