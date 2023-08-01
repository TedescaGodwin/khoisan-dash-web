'use client'

// components
import LodgementSettings from "components/Cards/LodgementSettings";

// layout for page

export default function Lodgement() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <LodgementSettings />
        </div>

      </div>
    </>
  );
}

