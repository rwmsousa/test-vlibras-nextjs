import tags from '../utils/tags';

/*eslint-disable */
export default function Reset() {
  let elements: string | any[] | null;

  const reset = () => {
    //contrast
    if (elements)
      for (let i = 0; i < elements.length; i += 1) {
        const tag = elements[i];

        tag.style.removeProperty('background');
        tag.style.removeProperty('color');
        tag.style.removeProperty('border');
        tag.style.removeProperty('text-decoration');

        if (tag.classList.contains('toolbar')) {
          tag.style.background = 'white';
          tag.style.border = '1px solid black';
        }

        if (tag.classList.contains('a11yIcon')) {
          tag.style.border = '1px solid black';
        }

        if (
          tag.classList.contains('containerToolbar')
        ) {
          tag.style.border = '1px solid transparent';
        }

        if (tag.classList.contains('floatingIcon')) {
          tag.style.background = '#003F86';
          tag.style.color = 'white';
          tag.style.border = '1px solid white';
        }
      }
    localStorage.setItem('storageContrast', JSON.stringify(1));

    // text style
    if (elements)
      for (let i = 0; i < elements.length; i += 1) {
        const tag = elements[i];

        if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
          tag.style.removeProperty('font-family');
        }
      }
    localStorage.setItem('storageTextStyle', JSON.stringify(1));

    // zoom page
    if (elements)
      for (let i = 0; i < elements.length; i += 1) {
        const tag = elements[i];

        if (!tag.parentElement?.classList.contains('divButtonToolbar')) {
          tag.style.removeProperty('font-size');
          tag.style.removeProperty('transform');
        }
      }
    localStorage.setItem('storageZoomPage', JSON.stringify(1));

    // Libras
    localStorage.setItem('storageLibras', JSON.stringify(1));

  };

  if (typeof window !== 'undefined') elements = tags();

  return (
   
    <div
      className='divButtonToolbar'
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '1px solid transparent',
      }}>
      <button
        type='button'
        style={{
          padding: '2px 4px',
          border: '1px solid black !important',
          borderRadius: '7px',
          cursor: 'pointer',
          background: '#f1f1f1',
        }}
        className='a11yIcon'
        onClick={reset}>
          <svg 
          className='iconToolbar'
          xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 96 960 960" width="25">
            <path d="M120 1016V726q0-78.85 56-134.425Q232 536 310 536h60V196q0-24.75 17.625-42.375T430 136h100q24.75 0 42.375 17.625T590 196v340h60q78.85 0 134.425 55.575Q840 647.15 840 726v290H120Zm60-60h105V826q0-12.75 9-21.375T315.5 796q12.5 0 21 8.625T345 826v130h105V826q0-12.75 9-21.375T480.5 796q12.5 0 21 8.625T510 826v130h105V826q0-12.75 9-21.375T645.5 796q12.5 0 21 8.625T675 826v130h105V726q0-54.167-37.917-92.083Q704.167 596 650 596H310q-54.167 0-92.083 37.917Q180 671.833 180 726v230Zm350-420V196H430v340h100Z" />
          </svg>
      </button>
      <p
        style={{
          margin: '0',
          padding: '0',
          fontSize: '8px',
          color: '#000000 !important',
          fontFamily: 'Lexend Deca, sans-serif',
        }}
        id='legendButton'>
        Limpar
      </p>
    </div>
  );
}
