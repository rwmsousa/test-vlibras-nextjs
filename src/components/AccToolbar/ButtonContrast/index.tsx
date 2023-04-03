import ToolbarButton from '../ToolbarButton';
import tags from '../utils/tags';

/*eslint-disable */
let elements: string | any[] | null;

export const changeContrast = (init: boolean) => {
  elements = tags()
  const storageContrast = localStorage.getItem('storageContrast')

  if (!init) {
    if (storageContrast == '1') localStorage.setItem('storageContrast', JSON.stringify(2))
    if (storageContrast == '2') localStorage.setItem('storageContrast', JSON.stringify(3))
    if (storageContrast == '3') localStorage.setItem('storageContrast', JSON.stringify(4))
    if (storageContrast == '4') localStorage.setItem('storageContrast', JSON.stringify(1))
  }

  if (localStorage.getItem('storageContrast') != '1') {
    let primary = '';
    let secondary = '';

    switch (localStorage.getItem('storageContrast')) {
      case '2':
        primary = 'blue'
        secondary = 'white'
        break
      case '3':
        primary = 'black'
        secondary = 'yellow'
        break
      case '4':
        primary = 'white'
        secondary = 'black'
        break
    }

    if (elements)
      for (let i = 0; i < elements.length; i += 1) {
        const tag = elements[ i ];
        tag.style.color = primary
        tag.style.background = secondary

        if (tag.tagName !== 'H1'
          && tag.tagName !== 'H2'
          && tag.tagName !== 'H3'
          && tag.tagName !== 'H4'
          && tag.tagName !== 'H5'
          && tag.tagName !== 'H6'
          && tag.tagName !== 'P'
          && tag.tagName !== 'A'
        ) tag.style.border = `1px solid ${ primary }`


        if (tag.tagName === 'BUTTON') {
          tag.style.background = primary;
          tag.style.color = secondary;
          tag.style.border = `1px solid ${ primary } important`
        }

        if (tag.tagName === 'A') {
          tag.style.textDecoration = 'underline';
        }

        if (tag.classList.contains('floatingIcon')) {
          tag.style.background = `${ primary } !important`
          tag.style.color = secondary
          tag.style.border = `2px solid ${ primary } !important`
          if (localStorage.getItem('storageContrast') === '4') tag.style.border = `2px solid ${ secondary }`
        }

        if (tag.parentElement.classList.contains('toolbar') ||
          tag.parentElement.classList.contains('containerToolbar') ||
          tag.parentElement.classList.contains('divButtonToolbar') ||
          (tag.tagName == 'p' && tag.parentElement.classList.contains('divButtonToolbar')) ||
          tag.getAttribute('id') == '__next' ||
          tag.classList.contains('toolbar') ||
          tag.parentElement?.classList.contains('toolbar') ||
          tag.classList.contains('containerToolbar') ||
          tag.parentElement?.classList.contains('containerToolbar') ||
          tag.classList.contains('divButtonToolbar') ||
          tag.parentElement?.classList.contains('divButtonToolbar') ||
          tag.classList.contains('a11yIcon') ||
          tag.parentElement?.classList.contains('a11yIcon') ||
          tag.getAttributeNames().includes('vw') ||
          tag.getAttributeNames().includes('vw-access-button') ||
          tag.parentElement?.classList.contains('vw-access-button') ||
          tag.classList.contains('vw-plugin-wrapper') ||
          tag.parentElement?.classList.contains('vw-plugin-wrapper') ||
          tag.classList.contains('vpw-settings') ||
          tag.parentElement?.classList.contains('vpw-settings') ||
          tag.classList.contains('vpw-settings-btn') ||
          tag.parentElement?.classList.contains('vpw-settings-btn') ||
          tag.classList.contains('vpw-settings-btn-close') ||
          tag.parentElement?.classList.contains('vpw-settings-btn-close') ||
          tag.classList.contains('vpw-box') ||
          tag.parentElement?.classList.contains('vpw-box') ||
          tag.getAttribute('id') == 'gameContainer' ||
          tag.parentElement?.getAttribute('id') == 'gameContainer' ||
          tag.parentElement?.getAttributeNames().includes('vp-rate-button') ||
          tag.parentElement?.classList.contains('vp-rate-button')
        ) {
          tag.style.removeProperty('background');
          tag.style.removeProperty('border');
          tag.style.removeProperty('color');
        }
      }

  } else {
    if (elements)
      for (let i = 0; i < elements.length; i += 1) {
        const tag = elements[ i ];

        tag.style.removeProperty('color');
        tag.style.removeProperty('background');
        tag.style.removeProperty('text-decoration');

        if (tag.tagName === 'BUTTON') tag.style.removeProperty('border');

        if (tag.classList.contains('floatingIcon')) {
          tag.style.background = '#003F86'
          tag.style.color = 'white'
          tag.style.border = '1px solid #003F86'
        }
      }
  }
};

