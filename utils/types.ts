// types.ts

export interface Product {
    id: string | null;
    name: string;
    image: string | null;
    description: string;
    category: string | null;
    price: number;
    storePrice: number;
    quantity: number;
    link: string;
    new: number;
    inventoryStatus: string;
}
