import { useEffect, useState } from 'react'

export default function useCountUp(target, isVisible, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isVisible, target, duration])

  return value
}