export default function ContrastButton() {

  let storageContrast: string | null;

  // const changeContrast = (init: boolean) => {
  //   elements = tags()
  //   const storageContrast = localStorage.getItem('storageContrast')

  //   if (!init) {
  //     if (storageContrast == '1') localStorage.setItem('storageContrast', JSON.stringify(2))
  //     if (storageContrast == '2') localStorage.setItem('storageContrast', JSON.stringify(3))
  //     if (storageContrast == '3') localStorage.setItem('storageContrast', JSON.stringify(4))
  //     if (storageContrast == '4') localStorage.setItem('storageContrast', JSON.stringify(1))
  //   }

  //   if (localStorage.getItem('storageContrast') != '1') {
  //     let primary = '';
  //     let secondary = '';

  //     switch (localStorage.getItem('storageContrast')) {
  //       case '2':
  //         primary = 'blue'
  //         secondary = 'white'
  //         break
  //       case '3':
  //         primary = 'black'
  //         secondary = 'yellow'
  //         break
  //       case '4':
  //         primary = 'white'
  //         secondary = 'black'
  //         break
  //     }

  //     if (elements)
  //       for (let i = 0; i < elements.length; i += 1) {
  //         const tag = elements[ i ];
  //         tag.style.color = primary
  //         tag.style.background = secondary

  //         if (tag.tagName !== 'H1'
  //           && tag.tagName !== 'H2'
  //           && tag.tagName !== 'H3'
  //           && tag.tagName !== 'H4'
  //           && tag.tagName !== 'H5'
  //           && tag.tagName !== 'H6'
  //           && tag.tagName !== 'P'
  //           && tag.tagName !== 'A'
  //         ) tag.style.border = `1px solid ${ primary }`


  //         if (tag.tagName === 'BUTTON') {
  //           tag.style.background = primary;
  //           tag.style.color = secondary;
  //           tag.style.border = `1px solid ${ primary } important`
  //         }

  //         if (tag.tagName === 'A') {
  //           tag.style.textDecoration = 'underline';
  //         }

  //         if (tag.classList.contains('floatingIcon')) {
  //           tag.style.background = `${ primary } !important`
  //           tag.style.color = secondary
  //           tag.style.border = `2px solid ${ primary } !important`
  //           if (localStorage.getItem('storageContrast') === '4') tag.style.border = `2px solid ${ secondary }`
  //         }

  //         if (tag.parentElement.classList.contains('toolbar') ||
  //         tag.parentElement.classList.contains('containerToolbar') ||
  //           tag.parentElement.classList.contains('divButtonToolbar') ||
  //           tag.classList.contains('enabled') ||
  //         (tag.tagName == 'p' && tag.parentElement.classList.contains('divButtonToolbar'))
  //         ) {
  //           tag.style.removeProperty('background');
  //           tag.style.removeProperty('border');
  //           tag.style.removeProperty('color');
  //         }
  //       }

  //   } else {
  //     if (elements)
  //       for (let i = 0; i < elements.length; i += 1) {
  //         const tag = elements[ i ];

  //         tag.style.removeProperty('color');
  //         tag.style.removeProperty('background');
  //         tag.style.removeProperty('text-decoration');

  //         if (tag.tagName === 'BUTTON') tag.style.removeProperty('border');

  //         if (tag.classList.contains('floatingIcon')) {
  //           tag.style.background = '#003F86'
  //           tag.style.color = 'white'
  //           tag.style.border = '1px solid #003F86'
  //         }
  //       }
  //   }
  // };

  if (typeof window !== 'undefined') {
    storageContrast = localStorage.getItem('storageContrast') || null;

    if (!storageContrast) {
      localStorage.setItem('storageContrast', JSON.stringify(1));
    } else if (localStorage.getItem('storageContrast') != '1') {
      changeContrast(true)
    }
  }

  return (
    <ToolbarButton
      icon='contrast'
      alt='Contraste'
      onClick={ () => changeContrast(false) }
    />
  );
}
