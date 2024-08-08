interface SkeletonProps {
  className?: string
}

const Skeleton = ({ className }: SkeletonProps) => {
  return <div className={`bg-gray-300 animate-pulse ${className}`} />
}

export default Skeleton
