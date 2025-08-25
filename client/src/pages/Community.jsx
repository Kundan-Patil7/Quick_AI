import { useUser } from "@clerk/clerk-react";
import React, { useState, useEffect } from "react";
import { dummyPublishedCreationData } from "../assets/assets";
import { Heart } from "lucide-react";

const Community = () => {
  const [creations, setCreations] = useState([]);
  const { user } = useUser();

  const fetchCreation = async () => {
    setCreations(dummyPublishedCreationData);
  };

  useEffect(() => {
    fetchCreation();
  }, [user]);

  return (
    <div className="flex-1 h-full flex flex-col gap-4 p-6">
      <h1 className="text-lg font-semibold mb-2">Creations</h1>

      <div className="bg-white h-full w-full rounded-xl overflow-y-scroll">
        <div className="flex flex-wrap">
          {creations.map((creation, index) => (
            <div
              key={index}
              className="relative group inline-block pl-3 pt-3 w-full sm:w-1/2 lg:w-1/3"
            >
              <img
                src={creation.content}
                alt="creation"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-end justify-between gap-2 p-3 rounded-lg bg-gradient-to-t from-black/70 to-transparent text-white opacity-0 group-hover:opacity-100 transition">
                <p className="text-sm">{creation.prompt}</p>

                <div className="flex gap-1 items-center">
                  <p className="text-sm">{creation.likes.length}</p>
                  <Heart
                    className={`min-w-5 h-5 cursor-pointer hover:scale-110 transition ${
                      creation.likes.includes(user?.id)
                        ? "fill-red-500 text-red-600"
                        : "text-white"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;
