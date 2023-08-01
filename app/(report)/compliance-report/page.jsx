'use client'
// components

import CardComplianceTable from "components/Cards/CardComplianceTable.js";

// layout for page

export default function ComplianceReport() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardComplianceTable />
        </div>
      </div>
    </>
  );
}

