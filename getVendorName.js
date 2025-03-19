export default function getVendorName  (fileName) {
  if (fileName.includes('__')) return fileName.split('__')[0] ?? ''
  if (fileName.includes(' ')) return fileName.split(' ')[0] ?? ''
  return fileName.replace('.xlsx', '') ?? ''
}
