import React from "react";

// components

import CardStatuses from "components/Cards/CardStatuses.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function AuditTrail() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardStatuses color="dark"/>
        </div>
      </div>
    </>
  );
}

AuditTrail.layout = Admin;
