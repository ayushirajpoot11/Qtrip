const products = [
    {
        product_link: "https://www.amazon.in/Japanese-Lotus-Flower-Seeds-Rainbow/dp/B0D8R822K3/ref=zg_bsnr_g_garden_d_sccl_1/259-7632065-3662005?psc=1",
        price: "$120",
        img_link: "https://m.media-amazon.com/images/I/61cYMbqVahL._SX679_.jpg",
        title: "Japanese Lotus Flower Seeds,Dwarf Rainbow Lotus Flower SeedS for Home Decor ( Pack Of 10)",
        desc: `About this item
Authentic Seeds: Genuine Japanese lotus flower seeds, perfect for growing beautiful aquatic plants.
Stunning Blooms: Produces vibrant pink, yellow, or white lotus flowers that float gracefully on water.
Easy to Grow: Suitable for ponds, water gardens, or containers with 15-30 cm of water depth.
Hardy Plants: Lotus can survive winters if planted in 60-90 cm deep water or lifted during cold months.
Decorative Value: Lotus flowers make excellent cut flowers and their seeds are edible.`,
        category: "flower"
    },
    {
        product_link: "https://www.amazon.in/Smartivity-Infinity-Organizer-Educational-Construction/dp/B0913FVM4X/ref=sr_1_57_sspa?dib=eyJ2IjoiMSJ9.kQx_E4qSsv6QE8oDuycjFTcY10Vn6jyp32P3eTPQRKU78Ch5Czkk4Jzky_g7KjVyX-g-T9GgSX0g6KRY7RIpdf4wlJtw2i8ASMFrVIE8h9xRTNGeDyWCteC0o7EFFMD9cXZVvVEXE9FOqcThe2P531kb6lghbRuykij2-LXaeIEqXCzPLNkKhaQ8LdxWgeJqB-QQt4cY79tfPT7PYX2qLKdDfDvSXkSVrUKkKLHRUcfLk3MfqcVlS05wmcZIdxADueBbT9cXiYtXY1Ur-gyovncWcZf-fCOaT2KlQkhLfiA.-qf5Moj6_2WrPMJuAoHu-9oXCASlBVufwrBJcSoPTms&dib_tag=se&keywords=toys&qid=1722095387&sr=8-57-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&psc=1",
        price: "$150",
        img_link: "https://m.media-amazon.com/images/I/61LmFaqwo4L._SX679_.jpg",
        title: `TEC TAVAKKAL Set of 6 Big Size Full Action Toy Figure Jungle Cartoon Wild Animal Toys Figure Playing Set for Kids Current Animals Lion Giraffe Elephant`,
        desc: `About this item
Authentic Seeds: Genuine Japanese lotus flower seeds, perfect for growing beautiful aquatic plants.
Stunning Blooms: Produces vibrant pink, yellow, or white lotus flowers that float gracefully on water.
Easy to Grow: Suitable for ponds, water gardens, or containers with 15-30 cm of water depth.
Hardy Plants: Lotus can survive winters if planted in 60-90 cm deep water or lifted during cold months.
Decorative Value: Lotus flowers make excellent cut flowers and their seeds are edible.`,
        category: "toy"
    },
    {
        product_link: "https://www.amazon.in/Smartivity-Infinity-Organizer-Educational-Construction/dp/B0913FVM4X/ref=sr_1_57_sspa?dib=eyJ2IjoiMSJ9.kQx_E4qSsv6QE8oDuycjFTcY10Vn6jyp32P3eTPQRKU78Ch5Czkk4Jzky_g7KjVyX-g-T9GgSX0g6KRY7RIpdf4wlJtw2i8ASMFrVIE8h9xRTNGeDyWCteC0o7EFFMD9cXZVvVEXE9FOqcThe2P531kb6lghbRuykij2-LXaeIEqXCzPLNkKhaQ8LdxWgeJqB-QQt4cY79tfPT7PYX2qLKdDfDvSXkSVrUKkKLHRUcfLk3MfqcVlS05wmcZIdxADueBbT9cXiYtXY1Ur-gyovncWcZf-fCOaT2KlQkhLfiA.-qf5Moj6_2WrPMJuAoHu-9oXCASlBVufwrBJcSoPTms&dib_tag=se&keywords=toys&qid=1722095387&sr=8-57-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9idGY&psc=1",
        price: "$150",
        img_link: "https://m.media-amazon.com/images/I/71oJ9LbPwFL._SY450_.jpg",
        title: `Smartivity Infinity Calendar & Desk/Stationary Organizer for Kids Age 8-14 Years | Birthday Gifts for Girls & Boys | DIY Science Toys for Kids 8,9,10,11,12,13,14 YearsI STEM Wooden Construction Game`,
        desc: `About this item
    Authentic Seeds: Genuine Japanese lotus flower seeds, perfect for growing beautiful aquatic plants.
    Stunning Blooms: Produces vibrant pink, yellow, or white lotus flowers that float gracefully on water.
    Easy to Grow: Suitable for ponds, water gardens, or containers with 15-30 cm of water depth.
    Hardy Plants: Lotus can survive winters if planted in 60-90 cm deep water or lifted during cold months.
    Decorative Value: Lotus flowers make excellent cut flowers and their seeds are edible.`,
        category: "toy"

    },
    {
        product_link: "https://www.amazon.in/Munchkin-Family-Daughter-Dolls-Accessories/dp/B07Z3SDKC4/ref=sr_1_21_sspa?content-id=amzn1.sym.3b50a488-7752-41b6-9436-b4a3cf304306%3Aamzn1.sym.3b50a488-7752-41b6-9436-b4a3cf304306&dib=eyJ2IjoiMSJ9.bduixAKCD3uZHiMkgFw1VnpJPZCmzznSJo_THBeQDwXRKgO9dZjvfvbd_fD2KbPNqV2_NIyi1c1WNsBReLE1kX1nXZg5fGW_pi5Ep2LR2tZkwMe2ngDNA7N3D-8W1qtygv6G25DWTMpay_qAo-0cVjdDhuRiErTFavrZ_YthkL4Pi7lX6C08J9mtdt4vouThP-qbfNyPfgk7jZKk8ze7nNnkEn4Me6sRuqjPvYMTxoJs4BWpT6yd309nTDfhRkmHf-r21sBswzFQf7mdWoFYJB8VumOZSA8KZXelOmWXfQ8.-3ed1XYmMzIhBVmXUNUTwC8138HPG7zTMjKZluM2OzU&dib_tag=se&keywords=barbie+dolls&pd_rd_r=4b3fd1db-2ec4-436f-bfba-4ab1327a3df5&pd_rd_w=D7UEo&pd_rd_wg=Vphwz&pf_rd_p=3b50a488-7752-41b6-9436-b4a3cf304306&pf_rd_r=ZZ4THPECQQENVKWHGPT1&qid=1722096340&sr=8-21-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
        price: "$200",
        img_link: `https://m.media-amazon.com/images/I/81pT4LzjQvL._SX450_.jpg`,
        title: `Family Doll Set Includes Mom. Dad, Daughter & Son Dolls and Accessories - Assorted Colours`,
        desc: `About this item
    Authentic Seeds: Genuine Japanese lotus flower seeds, perfect for growing beautiful aquatic plants.
    Stunning Blooms: Produces vibrant pink, yellow, or white lotus flowers that float gracefully on water.
    Easy to Grow: Suitable for ponds, water gardens, or containers with 15-30 cm of water depth.
    Hardy Plants: Lotus can survive winters if planted in 60-90 cm deep water or lifted during cold months.
    Decorative Value: Lotus flowers make excellent cut flowers and their seeds are edible.`,
        category: "doll"

    },

    {
        product_link: `https://www.amazon.in/Mini-Gifts-Foldable-Furniture-Accessories/dp/B0B7GH3CFQ/ref=sr_1_7?content-id=amzn1.sym.3b50a488-7752-41b6-9436-b4a3cf304306%3Aamzn1.sym.3b50a488-7752-41b6-9436-b4a3cf304306&dib=eyJ2IjoiMSJ9.bduixAKCD3uZHiMkgFw1VnpJPZCmzznSJo_THBeQDwXRKgO9dZjvfvbd_fD2KbPNXbR75ZNYibq2ncZIkd3T76LxmgxZCBtJnmbdlP6UATBruBy1WAXFfUvQHu6tHAUt9PHbP71uqbJnSJ5-UYcy3eLoUcKEnaNeWZ1E1nLZmoF-SoI5e4HJBEIpfrdMClxGSnil6k123QqdDKNBZ6AGlgQIPz-znfN3jqnLSA0Fv_r4TL9umsMWs3qUVJlKpSxAgfuTKoOz3I3WIL_h182A6YaZTts6HV7BcumwnmisXVQ.pJ9fYGyJsBdzH_jvsnuK22Ot4V1Nrn3shgertUc8hXk&dib_tag=se&keywords=barbie+dolls+for+girl&pd_rd_r=9296cdf3-b9cc-4c97-9e10-c2f387833da8&pd_rd_w=mLcEw&pd_rd_wg=fIJZN&pf_rd_p=3b50a488-7752-41b6-9436-b4a3cf304306&pf_rd_r=PTY05J1JW0VG2BNBD1SH&qid=1722096886&sr=8-7`,
        price: "$300",
        img_link: `https://m.media-amazon.com/images/I/811ZiVjNeGL._SY450_.jpg`,
        title: `Mini Gifts - Doll Set for Girls, Foldable Doll with 10 Doll Furniture Accessories, 1 Baby Doll, 4 Doll Dresses, 3 Socks & 1 Bag`,
        desc: `About this item
    Authentic Seeds: Genuine Japanese lotus flower seeds, perfect for growing beautiful aquatic plants.
    Stunning Blooms: Produces vibrant pink, yellow, or white lotus flowers that float gracefully on water.
    Easy to Grow: Suitable for ponds, water gardens, or containers with 15-30 cm of water depth.
    Hardy Plants: Lotus can survive winters if planted in 60-90 cm deep water or lifted during cold months.
    Decorative Value: Lotus flowers make excellent cut flowers and their seeds are edible.`,
        category: "doll"

    },
    {
        product_link: `https://www.amazon.in/Litleo-Wooden-Multi-Design-Artificial-Flowers/dp/B0CC8YBM3H/ref=sr_1_7?crid=2J9WJ75GTDO6O&dib=eyJ2IjoiMSJ9.UG9Qsn0tZZ4iuvEwB74T3kbCoGVYkiPPer5-j_OCRXOCLXcPMSdn8heMoqDY98Pc-dG_KToY-STyqmnrJu_C27mhMbGlPeZ0AcN0yji6xwiSp9NFl4MCRxkCbjqKWTzoHTSeVVprDpsvmui0lZdxomxLT6kp7vu3M9f1BcDufS0YZhGmF_C7rjmKJWeq3s009NwcN9wZQI4aUwghb4w5zHANVTuSHJ48twvdHfYxiUr9XFmmD5eP8Z3Ue8B5sQBqoG9r18qS3iQPFwelYMqRRJd6MMX3KI8S83JjEKO9RVU.-DVTl3_dl3aDfNhHQc-j0bTt0H_cWo42h7sVj8ghvJo&dib_tag=se&keywords=flowers&qid=1722097057&sprefix=flowers%2Caps%2C242&sr=8-7&th=1`,
        price: "$250",
        img_link: `https://m.media-amazon.com/images/I/9110HwfQavL._SX679_.jpg`,
        title: `Litleo Wooden Pot with Multi-Design Dry Artificial Flowers - Perfect Home Office Gift Elegant Décor Delight (Dry Orange)`,
        desc: `About this item
    Authentic Seeds: Genuine Japanese lotus flower seeds, perfect for growing beautiful aquatic plants.
    Stunning Blooms: Produces vibrant pink, yellow, or white lotus flowers that float gracefully on water.
    Easy to Grow: Suitable for ponds, water gardens, or containers with 15-30 cm of water depth.
    Hardy Plants: Lotus can survive winters if planted in 60-90 cm deep water or lifted during cold months.
    Decorative Value: Lotus flowers make excellent cut flowers and their seeds are edible.`,
        category: "flower"

    },
    {
        product_link: `https://www.amazon.in/TIED-RIBBONS-Polyester-Artificial-Decoration/dp/B0CK5THX2W/ref=sr_1_47?crid=2J9WJ75GTDO6O&dib=eyJ2IjoiMSJ9.UG9Qsn0tZZ4iuvEwB74T3kbCoGVYkiPPer5-j_OCRXOCLXcPMSdn8heMoqDY98Pc-dG_KToY-STyqmnrJu_C27mhMbGlPeZ0AcN0yji6xwiSp9NFl4MCRxkCbjqKWTzoHTSeVVprDpsvmui0lZdxomxLT6kp7vu3M9f1BcDufS0YZhGmF_C7rjmKJWeq3s009NwcN9wZQI4aUwghb4w5zHANVTuSHJ48twvdHfYxiUr9XFmmD5eP8Z3Ue8B5sQBqoG9r18qS3iQPFwelYMqRRJd6MMX3KI8S83JjEKO9RVU.-DVTl3_dl3aDfNhHQc-j0bTt0H_cWo42h7sVj8ghvJo&dib_tag=se&keywords=flowers&qid=1722097057&sprefix=flowers%2Caps%2C242&sr=8-47`,
        price: "$350",
        img_link: `https://m.media-amazon.com/images/I/71GCk5PN1IL._SY879_.jpg`,
        title: `TIED RIBBONS Pack of 2 Artificial Hydrangea Dahlia Flowers Bunch for Home Decor Vase Pot Living Room Bedroom Office Table Decoration Items (Pot not Included) (Multi, 24.1 cm)`,
        desc: `About this item
    Authentic Seeds: Genuine Japanese lotus flower seeds, perfect for growing beautiful aquatic plants.
    Stunning Blooms: Produces vibrant pink, yellow, or white lotus flowers that float gracefully on water.
    Easy to Grow: Suitable for ponds, water gardens, or containers with 15-30 cm of water depth.
    Hardy Plants: Lotus can survive winters if planted in 60-90 cm deep water or lifted during cold months.
    Decorative Value: Lotus flowers make excellent cut flowers and their seeds are edible.`,
        category: "flower"

    }



];
document.addEventListener("DOMContentLoaded", () => {

    all();
    // get All the category

    let categories = [];

    products.filter((pro) => {
        if (!categories.includes(pro.category)) {
            categories.push(pro.category);
        }
    });

    let sidebar = document.getElementById("sidebar")
    let link = "";
    categories.map((category) => {
        link += ` <p class="p1" id="${category}" onclick="sorted('${category}')" >${category}</p>
        `
    })

    sidebar.innerHTML += link;
    // sidebar



    // fetchCourses();
});


