'use client'

// components
import PremierSettings from "components/Cards/PremierSettings";
import NotesSettings from "components/Cards/CardNotesSettings";
// layout for page

export default function Member() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <PremierSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4"> 
          <NotesSettings />
        </div>
      </div>
    </>
  );
}

