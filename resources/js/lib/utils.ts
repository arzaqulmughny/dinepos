import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Convert number to rupiah format
 */
export function rupiahFormatter (number: number) {
    if (number == 0) return "";
    return number.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
}