import "./globals.css"; // <-- É ESTA LINHA QUE SALVA O UX/UI!

export const metadata = {
  title: 'Links | Departamento da Pedra',
  description: 'Nossos canais de atendimento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="antialiased">{children}</body>
    </html>
  )
}