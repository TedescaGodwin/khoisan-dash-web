'use client'

// components

import CardResearchTable from "components/Cards/CardResearchTable.js";

// layout for page

export default function CardResearchReportTable() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardResearchTable />
        </div>
      </div>
    </>
  );
}

