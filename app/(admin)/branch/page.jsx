'use client'

// components
import BranchSettings from "components/Cards/BranchSettings";


export default function Branch() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <BranchSettings />
        </div>

      </div>
    </>
  );
}
