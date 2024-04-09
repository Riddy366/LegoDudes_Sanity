import { client } from "../client";

export async function fetchAllProducts() {
    const data = await client.fetch(`*[_type == "products"]{
        _id,
        productname,
        price,
        stock,
        "catname": category->categorytitle,
        "catslug": category->categoryurl.current,
        "image": productimage.asset->url
    }`) //GROQ spørring, etter {} velger hvilket innhold som sanity skal hente av produktene.
    // catslug er et object som henter kategoriurl og peker på current slug.
    // asset henter url, vi får ut sanity sin cdn format.
    return data
}
