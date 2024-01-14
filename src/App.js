function hitungHargaAkhir(hargaAwal, ppn, diskon) {
  // Konversi persentase PPN dan diskon ke desimal
  const ppnDecimal = ppn / 100;
  const diskonDecimal = diskon / 100;

  // Hitung harga setelah PPN
  const hargaSetelahPpn = hargaAwal * (1 + ppnDecimal);

  // Hitung diskon dari harga setelah PPN
  const potonganDiskon = hargaSetelahPpn * diskonDecimal;

  // Hitung harga akhir setelah dikurangi diskon
  const hargaAkhir = hargaSetelahPpn - potonganDiskon;

  return hargaAkhir.toFixed(2);
}

// Contoh penggunaan
const hargaAwal = 1200000;
const ppn = 15;
const diskon = 25;

const hargaAkhir = hitungHargaAkhir(hargaAwal, ppn, diskon);

console.log(`Harga Akhir: ${hargaAkhir}`);
