import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-muted-foreground mb-2">
            Made with <Heart className="inline w-4 h-4 text-red-500 mx-1" /> by Abdul Rehman Afzal
          </p>
          <p className="text-sm text-muted-foreground">
            © 2024 Abdul Rehman Afzal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;