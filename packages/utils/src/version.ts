/**
 * Web App version in format like "\d+.\d+".
 */
export type Version = string;

/**
 * Returns 1 in case, version "a" is greater than "b".
 * Returns 0 in case, version "a" equal to "b".
 * Returns -1 in case, version "a" is lower than "b".
 * @param a - first version.
 * @param b - second version.
 */
export function compareVersions(a: string, b: string): number {
  const aParts = a.split('.');
  const bParts = b.split('.');
  const len = Math.max(aParts.length, bParts.length);

  // Iterate over each part of version and compare them. In case, part is
  // missing, assume its value is equal to 0.
  for (let i = 0; i < len; i++) {
    const aVal = parseInt(aParts[i] || '0');
    const bVal = parseInt(bParts[i] || '0');

    if (aVal === bVal) {
      continue;
    }
    return aVal > bVal ? 1 : -1;
  }
  return 0;
}
