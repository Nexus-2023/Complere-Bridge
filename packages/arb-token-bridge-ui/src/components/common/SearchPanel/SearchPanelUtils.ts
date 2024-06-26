import { twMerge } from 'tailwind-merge'

export const panelWrapperClassnames = twMerge(
  'h-screen w-full bg-[#0D1419] text-white border-[#060B0F] border w-screen',
  'sm:h-auto sm:w-auto sm:min-w-[448px] sm:gap-3 sm:rounded sm:shadow-modal'
)

export function onPopoverClose() {
  document.body.classList.remove('overflow-hidden', 'sm:overflow-visible')
}

export function onPopoverButtonClick() {
  document.body.classList.add('overflow-hidden', 'sm:overflow-visible')
}
