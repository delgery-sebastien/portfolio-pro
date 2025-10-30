// components/CaseImage.tsx
import Image, { ImageProps } from 'next/image'

export default function CaseImage(props: ImageProps) {
  const { className = '', ...rest } = props
  return (
    <Image
      {...rest}
      className={`rounded-xl border border-card ${className}`}
      loading={rest.priority ? undefined : 'lazy'}
    />
  )
}
