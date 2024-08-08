import React from 'react'
import Skeleton from '.'

export const SkeletonText = ({ width }: { width: string }) => (
  <Skeleton className={`h-4 ${width}`} />
)

export const SkeletonImage = ({ width, height }: { width: string; height: string }) => (
  <Skeleton className={`${width} ${height}`} />
)

export const SkeletonButton = ({ width }: { width: string }) => (
  <Skeleton className={`h-12 ${width}`} />
)
