export default function Footer() {
  return (
    <footer className="bg-muted py-6 text-center text-muted-foreground">
      <div className="container mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} AdOptimal: Campus Connect. All rights reserved.</p>
        <p className="text-sm mt-1">Powered by TraeAI</p>
      </div>
    </footer>
  );
}
