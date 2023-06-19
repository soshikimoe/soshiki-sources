import { TypedEnum } from "./util"

export const ListingType = {
    featured: "FEATURED",
    trending: "TRENDING",
    topRated: "TOP_RATED",
    basic: "BASIC"
} as const

export type ListingType = TypedEnum<typeof ListingType>

export type Listing = {
    name: string,
    id: string,
    type: ListingType
}

export const createListing = (listing: Listing) => listing