import { FooterStatus } from "./type";

export const statusConfig: Record<FooterStatus, { label: string; color: string; glow: string }> = {
  initial: {
    label: '',
    color: 'bg-gray-500',
    glow: 'shadow-[0_0_8px_rgba(107,114,128,0.6)]'
  },
  ready: { label: 'Ready', color: 'bg-green-500', glow: 'shadow-[0_0_8px_rgba(34,197,94,0.6)]' },
  processing: {
    label: 'Processing',
    color: 'bg-yellow-400',
    glow: 'shadow-[0_0_8px_rgba(250,204,21,0.6)]'
  },
  failed: { label: 'Failed', color: 'bg-red-500', glow: 'shadow-[0_0_8px_rgba(239,68,68,0.6)]' }
}