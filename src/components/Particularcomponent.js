import React, { useState } from "react";
import { Addcontact, Bookmark, Options, Startrating } from "../icons/icons";

const Particularcomponent = ({ indiData }) => {
  const [rate, setRate] = useState(
    Math.floor(indiData.rating_review_score / 2)
  );
  const [toolkit, setToolkit] = useState(false);
  // console.log(indiData);
  return (
    <div className="w-3/4 mx-auto border-2 h-auto bg-gray-200 p-2 rounded " >
      <div className="flex items-center gap-5 justify-between ">
        <div className="flex gap-5">
          <img src={indiData.source.icon} className="h-5 w-5" alt={indiData.source.name}></img>
          <p className="text-xs font-sans">
            <span className="font-bold">{indiData.reviewer_name} </span>wrote a
            review at <span className="font-bold">{indiData.source.name}</span>
          </p>
        </div>
        <div className="icons flex gap-1">
          <Addcontact />
          <Bookmark />
          <Options />
        </div>
      </div>
      <div className="star flex flex-row gap-3 ">
        <div className="flex items-center">
          {Array(5)
            .fill("")
            .map((e, idx) =>
              idx < rate ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="orange"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                  />
                </svg>
              )
            )}
        </div>
        <div>
          <span className="text-[0.55rem]">{indiData.date}</span>
        </div>
      </div>
      <div className="relative">
        {indiData.analytics
          .map((e) => e)
          .map((e, index) =>
            e.sentiment === "Positive" ? (
              <>
                <p
                  className={`cursor-pointer ${
                    e.highlight_indices &&
                    index >= e.highlight_indices.start &&
                    index <= e.highlight_indices.end
                      ? "bg-yellow-200"
                      : e.sentiment === "Positive"
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                  onMouseEnter={() => setToolkit(true)}
                  onMouseLeave={() => setToolkit(false)}
                >
                  {e.sentences}
                </p>
                {toolkit && (
                  <p className="top-[-10px] bg-green-700 text-white p-1 rounded w-1/4">
                    {e.topic.toUpperCase()}
                  </p>
                )}
              </>
            ) : (
              <>
                <p
                  className={`cursor-pointer ${
                    e.highlight_indices &&
                    index >= e.highlight_indices.start &&
                    index <= e.highlight_indices.end
                      ? "bg-yellow-200"
                      : e.sentiment === "Positive"
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                  onMouseEnter={() => setToolkit(true)}
                  onMouseLeave={() => setToolkit(false)}
                >
                  {e.sentences}
                </p>
                {toolkit && (
                  <p className="top-[-10px] bg-red-700 text-white p-1 rounded w-1/4">
                    {e.topic.toUpperCase()}
                  </p>
                )}
              </>
            )
          )}
      </div>
    </div>
  );
};

export default Particularcomponent;
