import { TypedEnum } from "./util";
export declare const ListingType: {
    readonly featured: "FEATURED";
    readonly trending: "TRENDING";
    readonly topRated: "TOP_RATED";
    readonly basic: "BASIC";
};
export type ListingType = TypedEnum<typeof ListingType>;
export type Listing = {
    name: string;
    id: string;
    type: ListingType;
};
export declare const createListing: (listing: Listing) => Listing;
