import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'IntegraSyS - Desenvolvedor Full-Stack',
  description: 'Especialista em sistemas financeiros, trading analytics, ERPs e plataformas educacionais. Transformo ideias complexas em soluções digitais escaláveis.',
  icons: {
    icon: [
      {
        url: '/icon/2.png',//'/icon/perfil3.jpeg', // Caminho absoluto
        sizes: 'any',
      },
      {
        url: '/icon/2.png', 
        type: 'image/svg+xml',
      }
    ],
  }

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark" //light, dark
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}