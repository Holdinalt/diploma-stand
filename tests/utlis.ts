export const standURL = 'http://localhost:3000'

export const VALID_URL = 'https://playwright.dev/'

export const VALID_EMAIL = 'email@mail.ru'
export const INVALID_EMAIL = 'email'
export const VALID_PASSWORD = '123qwery'
export const INVALID_PASSWORD = '123'

export const getOrigin = (urlStr: string) => {
    const url = new URL(urlStr);
    return url.origin;
}
