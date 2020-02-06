//heelo
function createParkir(slot) {
    var parkir = [, "B30", , "A51"];
    var inputData = "A51";
    var no = 1;
    var y = 0;
    var pilihan = prompt("Masukan Bilangan 1 untuk input data dan 2 untuk lihat data saja");
    console.log("Slot | PLAT | STATUS")

    for (i = 0; i < slot; i++) {

        if (pilihan == 1) {
            do {
                inputParkir = prompt(no);
                if (parkir.indexOf(inputParkir) > -1) {
                    alert("Mobil dengan plat itu sudah terparkir");

                }
                if (inputParkir == "" || inputParkir == parkir[i]) {
                    parkir[i];
                } else {
                    parkir.splice(inputParkir, parkir[i]);
                }
            } while (parkir[i] != inputParkir);
        }
        if (!parkir[i]) {
            console.log(no++, "|", parkir[i], "\t\t| KOSONG");
        }
        else if (parkir[i] != "") {
            y++;
            console.log(no++, "|", parkir[i], "\t| PENUH");
        }

        if (y >= slot) {
            console.log("MOHON MAAF PARKIRAN PENUH");
        }



    }
    no = 1;
    min = 1;
    for (i = 0; i < slot; i++) {

        if (parkir[i] == inputData) {
            console.log("Mobil dengan plat No.", parkir[i], "tersebut sudah parkir berada di slot.", no += 1);

        }
        if (parkir[i] == "" || parkir[i] == undefined) {
            if (min < i) {
                console.log("SLOT TERKECIL BELUM TERISI : ", no);
                break;
            }
        }
    }
}

var x;
do {
    x = prompt("Masukan Banyak Slot")
} while (isNaN(x))
var test = createParkir(x);
// switch (pilihan) {
//     case 1:
//         // code block
//         break;
//     case 2:
//         // code block
//         break;
//     default:
//     // code block
// }
