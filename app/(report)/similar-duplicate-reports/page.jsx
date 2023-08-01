

// components

import CardSimilarDuplicateTable from "components/Cards/CardSimilarDuplicateTable.js";

// layout for page

export default function CardSimilarDuplicate() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full mb-12 px-4">
          <CardSimilarDuplicateTable />
        </div>
      </div>
    </>
  );
}

