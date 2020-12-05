export interface Advertisement {
    id: number;
    image: string; // Has to be 1348x512, but not 100% sure
    link: string;
    alt: string;
}

export class Advertisement {
    id = 0;
    image = ''; // Has to be 1348x512, but not 100% sure
    link = '';
    alt = '';
}
