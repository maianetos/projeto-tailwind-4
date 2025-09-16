import { ChevronDown } from "lucide-react";
import { ElementType } from "react";

export interface NavItemProps {
  title: string;
  icon: ElementType;
}
export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-zinc-300"
    >
      <Icon className="h-5 w-5 text-zinc-900" />
      <span className="font-medium text-zinc-900 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
    </a>
  );
}
