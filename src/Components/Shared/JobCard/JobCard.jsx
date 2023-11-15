import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  const {
    title,
    img,
    location,
    openPosition,
    salary,
    jobtype,
    featured,
    urgent,
  } = job;
  return (
    <div className="border rounded-md pt-2 min-w-[240px]">
      {/* Status */}
      <div className="flex justify-between items-center">
        <div>
          {featured && (
            <p className="text-cyan-600 bg-cyan-600/10 rounded-r-full pt-0.5 pb-1 px-6 my-2">
              Featured
            </p>
          )}
          {urgent && (
            <p className="text-[#FF8222] bg-[#FF8222]/10 rounded-r-full pt-0.5 pb-1 px-6 my-2">
              Urgent
            </p>
          )}
        </div>
        <div>
          <p className="text-[#D20001] bg-[#D20001]/10 rounded-l-full pt-0.5 pb-1 px-6 my-2">
            {jobtype}
          </p>
        </div>
      </div>
      {/* Summary */}
      <div className="p-5">
        <img src={img} className="h-16 mx-auto" alt="" />
        <div className="my-2">
          <p className="text-xl font-bold text-center">{title}</p>
          <p className="text-md text-center text-md">{location.join(",")}</p>
        </div>

        <div className="flex items-center justify-between mt-10">
          <p className="text-2xl font-bold text-[#FF8222]">{salary}</p>
          <p className="text-sm bg-cyan-600 text-white py-1 px-4 rounded-full">
            {openPosition} Open
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
