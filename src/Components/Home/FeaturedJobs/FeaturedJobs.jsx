import { useEffect, useState } from "react";
import JobCard from "../../Shared/JobCard/JobCard";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const featuredJobs = jobs.filter((job) => job.featured === true);

  return (
    <section className="container mx-auto my-5 md:my-10 lg:my-20">
      <h2 className="text-4xl font font-bold text-center mb-10">
        Featured Jobs
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {featuredJobs.slice(0, 8).map((job) => (
          <JobCard key={job.id} job={job}></JobCard>
        ))}
      </div>
    </section>
  );
};

export default FeaturedJobs;
