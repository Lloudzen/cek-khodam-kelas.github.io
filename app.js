document.getElementById('khodamForm').addEventListener('submit', function(e){
    e.preventDefault();
    const nama = document.getElementById('namaLengkap').value;
    const khodam = generateKhodam(nama);
    document.getElementById('hasil').innerHTML = `<p>Khodam untuk nama ${nama} adalah ${khodam}</p>`;
    document.getElementById('namaLengkap').value = "";
})

function generateKhodam(nama){
    const khodams = [
        `Andi Belalang` ,
        `Rasya Sepur` ,
        `Hanan Sungut Lele` ,
        `Ziad Chindo` ,
        `Ilham Mewing` ,
        `Nelvan Pembangkit` ,
        `Fathur Roblox` ,
        `El Gasing` ,
        `Fajar Gepeng` ,
        `Maikel Jordan` ,
        `Arsyad Batako` ,
        `Dimas Raja Kumis` ,
        `Vito Raja Kikir` ,
        `Aran Kerikil` ,
        `Rangga Psikopat` ,
    ];

    const index = nama.length % khodams.length;
    return khodams[index];
}