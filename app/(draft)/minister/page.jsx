'use client'
// components
import MinisterSettings from "components/Cards/MinisterSettings";
import NotesSettings from "components/Cards/CardNotesSettings";
// layout for page

export default function Member() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <MinisterSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4"> 
          <NotesSettings />
        </div>
      </div>
    </>
  );
}

