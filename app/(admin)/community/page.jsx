'use client'

// components
import CommunitySettings from "components/Cards/CommunitySettings";

// layout for page


export default function Community() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <CommunitySettings />
        </div>

      </div>
    </>
  );
}

