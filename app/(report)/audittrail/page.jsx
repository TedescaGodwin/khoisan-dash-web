

// components

import CardAuditTrailTable from "components/Cards/CardAuditTrailTable.js";

// layout for page

export default function AuditTrail() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardAuditTrailTable />
        </div>
      </div>
    </>
  );
}

