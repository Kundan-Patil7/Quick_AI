import React, { useState } from "react";
import { Image, Sparkles, Hash } from "lucide-react";

const GenerateImage = () => {
  const ImageStyle = [
    "Realistic",
    "Ghibli style",
    "Anime style",
    "Cartoon style",
    "Fantasy style",
    "Portrait style",
  ];

  const [selectedStyle, setSelectedStyle] = useState("Realistic");
  const [input, setInput] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log("Input:", input);
    console.log("Style:", selectedStyle);
    console.log("Public:", isPublic);
    setHasGenerated(true);
  };

  return (
    <div className="h-full overflow-y-scroll p-6 flex items-start flex-wrap gap-4 text-slate-700">
      {/* Left card */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg border border-gray-200">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 text-[#00AD25]" />
          <h1 className="text-lg font-semibold">AI Image Generator</h1>
        </div>

        <p className="mt-6 text-sm font-medium">Describe your Image</p>
        <textarea
          onChange={(e) => setInput(e.target.value)}
          value={input}
          rows={4}
          className="w-full p-2 px-3 mt-2 outline-none text-sm rounded-md border border-gray-300"
          placeholder="The future of artificial intelligence is ..."
          required
        />

        <p className="mt-4 text-sm font-medium">Category</p>
        <div className="mt-3 flex gap-3 flex-wrap">
          {ImageStyle.map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => setSelectedStyle(item)}
              className={`text-xs px-4 py-1 border rounded-full ${
                selectedStyle === item
                  ? "bg-green-50 text-green-700 border-green-300"
                  : "text-gray-500 border-gray-300"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Fixed Toggle Switch */}
        <div className="mt-6 flex items-center gap-2">
          <div className="flex items-center cursor-pointer gap-2" onClick={() => setIsPublic(!isPublic)}>
            {/* track with knob inside */}
            <div className={`relative w-9 h-5 rounded-full transition-colors duration-300 ${
              isPublic ? 'bg-green-500' : 'bg-slate-300'
            }`}>
              {/* knob */}
              <span className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                isPublic ? 'translate-x-4 left-0.5' : 'left-0.5'
              }`}></span>
            </div>

            {/* text */}
            <p className="text-sm text-gray-700">Make this image public</p>
          </div>
        </div>

        <button
          type="button"
          onClick={onSubmitHandler}
          className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#00AD25] to-[#04FF50] text-white px-4 py-2 mt-6 text-sm rounded-lg cursor-pointer"
        >
          <Image className="w-5" /> Generate Images
        </button>
      </div>

      {/* Right card */}
      <div className="w-full max-w-lg p-4 bg-white rounded-lg flex flex-col border border-gray-200 min-h-96">
        <div className="flex items-center gap-3">
          <Image className="w-5 h-5 text-[#00AD25]" />
          <h1 className="text-xl font-semibold">Generated Images</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          {!hasGenerated ? (
            <div className="text-sm flex flex-col items-center gap-5 text-gray-400">
              <Hash className="w-9 h-9 " />
              <p>Enter a topic and click "Generate Images" to get started</p>
            </div>
          ) : (
            <p className="text-gray-500">✨ Your image will appear here...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GenerateImage;