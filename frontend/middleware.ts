import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware({
  ...routing,
  defaultLocale: 'uz'
});

export const config = {
  matcher: ['/((?!_next|favicon.ico|.*\\..*).*)']
};
