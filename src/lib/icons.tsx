import { createElement } from 'react';
import type { IconType } from 'react-icons';
import {
  LuBookOpen,
  LuGlobe,
  LuGraduationCap,
  LuHandHeart,
  LuHeart,
  LuHeartPulse,
  LuLeaf,
  LuMonitor,
  LuSprout,
  LuUsers,
} from 'react-icons/lu';

// Icons an admin can pick for a program; the key is what the database stores
export const programIcons: Record<string, { label: string; icon: IconType }> = {
  education: { label: 'Graduation cap', icon: LuGraduationCap },
  book: { label: 'Book', icon: LuBookOpen },
  globe: { label: 'Globe', icon: LuGlobe },
  sprout: { label: 'Sprout', icon: LuSprout },
  leaf: { label: 'Leaf', icon: LuLeaf },
  health: { label: 'Heart pulse', icon: LuHeartPulse },
  heart: { label: 'Heart', icon: LuHeart },
  care: { label: 'Helping hand', icon: LuHandHeart },
  people: { label: 'People', icon: LuUsers },
  digital: { label: 'Computer', icon: LuMonitor },
};

export function ProgramIcon({ name, className }: { name: string; className?: string }) {
  return createElement(programIcons[name]?.icon ?? LuHeart, { className, 'aria-hidden': true });
}
