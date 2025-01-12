import { TranscribeRecording } from "@/domain/use-cases/TranscribeRecording";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { ChangeEvent, FormEvent, MouseEvent, useState } from "react";
import { toast } from "sonner";

type NewNoteCardProps = {
  onNoteCreated: (content: string) => void;
  transcribeRecording: TranscribeRecording;
};

export function NewNoteCard({
  onNoteCreated,
  transcribeRecording,
}: NewNoteCardProps) {
  const [shouldShowOnboarding, setShouldShowOnboarding] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [content, setContent] = useState("");
  const shouldDisableSaveButton = !content;

  const handleStartEditor = () => {
    setShouldShowOnboarding(false);
  };

  const handleStartRecording = () => {
    try {
      setIsRecording(true);
      setShouldShowOnboarding(false);

      transcribeRecording.transcribe(setContent);
    } catch (error) {
      const recordingError = error as Error;
      setIsRecording(false);
      toast.error(recordingError.message);
    }
  };

  const handleStopRecording = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsRecording(false);
    transcribeRecording.stop();
  };

  const handleContentChanged = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);

    const isEmptyContent = event.target.value === "";
    setShouldShowOnboarding(isEmptyContent);
  };
  const resetContent = () => {
    setContent("");
    setShouldShowOnboarding(true);
  };

  const handleSaveNote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (content === "") {
      return;
    }
    onNoteCreated(content);
    toast.success("Note created");
    resetContent();
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md bg-slate-700 p-5 gap-3 flex flex-col outline-none text-left hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400">
        <span className="text-sm font-medium text-slate-300">Add note</span>
        <p className="text-sm leading-6 text-slate-400">
          Start recording using your voice or typing
        </p>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed  bg-black/60" />
        <Dialog.Content className="fixed overflow-hidden inset-0 w-full h-screen md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl  md:h-1/2 md:inset-auto bg-slate-700  md:rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute right-0 bg-slate-600 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>

          <form onSubmit={handleSaveNote} className="flex flex-1 flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5 ">
              <span className="text-sm font-medium text-slate-300">
                Add new note
              </span>

              {shouldShowOnboarding ? (
                <p className="text-sm leading-6 text-slate-400">
                  Start{" "}
                  <button
                    type="button"
                    onClick={handleStartRecording}
                    className="font-medium text-lime-400 hover:underline"
                  >
                    recording a audio note
                  </button>{" "}
                  or{" "}
                  <button
                    type="button"
                    onClick={handleStartEditor}
                    className="font-medium text-lime-400 hover:underline"
                  >
                    write the note
                  </button>
                </p>
              ) : (
                <textarea
                  autoFocus
                  value={content}
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  onChange={handleContentChanged}
                ></textarea>
              )}
            </div>

            {isRecording ? (
              <button
                type="button"
                onClick={handleStopRecording}
                className="w-full flex items-center gap-2 justify-center bg-slate-900 py-4 text-center text-sm font-medium text-slate-300 outline-none hover:text-slate-100"
              >
                <div className="size-3 rounded-full bg-red-500 animate-pulse" />{" "}
                Recording! (click to stop)
              </button>
            ) : (
              <button
                type="submit"
                disabled={shouldDisableSaveButton}
                className="w-full bg-lime-400 py-4 text-center text-sm font-medium text-lime-950 outline-none hover:bg-lime-500 disabled:bg-slate-500 disabled:cursor-not-allowed"
              >
                Save note
              </button>
            )}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
