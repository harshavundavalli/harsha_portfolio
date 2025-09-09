"use client";

import { useState, useEffect } from "react";
import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experience from "../../../assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  const [selectedExp, setSelectedExp] = useState(null);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedExp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedExp]);

  return (
    <div
      id="experience"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Background section image */}
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      {/* Section heading */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Experiences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left side with animation */}
          <div className="flex justify-center items-start">
            <div className="w-full h-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          {/* Right side with experiences list */}
          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((exp) => (
                <GlowCard
                  key={exp.id}
                  identifier={`experience-${exp.id}`}
                  onClick={() => setSelectedExp(exp)} // open modal
                  className="cursor-pointer"
                >
                  <div className="p-3 relative">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs sm:text-sm text-[#16f2b3]">
                        {exp.duration}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                          {exp.title}
                        </p>
                        <p className="text-sm sm:text-base">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedExp && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setSelectedExp(null)} // close when clicking outside
        >
          <div
            className="bg-[#1a1443] text-white p-8 rounded-2xl max-w-lg w-full relative shadow-lg"
            onClick={(e) => e.stopPropagation()} // prevent outside click close
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-300 hover:text-white"
              onClick={() => setSelectedExp(null)}
            >
              ✕
            </button>

            {/* Modal content */}
            <h2 className="text-2xl font-bold mb-4">{selectedExp.title}</h2>
            <p className="text-sm text-[#16f2b3] mb-2">
              {selectedExp.duration} | {selectedExp.company}
            </p>
            <p className="text-base leading-relaxed">
              {selectedExp.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Experience;
