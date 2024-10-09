import { RemoveFunctions } from '../../only-utils.ts';
import { removeFunctions } from '../object-utils.ts';

/**
 * Represents a mobile device.
 */
export type MobileDevice =
  | 'Android'
  | 'BlackBerry'
  | 'iPhone'
  | 'iPad'
  | 'iPod'
  | 'Opera Mini'
  | 'IEMobile'
  | 'WPDesktop';

const _isMobile = (userAgentString?: string): MobileDevice | false => {
  const userAgent = userAgentString || navigator?.userAgent;
  if (!userAgent) {
    throw new Error(
      'Either provide the user agent string or run this code in a browser environment. ',
    );
  }
  if (userAgent.match(/Android/i)) {
    return 'Android';
  }
  if (userAgent.match(/BlackBerry/i)) {
    return 'BlackBerry';
  }
  if (userAgent.match(/iPhone/i)) {
    return 'iPhone';
  }
  if (userAgent.match(/iPad/i)) {
    return 'iPad';
  }
  if (userAgent.match(/iPod/i)) {
    return 'iPod';
  }
  if (userAgent.match(/Opera Mini/i)) {
    return 'Opera Mini';
  }
  if (userAgent.match(/IEMobile/i)) {
    return 'IEMobile';
  }
  if (userAgent.match(/WPDesktop/i)) {
    return 'WPDesktop';
  }
  return false;
};

/**
 * Checks if the user agent corresponds to a mobile device.
 * @param userAgent - The user agent string.
 * @returns A boolean indicating whether the user agent corresponds to a mobile device.
 */
export const isMobile = (userAgent?: string): boolean => !!_isMobile(userAgent);

export const isAndroid = (userAgent?: string): boolean =>
  _isMobile(userAgent) === 'Android';

export const isBlackBerry = (userAgent?: string): boolean =>
  _isMobile(userAgent) === 'BlackBerry';

export const isIOS = (userAgent?: string): boolean =>
  ['iPhone', 'iPad', 'iPod'].includes(_isMobile(userAgent) as string);

export const isIPhone = (userAgent?: string): boolean =>
  _isMobile(userAgent) === 'iPhone';

export const isIPad = (userAgent?: string): boolean =>
  _isMobile(userAgent) === 'iPad';

export const isIPod = (userAgent?: string): boolean =>
  _isMobile(userAgent) === 'iPod';

export const isOperaMini = (userAgent?: string): boolean =>
  _isMobile(userAgent) === 'Opera Mini';

export const isIEMobile = (userAgent?: string): boolean =>
  _isMobile(userAgent) === 'IEMobile';

export const isWPDesktop = (userAgent?: string): boolean =>
  _isMobile(userAgent) === 'WPDesktop';

/**
 * Checks if the device is a desktop based on the user agent.
 * @param userAgent - The user agent string of the device.
 * @returns A boolean value indicating whether the device is a desktop.
 */
export const isDesktop = (userAgent?: string): boolean => {
  const ua = userAgent || navigator?.userAgent;
  if (!ua) {
    return false;
  }
  return _isMobile(ua) === false;
};

/**
 * Gets the type of the mobile device based on the user agent.
 * @param userAgent - The user agent string.
 * @returns The type of the mobile device or undefined if it is not a mobile device.
 */
export const getMobileDeviceType = (
  userAgent?: string,
): MobileDevice | undefined => {
  const mobileDevice = _isMobile(userAgent);
  return mobileDevice ? mobileDevice : undefined;
};

/**
 * Retrieves device information.
 * @returns An object containing device information.
 */
export const getDeviceInfo = (): {
  isMobile: boolean;
  isDesktop: boolean;
} & Partial<RemoveFunctions<typeof navigator>> &
  Partial<RemoveFunctions<typeof screen>> &
  Partial<RemoveFunctions<typeof history>> &
  Partial<RemoveFunctions<typeof location>> => {
  const userAgent = navigator?.userAgent;
  return removeFunctions({
    isMobile: isMobile(userAgent),
    isDesktop: isDesktop(userAgent),
    devicePixelRatio: window?.devicePixelRatio,
    ...(location ?? {}),
    ...(history ?? {}),
    ...(navigator ?? {}),
    ...(screen ?? {}),
  });
};
