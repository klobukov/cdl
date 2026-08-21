import { useEffect } from 'react'

export default function useClickOutside(
  elementClass: string,
  onOutsideClick: () => void,
) {
  useEffect(() => {
    const handler = (e: Event): void => {
      const target = e.target as HTMLElement
      if (target.closest(`.${elementClass}`)) return
      onOutsideClick()
    }

    document.body.addEventListener('click', handler)
    return () => document.body.removeEventListener('click', handler)
  }, [elementClass, onOutsideClick])
}
