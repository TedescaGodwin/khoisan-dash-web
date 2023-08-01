'use client'

// components
import LeaderSettings from "components/Cards/LeaderSettings";
import NotesSettings from "components/Cards/CardNotesSettings";

// layout for page


export default function Leader() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <LeaderSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4"> 
          <NotesSettings />
        </div>
      </div>
    </>
  );
}

