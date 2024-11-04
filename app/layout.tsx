import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <head>
        <title>{process.env.NEXT_PUBLIC_SITE_NAME}</title>
        <meta 
          name="description" 
          content={process.env.NEXT_PUBLIC_SITE_DESCRIPTION} 
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  )
} 