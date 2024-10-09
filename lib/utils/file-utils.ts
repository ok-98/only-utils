import { and, andAsync } from 'boolchain/nodeps';
import type { PathLike } from 'node:fs';
import { OptionalT } from 'only-types';

const fs = () => require('fs');
const fsAsync = async () => require('fs/promises');

export const fileExtists = async (path: PathLike): Promise<boolean> =>
  await andAsync(pathAccess, isFile)(path);

export const fileExtistsSync = (path: PathLike): boolean =>
  and(pathAccessSync, isFileSync)(path);

export const dirExtists = async (path: PathLike): Promise<boolean> =>
  await andAsync(pathAccess, isDirectory)(path);

export const dirExtistsSync = (path: PathLike): boolean =>
  and(pathAccessSync, isDirectorySync)(path);

/**
 * Represents the access mode for a file.
 * It can be one of the following values: 'visible', 'readable', 'writable', 'executable'.
 */
type AccessMode = 'visible' | 'readable' | 'writable' | 'executable';

/**
 * Converts an access mode string to its corresponding numeric value.
 * @param mode - The access mode string. Can be one of 'visible', 'readable', 'writable', or 'executable'.
 * @returns The numeric value corresponding to the access mode string, or undefined if the mode is invalid.
 */
const accesModeToNumber = (mode: OptionalT<AccessMode>) => {
  const { constants } = fs();
  switch (mode) {
    case 'visible':
      return constants.F_OK;
    case 'readable':
      return constants.R_OK;
    case 'writable':
      return constants.W_OK;
    case 'executable':
      return constants.X_OK;
    default:
      return undefined;
  }
};

/**
 * Checks if a file or directory exists at the specified path.
 * @param path - The path to check.
 * @param mode - The access mode to use (optional).
 * @returns A promise that resolves to `true` if the path exists and is accessible, or `false` otherwise.
 */
export const pathAccess = async (
  path: PathLike,
  mode?: AccessMode,
): Promise<boolean> => {
  const { access } = await fsAsync();
  try {
    await access(path, accesModeToNumber(mode));
    return true;
  } catch {
    return false;
  }
};

/**
 * Checks if a file or directory exists at the specified path.
 *
 * @param path - The path to check.
 * @param mode - The access mode to use for checking. Defaults to `fs.constants.F_OK`.
 * @returns `true` if the file or directory exists, `false` otherwise.
 */
export const pathAccessSync = (path: PathLike, mode?: AccessMode): boolean => {
  const { accessSync } = fs();
  try {
    accessSync(path, accesModeToNumber(mode));
    return true;
  } catch {
    return false;
  }
};

/**
 * Creates a directory if it does not already exist.
 * @param path - The path of the directory to create.
 */
export const mkDirIfNotExists = async (path: string): Promise<void> => {
  const { mkdir } = await fsAsync();
  if (!(await pathAccess(path))) {
    await mkdir(path);
  }
};

/**
 * Creates a directory if it does not already exist.
 * @param path - The path of the directory to create.
 */
export const mkDirIfNotExistsSync = (path: PathLike): void => {
  const { mkdirSync } = fs();
  if (!pathAccessSync(path)) {
    mkdirSync(path);
  }
};

/**
 * Returns the size of a file in bytes.
 * @param filePath - The path of the file to check.
 */
export const getFileSize = async (filePath: PathLike): Promise<boolean> => {
  const { stat } = await fsAsync();
  const stats = await stat(filePath);
  return stats.size;
};

/**
 * Returns the size of a file in bytes.
 * @param filePath - The path of the file to check.
 */
export const getFileSizeSync = (filePath: PathLike): boolean => {
  const { statSync } = fs();
  const stats = statSync(filePath);
  return stats.size;
};

/**
 * Checks if a path is a directory.
 * @param path - The path to check.
 * @returns `true` if the path is a directory, `false` otherwise.
 */
export const isDirectory = async (path: PathLike): Promise<boolean> => {
  const { stat } = await fsAsync();
  const stats = await stat(path);
  return stats.isDirectory();
};

/**
 * Checks if the given path is a directory synchronously.
 *
 * @param path - The path to check.
 * @returns Returns `true` if the path is a directory, `false` otherwise.
 */
export const isDirectorySync = (path: PathLike): boolean => {
  const { statSync } = fs();
  const stats = statSync(path);
  return stats.isDirectory();
};

/**
 * Checks if a path is a file.
 * @param path - The path to check.
 * @returns `true` if the path is a file, `false` otherwise.
 */
export const isFile = async (path: PathLike): Promise<boolean> => {
  const { stat } = await fsAsync();
  const stats = await stat(path);
  return stats.isFile();
};

/**
 * Checks if a file exists at the given path.
 *
 * @param path - The path to the file.
 * @returns True if the file exists, false otherwise.
 */
export const isFileSync = (path: PathLike): boolean => {
  const { statSync } = fs();
  const stats = statSync(path);
  return stats.isFile();
};
