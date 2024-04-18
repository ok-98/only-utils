import { andAsync } from 'boolchain';
import { accessSync, mkdirSync, PathLike } from 'fs';
import { access, mkdir, stat } from 'fs/promises';

export const fileExtists = async (path: PathLike) =>
  await andAsync(pathAccess, isFile)(path);

export const dirExtists = async (path: PathLike) =>
  await andAsync(pathAccess, isDirectory)(path);

/**
 * Checks if a directory exists at the specified path.
 * @param path - The path to the directory.
 * @returns A boolean indicating whether the directory exists or not.
 */
export const pathAccess = async (path: PathLike) => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

/**
 * Checks if a directory exists synchronously.
 * @param path - The path of the directory to check.
 * @returns `true` if the directory exists, `false` otherwise.
 */
export const pathAccessSync = (path: PathLike) => {
  try {
    accessSync(path);
    return true;
  } catch {
    return false;
  }
};

/**
 * Creates a directory if it does not already exist.
 * @param path - The path of the directory to create.
 */
export const mkDirIfNotExists = async (path: string) => {
  if (!(await pathAccess(path))) {
    await mkdir(path);
  }
};

/**
 * Creates a directory if it does not already exist.
 * @param path - The path of the directory to create.
 */
export const mkDirIfNotExistsSync = (path: PathLike) => {
  if (!pathAccessSync(path)) {
    mkdirSync(path);
  }
};

/**
 * Returns the size of a file in bytes.
 * @param filePath - The path of the file to check.
 */
export const getFileSize = async (filePath: PathLike) => {
  const stats = await stat(filePath);
  return stats.size;
};

/**
 * Checks if a path is a directory.
 * @param path - The path to check.
 * @returns `true` if the path is a directory, `false` otherwise.
 */
export const isDirectory = async (path: PathLike) => {
  const stats = await stat(path);
  return stats.isDirectory();
};

/**
 * Checks if a path is a file.
 * @param path - The path to check.
 * @returns `true` if the path is a file, `false` otherwise.
 */
export const isFile = async (path: PathLike) => {
  const stats = await stat(path);
  return stats.isFile();
};
