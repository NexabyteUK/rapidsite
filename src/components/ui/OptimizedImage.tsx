import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  loading?: 'lazy' | 'eager'
  width?: number
  height?: number
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  loading = 'lazy',
  width,
  height
}: OptimizedImageProps) => {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  // Try WebP version first, fallback to original if it fails
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, '.webp')
  const shouldTryWebp = src !== webpSrc && !hasError

  const handleError = () => {
    if (shouldTryWebp && imgSrc === webpSrc) {
      // WebP failed, fallback to original
      setImgSrc(src)
    } else {
      setHasError(true)
    }
  }

  // Use WebP if available, otherwise use original
  const finalSrc = shouldTryWebp ? webpSrc : src

  return (
    <img
      src={hasError ? src : finalSrc}
      alt={alt}
      className={className}
      loading={loading}
      onError={handleError}
      width={width}
      height={height}
      decoding="async"
    />
  )
}

export default OptimizedImage