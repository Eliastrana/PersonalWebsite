// spawnItemsList.ts
export type SpawnItem = {
    id: number;
    type: 'word' | 'image';
    content?: string;
    src?: string;
};

export const spawnItemsList: Array<SpawnItem> = [
    { id: 1, type: 'word', content: 'Hello' },
    { id: 2, type: 'image', src: '/images/image1.png' },
    { id: 3, type: 'word', content: 'World' },
    { id: 4, type: 'image', src: '/images/image2.png' },
    // Add more items as needed
];