function all() {

    const productEle = document.getElementById("content");

    if (!productEle) {
        console.error("Content element not found.");
        return;
    }

    let card = "";
    products.map((product) => {
        let updatedDesc = "";
        let updatedtitle = sort_title(product.title)
        console.log(updatedtitle)
        if (product.desc.length > 100) {
            updatedDesc = product.desc.substring(0, 100) + "...";
        } else {
            updatedDesc = product.desc;
        }

        card += `
            <div class="product">
                <a href="${product.product_link}">
                    <span class="product__price">${product.price}</span>
                    <img class="product__image" src="${product.img_link}">
                    <h1 class="product__title">${updatedtitle}</h1>
                    <hr />
                    <p class="product__desc">${updatedDesc}</p>
                </a>
                <a href="#" class="product__cart btn cart">To Cart</a>
                <a href="#" class="product__btn btn">Buy Now</a>
            </div>
        `;
    });


    productEle.innerHTML = card;

}

function sorted(category) {
    const productEle = document.getElementById("content");
    let card = "";
    products.filter((product) => {

        if (product.category == category) {
            let updatedDesc = "";
            let updatedtitle = sort_title(product.title)
            if (product.desc.length > 100) {
                updatedDesc = product.desc.substring(0, 100) + "...";
            } else {
                updatedDesc = product.desc;
            }

            card += `
            <div class="product">
                <a href="${product.product_link}">
                    <span class="product__price">${product.price}</span>
                    <img class="product__image" src="${product.img_link}">
                    <h1 class="product__title">${updatedtitle}</h1>
                    <hr />
                    <p class="product__desc">${updatedDesc}</p>
                </a>
                <a href="#" class="product__cart btn cart">To Cart</a>
                <a href="#" class="product__btn btn">Buy Now</a>
            </div>
            `;
        }

    });

    if (category == "all") {
        all();
        return
    }
    productEle.innerHTML = card;

}


function sort_title(title) {
    return title.substring(0, 50).concat("...");

}

async function fetchCourses() {
    try {
        const response = await fetch("http://localhost:8088/courses/");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error fetching courses:', error);
    }
}
