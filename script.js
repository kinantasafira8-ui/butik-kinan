
function beli(produk) {
    const nomorWhatsApp = "6281234567890";

    const pesan = "Halo Dago Butik, saya ingin membeli "
                  + produk;

    const link = "https://wa.me/" + nomorWhatsApp
                 + "?text=" + encodeURIComponent(pesan);

    window.open(link, "_blank");
}
