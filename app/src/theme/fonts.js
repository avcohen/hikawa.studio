// @flow
import { css } from 'styled-components'

export default css`
	@font-face {
		font-family: 'Gravity';
		src: url('/static/fonts/Gravity-UltraLightItalic.woff2') format('woff2'),
			url('/static/fonts/Gravity-UltraLightItalic.woff') format('woff');
		font-style: italic;
		font-weight: 100;
	}
	@font-face {
		font-family: 'Gravity';
		font-style: normal;
		font-weight: 100;
		src: url('/static/fonts/Gravity-UltraLight.otf') format('opentype'), url('/static/fonts/Gravity-UltraLight.ttf') format('ttf'),
			url('/static/fonts/Gravity-UltraLight.woff') format('woff'), url('/static/fonts/Gravity-UltraLight.woff2') format('woff2');
	}

	@font-face {
		font-family: 'Gravity';
		font-style: normal;
		font-weight: 200;
		src: url('/static/fonts/Gravity-Light.otf') format('opentype'), url('/static/fonts/Gravity-Light.ttf') format('ttf'),
			url('/static/fonts/Gravity-Light.woff') format('woff'), url('/static/fonts/Gravity-Light.woff2') format('woff2');
	}
	@font-face {
		font-family: 'Gravity';
		font-style: italic;
		font-weight: 200;
		src: url('/static/fonts/Gravity-LightItalic.otf') format('opentype'),
			url('/static/fonts/Gravity-LightItalic.ttf') format('ttf'), url('/static/fonts/Gravity-LightItalic.woff') format('woff'),
			url('/static/fonts/Gravity-LightItalic.woff2') format('woff2');
	}

	@font-face {
		font-family: 'Gravity';
		font-style: normal;
		font-weight: 300;
		src: url('/static/fonts/Gravity-Book.otf') format('opentype'), url('/static/fonts/Gravity-Book.ttf') format('ttf'),
			url('/static/fonts/Gravity-Book.woff') format('woff'), url('/static/fonts/Gravity-Book.woff2') format('woff2');
	}
	@font-face {
		font-family: 'Gravity';
		font-style: italic;
		font-weight: 300;
		src: url('/static/fonts/Gravity-BookItalic.otf') format('opentype'), url('/static/fonts/Gravity-BookItalic.ttf') format('ttf'),
			url('/static/fonts/Gravity-BookItalic.woff') format('woff'), url('/static/fonts/Gravity-BookItalic.woff2') format('woff2');
	}

	@font-face {
		font-family: 'Gravity';
		font-style: italic;
		font-weight: 400;
		src: url('/static/fonts/Gravity-Italic.otf') format('opentype'), url('/static/fonts/Gravity-Italic.ttf') format('ttf'),
			url('/static/fonts/Gravity-Italic.woff') format('woff'), url('/static/fonts/Gravity-Italic.woff2') format('woff2');
	}
	@font-face {
		font-family: 'Gravity';
		font-style: normal;
		font-weight: 400;
		src: url('/static/fonts/Gravity-Regular.otf') format('opentype'), url('/static/fonts/Gravity-Regular.ttf') format('ttf'),
			url('/static/fonts/Gravity-Regular.woff') format('woff'), url('/static/fonts/Gravity-Regular.woff2') format('woff2');
	}

	@font-face {
		font-family: 'Gravity';
		font-style: normal;
		font-weight: 700;
		src: url('/static/fonts/Gravity-Bold.otf') format('opentype'), url('/static/fonts/Gravity-Bold.ttf') format('ttf'),
			url('/static/fonts/Gravity-Bold.woff') format('woff'), url('/static/fonts/Gravity-Bold.woff2') format('woff2');
	}
	@font-face {
		font-family: 'Gravity';
		font-style: italic;
		font-weight: 700;
		src: url('/static/fonts/Gravity-BoldItalic.otf') format('opentype'), url('/static/fonts/Gravity-BoldItalic.ttf') format('ttf'),
			url('/static/fonts/Gravity-BoldItalic.woff') format('woff'), url('/static/fonts/Gravity-BoldItalic.woff2') format('woff2');
	}
`