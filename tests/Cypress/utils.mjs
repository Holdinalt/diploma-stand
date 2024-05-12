export const standURL = process.env.CI ? 'https://holdinalt.github.io/diploma-stand/' : 'http://localhost:3000/diploma-stand/'

export const VALID_URL = 'https://playwright.dev/'

export const VALID_EMAIL = 'email@mail.ru'
export const INVALID_EMAIL = 'email'
export const VALID_PASSWORD = '123qwery'
export const INVALID_PASSWORD = '123'

export const getOrigin = (urlStr) => {
    const url = new URL(urlStr);
    return url.origin;
}

export const SPEED_ANS = 'Hello World!'
export const SPEED_URL = 'file:///F:/projects/web/diploma-stand/src/static/hello_world.html'
