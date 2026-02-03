/**
 * Get relative path from base to target
 */
export declare function getRelativePath(basePath: string, targetPath: string): string;
/**
 * Join multiple path segments
 */
export declare function joinPaths(...paths: string[]): string;
/**
 * Normalize a path
 */
export declare function normalizePath(filePath: string): string;
/**
 * Get the file name from a path
 */
export declare function getFileName(filePath: string): string;
/**
 * Get the directory name from a path
 */
export declare function getDirectoryName(filePath: string): string;
/**
 * Get file extension
 */
export declare function getFileExtension(filePath: string): string;
