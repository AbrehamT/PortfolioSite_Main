import React from 'react';

interface SectionTransitionProps {
  fromColor: string;
  toColor: string;
  direction?: 'top-to-bottom' | 'bottom-to-top';
  height?: string;
  withWave?: boolean; // Keeping for backwards compatibility but not using it
}

const SectionTransition: React.FC<SectionTransitionProps> = ({ 
  fromColor, 
  toColor, 
  direction = 'top-to-bottom',
  height = '80px'
}) => {
  // Simple gradient transition with a very smooth blend
  return (
    <div 
      className="w-full" 
      style={{ 
        height, 
        marginTop: '-1px',  // Eliminate gap between sections
        marginBottom: '-1px',
        background: `linear-gradient(${direction === 'top-to-bottom' ? '180deg' : '0deg'}, 
          var(--${fromColor}) 0%, 
          var(--${fromColor}) 30%, 
          var(--${toColor}) 70%, 
          var(--${toColor}) 100%
        )`,
        position: 'relative',
        zIndex: 1
      }}
    />
  );
};

export default SectionTransition; 