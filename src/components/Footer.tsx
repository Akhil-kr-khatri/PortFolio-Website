const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-white/10">
      <div className="container mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Akhil Kumar Khatri. Built with React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
