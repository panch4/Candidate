import React from "react";
import "./../styles/JobList.css";
import Rectangle3890 from "../assets/icons/logos/Rectangle 3890.png";
import Microsoft from "../assets/icons/logos/Microsoft.png";
import Google from "../assets/icons/logos/Google.png";
import Discord from "../assets/icons/logos/Discord.png";
import Fly from "../assets/icons/logos/Fly.png";

const JobList = () => {
  const jobs = [
    {
      id: 1,
      title: "Product Designer",
      company: "GreenSphere",
      location: "Mangalore, India",
      logo: Rectangle3890,
      applied: false,
      appliedDate: null,
      link: "/greensphere",
    },
    {
      id: 2,
      title: "Product Designer",
      company: "Microsoft",
      location: "Mangalore, India",
      logo: Microsoft,
      applied: true,
      appliedDate: "20 Dec 2024",
      link: "/microsoft",
    },
    {
      id: 3,
      title: "Product Designer",
      company: "Google",
      location: "Mangalore, India",
      logo: Google,
      applied: true,
      appliedDate: "22 Dec 2024",
      link: "/google",
    },
    {
      id: 4,
      title: "Product Designer",
      company: "Discord",
      location: "Mangalore, India",
      logo: Discord,
      applied: false,
      appliedDate: null,
      link: "/discord",
    },
    {
      id: 5,
      title: "Product Designer",
      company: "Fly",
      location: "Mangalore, India",
      logo: Fly,
      applied: false,
      appliedDate: null,
      link: "/fly",
    },
    {
      id: 6,
      title: "Product Designer",
      company: "Fly",
      location: "Bangalore, India",
      logo: Fly,
      applied: false,
      appliedDate: null,
      link: "/fly",
    },
    {
      id: 7,
      title: "Product Designer",
      company: "Discord",
      location: "Bangalore, India",
      logo: Discord,
      applied: true,
      appliedDate: "27 January 2025",
      link: "/discord",
    },
    {
      id: 8,
      title: "Product Designer",
      company: "Discord",
      location: "Mumbai, India",
      logo: Discord,
      applied: true,
      appliedDate: "27 January 2025",
      link: "/discord",
    },
  ];

  return (
    <div className="job-sidebar">
      <h3 className="sidebar-heading">Jobs in Mangalore</h3>
      {jobs
        .filter((job) => job.location.includes("Mangalore"))
        .map((job) => (
          <div
            key={job.id}
            className={`job-item ${job.applied ? "applied" : ""}`}
          >
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="company-logo"
            />
            <div className="job-details">
              <h4 className="job-title">{job.title}</h4>
              <p className="job-company">{job.company}</p>
              <p className="job-location">{job.location}</p>
              {job.applied ? (
                <span className="applied-date">
                  Applied on {job.appliedDate}
                </span>
              ) : (
                <a href={job.link} className="job-link view-job-link">
                  View Job
                </a>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default JobList;
