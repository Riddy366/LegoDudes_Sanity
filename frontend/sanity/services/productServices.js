import { client } from "../client";

//Funksjon som henter alt innhold av type products fra Sanity
export async function fetchAllProducts() {
    const data = await client.fetch(`*[_type == "products"]{
        _id,
        productname,
        "slug": producturl.current,
        price,
        stock,
        "catname": category->categorytitle,
        "catslug": category->categoryurl.current,
        "image": productimage.asset->url
    }`)
    return data
}//GROQ spørring, etter {} velger hvilket innhold som sanity skal hente av produktene.
    // catslug er et object som henter kategoriurl og peker på current slug.
    // asset henter url, vi får ut sanity sin cdn format.

    //Funksjon som henter et produkt basert på en slug:
export async function fetchProductBySlug(slug) {
    const data = await client.fetch(`*[_type == "products" && producturl.current == $slug]{
        productname,
        description,
        "categoryname": category->categorytitle,
        "catslug": category->categoryurl.current,
        "image": productimage.asset->url,
        price,
        stock
    }`, {slug})
    return data
}
