'use client'

// components
import ResearchSettings from "components/Cards/ResearchSettings";
import NotesSettings from "components/Cards/CardNotesSettings";
// layout for page

export default function Member() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <ResearchSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4"> 
          <NotesSettings />
        </div>
      </div>
    </>
  );
}
