export const items = [
  { id: '0', name: 'Kawaki', telephone: '1111 000', favorite: false },
  { id: '1', name: 'Neiji', telephone: '1111 123', favorite: true }
];

export function getContactById(id) {
  return items.find(item => item.id === id);
}