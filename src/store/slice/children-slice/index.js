import { createSlice } from "@reduxjs/toolkit";
const products = [
    {
        id: 1,
        name: "GIRLS QUILTED JACKET BASIC F/S - LIGHT PINK",
        href: "#",
        price: "2,716 PKR",
        description: "GIRLS QUILTED JACKET BASIC F/S - LIGHT PINK",
        options: "8 colors",
        imageSrc:
            "https://cdn.shopify.com/s/files/1/0102/7755/2164/products/Z628150656_4_540x.jpg?v=1669116231",
        imageAlt:
            "Eight shirts arranged on table in black, olive, grey, blue, white, red, mustard, and green.",
    },
    {
        id: 2,
        name: "BOYS CHARACTER QUILTED JACKET - BLUE",
        href: "#",
        price: "2,995 PKR",
        description:
            "Look like a visionary CEO and wear the same black t-shirt every day.",
        options: "Black",
        imageSrc:
            "https://cdn.shopify.com/s/files/1/0102/7755/2164/products/DSC01364_540x.jpg?v=1672060525",
        imageAlt: "Front of plain black t-shirt.",
    },
    {
        id: 3,
        name: "GIRLS SWEATER FUN - BLACK",
        href: "#",
        price: "1,916 PKR",
        description:
            "Look like a visionary CEO and wear the same black t-shirt every day.",
        options: "Black",
        imageSrc:
            "https://cdn.shopify.com/s/files/1/0102/7755/2164/products/IMG_1283_e46b49e7-80b2-4642-a8be-07b2411549ae_540x.jpg?v=1666698056",
        imageAlt: "Front of plain black t-shirt.",
    },
    {
        id: 4,
        name: "GIRLS SWEATER YARN DIED - MULTI",
        href: "#",
        price: "2,495 PKR",
        description:
            "Look like a visionary CEO and wear the same black t-shirt every day.",
        options: "Black",
        imageSrc:
            "https://cdn.shopify.com/s/files/1/0102/7755/2164/products/DSC01276_540x.jpg?v=1672059984",
        imageAlt: "Front of plain black t-shirt.",
    },
    {
        id: 5,
        name: "BOYS SWEATER BP10-22 - BLACK/YELLOW",
        href: "#",
        price: "2,395 PKR",
        description:
            "Look like a visionary CEO and wear the same black t-shirt every day.",
        options: "Black",
        imageSrc:
            "https://cdn.shopify.com/s/files/1/0102/7755/2164/products/IMG_9528_37e65325-78ca-4373-a0ff-8837de17e555_360x.jpg?v=1665647083",
        imageAlt: "Front of plain black t-shirt.",
    },
    {
        id: 6,
        name: "BOYS 2 PCS SUIT TIE DYE-BLACK",
        href: "#",
        price: ".2,195 PKR",
        description:
            "Look like a visionary CEO and wear the same black t-shirt every day.",
        options: "Black",
        imageSrc:
            "https://cdn.shopify.com/s/files/1/0102/7755/2164/products/z618710804_4_360x.jpg?v=1667371788",
        imageAlt: "Front of plain black t-shirt.",
    },
];

const initialState = {
    value: products,
};

export const slice = createSlice({
    name: "Children",
    initialState,
    reducers: {},
});

//export const { increment, decrement, } = childrenSlice.actions

export default slice.reducer;
