import flynnaofficialLogo from 'figma:asset/11dc02e9b2f89b5d56704c1a6ae951fbbbb06044.png';

interface FLynnaLogoProps {
  className?: string;
  showByline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function FLynnaLogo({ className = "", showByline = true, size = 'md' }: FLynnaLogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-7',
    lg: 'h-8'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img 
        src={flynnaofficialLogo}
        alt="Flynna - By AllOnline"
        className={`${sizeClasses[size]} w-auto object-contain`}
      />
    </div>
  );
}