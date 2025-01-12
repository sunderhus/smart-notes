import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import * as Dialog from "@radix-ui/react-dialog";
import { useMemo } from "react";
import { X } from "lucide-react";

type NoteCardProps = {
  note: {
    id: string;
    date: Date;
    content: string;
  };
  onNoteDeleted: (id: string) => void;
};

export function NoteCard({ note, onNoteDeleted }: NoteCardProps) {
  const formattedDate = useMemo<string>(() => {
    return formatDistanceToNow(note.date, {
      addSuffix: true,
      locale: ptBR,
    });
  }, [note.date]);

  const handleDeleteNote = () => {
    onNoteDeleted(note.id);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger
        type="button"
        className="flex flex-col rounded-md text-left bg-slate-800 p-5 gap-3 overflow-hidden relative outline-none hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400"
      >
        <span className="text-sm font-medium text-slate-300">
          {formattedDate}
        </span>
        <p className="text-sm leading-6 text-slate-400">{note.content}</p>

        <div className="absolute bottom-0 right-0 left-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed  bg-black/60" />
        <Dialog.Content className="fixed overflow-hidden left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-2xl w-full h-1/2 bg-slate-700 rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute right-0 bg-slate-600 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>
          <div className="flex flex-1 flex-col gap-3 p-5 ">
            <span className="text-sm font-medium text-slate-300">
              {formattedDate}
            </span>
            <p className="text-sm leading-6 text-slate-400">{note.content}</p>
          </div>

          <button
            type="button"
            onClick={handleDeleteNote}
            className="w-full bg-slate-800 py-4 text-center text-sm text-slate-300 outline-none group/deleteButton"
          >
            Deseja{" "}
            <span className="text-red-400 group-hover/deleteButton:underline">
              apagar esta nota
            </span>
            ?
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
