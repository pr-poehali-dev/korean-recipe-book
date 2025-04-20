const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Корейская Кулинарная Книга. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
