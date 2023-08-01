'use client'

// components

import CardCustomsCustomaryTable from "components/Cards/CardCustomsCustomaryTable.js";

// layout for page

export default function CustomsCustomaryTable() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardCustomsCustomaryTable />
        </div>
      </div>
    </>
  );
}

