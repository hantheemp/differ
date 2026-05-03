export const fileExtensionMap: Record<string, string> = {
  js: 'javascript',
  jsx: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  json: 'json',
  html: 'html',
  css: 'css',
  md: 'markdown',
  java: 'java',
  sql: 'sql',
  prc: 'sql',
  trg: 'sql',
  pkg: 'sql',
  pkb: 'sql',
  vb: 'vb',
  aspx: 'vb' 
}
export function getLanguageFromFilename(filename: string): string {
  const ext = filename.split('.').pop()?.toLowerCase() || ''
  
  return fileExtensionMap[ext] || 'plaintext'
}