'use client'

// components
import MemberSettings from "components/Cards/MemberSettings";
import NotesSettings from "components/Cards/CardNotesSettings";
// layout for page


export default function Member() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <MemberSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4"> 
          <NotesSettings />
        </div>
      </div>
    </>
  );
}

