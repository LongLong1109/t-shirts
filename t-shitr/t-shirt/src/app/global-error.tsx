'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        {error.digest && <p>Error Code: {error.digest}</p>}
        <button onClick={reset}>Try again</button>
      </body>
    </html>
  )
}
