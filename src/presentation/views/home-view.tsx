import { ChangeEvent, useState } from "react";
import nlwLogo from "@/presentation/assets/icons/logo-nlw-expert.svg";
import { NewNoteCard } from "@/presentation/components/NewNoteCard";
import { NoteCard } from "@/presentation/components/NoteCard";
import { SaveNotes } from "@/domain/use-cases/SaveNotes";
import { Note } from "@/domain/models/Note";
import { LoadNotes } from "@/domain/use-cases/LoadNotes";
import { TranscribeRecording } from "@/domain/use-cases/TranscribeRecording";

interface HomeViewProps {
  saveNotes: SaveNotes;
  loadNotes: LoadNotes;
  transcribeRecording: TranscribeRecording;
}

export function HomeView({
  saveNotes,
  loadNotes,
  transcribeRecording,
}: HomeViewProps) {
  const [notes, setNotes] = useState<Note[]>(() => {
    const savedNotes = loadNotes.load();
    return savedNotes;
  });
  const [search, setSearch] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSearch(value);
  };

  const startRecordingSearch = () => {
    transcribeRecording.transcribe(setSearch);
  };
  const stopRecordingSearch = () => {
    transcribeRecording.stop();
  };

  const filteredNotes =
    search !== ""
      ? notes.filter((notes) =>
          notes.content.toLowerCase().includes(search.toLowerCase())
        )
      : notes;

  const onNoteCreated = (content: string) => {
    const newNote = {
      id: crypto.randomUUID(),
      date: new Date(),
      content,
    };

    const result = [newNote, ...notes];

    setNotes(result);

    saveNotes.save(result);
  };

  const onNoteDeleted = (id: string) => {
    const result = notes.filter((note) => note.id !== id);

    setNotes(result);
    saveNotes.save(result);
  };

  return (
    <div className="mx-auto max-w-6xl my-12 space-y-6 px-5">
      <img src={nlwLogo} alt="nlw-experts-logo" />

      <form className="w-full">
        <input
          type="text"
          onFocus={startRecordingSearch}
          value={search}
          onKeyDown={stopRecordingSearch}
          onChange={handleSearch}
          placeholder="Busque em suas notas"
          className="w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500 "
        />
      </form>

      <div className="h-px bg-slate-700 "></div>

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-cards gap-6">
        <NewNoteCard
          transcribeRecording={transcribeRecording}
          onNoteCreated={onNoteCreated}
        />

        {filteredNotes.map((note) => {
          return (
            <NoteCard key={note.id} note={note} onNoteDeleted={onNoteDeleted} />
          );
        })}
      </div>
    </div>
  );
}
