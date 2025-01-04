import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>My Website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {/* Topbar */}
        <div className="topbar">
          <div className="links">
            <a href="/">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#publications">Publications</a>
          </div>
        </div>

        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <p>© Jennifer Suyoun Lee. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
