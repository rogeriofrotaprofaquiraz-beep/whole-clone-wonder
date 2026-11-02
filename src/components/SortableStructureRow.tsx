import type { ReactNode } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SortableStructureRow({ id, label, children }: {
  id: string; label: string; children: ReactNode;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id });
  return (
    <div ref={setNodeRef} style={{ transform: CSS.Transform.toString(transform), transition }}
      className={`relative flex items-center gap-2 text-xs ${isDragging ? "z-10 opacity-70 ring-2 ring-ring bg-background" : ""}`}>
      <Button type="button" variant="ghost" size="icon" className="h-8 w-7 shrink-0 touch-none cursor-grab active:cursor-grabbing text-muted-foreground"
        {...attributes} {...listeners} aria-label={`Mover ${label}`} title="Arrastar para reorganizar">
        <GripVertical />
      </Button>
      {children}
    </div>
  );
}