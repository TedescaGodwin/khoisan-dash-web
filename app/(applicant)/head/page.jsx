'use client'

// components
import HeadSettings from "components/Cards/HeadSettings";
import NotesSettings from "components/Cards/CardNotesSettings";


// layout for page


export default function Head() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-8/12 px-4">
          <HeadSettings />
        </div>
        <div className="w-full lg:w-4/12 px-4"> 
          <NotesSettings />
        </div>
      </div>
    </>
  );
}

