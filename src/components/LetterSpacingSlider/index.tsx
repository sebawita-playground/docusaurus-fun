import React, {useEffect, useState} from 'react';

const LS_SPACING_KEY = 'blog-letter-spacing';
const DEFAULT_SPACING = 0.018;
const MIN_SPACING = 0.001;
const MAX_SPACING = 0.03;
const STEP_SPACING = 0.001;

const LS_FONTSIZE_KEY = 'blog-font-size';
const DEFAULT_FONTSIZE = 1.1;
const MIN_FONTSIZE = 1.0;
const MAX_FONTSIZE = 1.5;
const STEP_FONTSIZE = 0.01;

export default function LetterSpacingSlider(): React.ReactNode {
  const [spacing, setSpacing] = useState<number>(DEFAULT_SPACING);
  const [fontSize, setFontSize] = useState<number>(DEFAULT_FONTSIZE);

  useEffect(() => {
    const storedSpacing = localStorage.getItem(LS_SPACING_KEY);
    if (storedSpacing) setSpacing(parseFloat(storedSpacing));
    const storedFontSize = localStorage.getItem(LS_FONTSIZE_KEY);
    if (storedFontSize) setFontSize(parseFloat(storedFontSize));
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--blog-letter-spacing', `${spacing}em`);
    localStorage.setItem(LS_SPACING_KEY, String(spacing));
  }, [spacing]);

  useEffect(() => {
    document.documentElement.style.setProperty('--blog-font-size', `${fontSize}rem`);
    localStorage.setItem(LS_FONTSIZE_KEY, String(fontSize));
  }, [fontSize]);

  const rowStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      padding: '0.5rem 1.5rem',
      fontSize: '0.85rem',
      color: 'var(--ifm-color-secondary-darkest)',
    }}>
      <div style={rowStyle}>
        <label htmlFor="font-size-slider" style={{whiteSpace: 'nowrap', minWidth: '160px'}}>
          Font size: {fontSize.toFixed(2)}rem
        </label>
        <input
          id="font-size-slider"
          type="range"
          min={MIN_FONTSIZE}
          max={MAX_FONTSIZE}
          step={STEP_FONTSIZE}
          value={fontSize}
          onChange={e => setFontSize(parseFloat(e.target.value))}
          style={{width: '160px'}}
        />
      </div>
      <div style={rowStyle}>
        <label htmlFor="letter-spacing-slider" style={{whiteSpace: 'nowrap', minWidth: '160px'}}>
          Letter spacing: {spacing.toFixed(3)}em
        </label>
        <input
          id="letter-spacing-slider"
          type="range"
          min={MIN_SPACING}
          max={MAX_SPACING}
          step={STEP_SPACING}
          value={spacing}
          onChange={e => setSpacing(parseFloat(e.target.value))}
          style={{width: '160px'}}
        />
      </div>
    </div>
  );
}
