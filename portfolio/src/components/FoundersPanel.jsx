import { FaLinkedin, FaMapMarkerAlt, FaUsers } from "react-icons/fa";
import { founders, siteConfig } from "../data/config";

function FounderAvatar({ founder }) {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="w-[130px] h-[130px] lg:w-[180px] lg:h-[180px] rounded-full overflow-hidden bg-gray-200 shadow-md">
        <img
          src={founder.photo}
          alt={founder.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-lg lg:text-[22px] font-bold text-gray-900 mt-1">{founder.name}</h3>
      <a
        href={founder.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#0077b5] hover:text-[#005582] transition-colors"
        aria-label={`${founder.name}'s LinkedIn`}
      >
        <FaLinkedin size={20} />
      </a>
    </div>
  );
}

export default function FoundersPanel() {
  return (
    <div className="lg:sticky lg:top-8 text-center">
      {/* Founders */}
      <div className="flex justify-center gap-8 lg:gap-10 mb-6">
        {founders.map((f) => (
          <FounderAvatar key={f.name} founder={f} />
        ))}
      </div>

      {/* Company name */}
      <div className="flex items-center justify-center gap-3 mb-1">
        <img src="/logo.svg" alt="ATC logo" className="w-[38px] h-[38px] lg:w-[46px] lg:h-[46px]" />
        <h1 className="text-[26px] lg:text-[32px] font-bold text-gray-900 leading-tight">
          {siteConfig.companyName}
        </h1>
      </div>

      {/* Location & users */}
      <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mt-3 mb-4">
        <span className="flex items-center gap-1.5">
          <FaMapMarkerAlt className="text-gray-400" size={13} />
          {siteConfig.location}
        </span>
        <span className="flex items-center gap-1.5">
          <FaUsers className="text-gray-400" size={13} />
          {siteConfig.totalUsers.toLocaleString()} users
        </span>
      </div>

      {/* Bio */}
      <p className="italic text-gray-500 text-[15px] leading-relaxed mb-5">
        {siteConfig.bio}
      </p>

      {/* Tagline */}
      {siteConfig.tagline && (
        <p className="text-[15px] text-gray-600 leading-relaxed">
          {siteConfig.tagline}
        </p>
      )}
    </div>
  );
}
