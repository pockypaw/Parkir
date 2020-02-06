/*BUG : 1. Data kosong hanya bisa menampung 1 nilai
        2. Belum ada Function keluarParkir
        3. Tidak menggunakan OOP
        4. Data Pencarian belum di sesuaikan dengan pilihan  */
function createParkir(slot) {
    var parkir = [];
    var no = 1;
    var y = 0;
    var z = 1;
    var pilihan = prompt("1. Masukan No. Plat\n2.Cari No. Plat");
    var inputData = prompt("Cari Data No. Plat");
    console.log("Slot | PLAT | STATUS")

    for (i = 0; i < slot; i++) {

        if (pilihan == 1) {
            do {
                inputParkir = prompt(no);
                if (parkir.indexOf(inputParkir) > -1) {
                    alert("Mobil dengan plat itu sudah terparkir");
                } else {
                    parkir[i] = inputParkir;
                }

            } while (parkir[i] != inputParkir);

        }
        min = 1;
        if (parkir[i] == "" || parkir[i] == undefined) {
            if (min>0) {
                console.log("SLOT TERKECIL BELUM TERISI : ", no);
                
            }
        }
        if (parkir[i] == inputData) {
            console.log("Mobil dengan plat No.", parkir[i], "tersebut sudah parkir berada di slot.", no);

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
}

var x;
do {
    x = prompt("Masukan Banyak Slot")
} while (isNaN(x))
var test = createParkir(x);
