import React from 'react';
import { Building2 } from 'lucide-react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Building2 className="h-6 w-6 text-orange-500" />
      <span className="font-bold text-xl text-white">LuxStay</span>
    </div>
  );
};

export default Logo;