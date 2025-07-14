var giris_deger = document.getElementById("giris");
function girisYap() {
    const kullanici = document.getElementById("kullanici").value;
    const sifre = document.getElementById("sifre").value;

    // Sabit kullanıcı kontrolü
    if (kullanici === "TURANOVA_SOFTWARE_TUNAHAN_admin151,i4ıu1" && sifre === "HJFJYG7fujnkhıyfwe23'^)=81A") {
        document.getElementById("mesaj").textContent = "Giriş başarılı!";
        document.getElementById("mesaj").style.color = "green";
        document.getElementById("mesaj").textContent = "Giriş başarılı. Yönlendiriliyor...";
        document.getElementById("mesaj").style.color = "green";

        // 2 saniye sonra yönlendir
        setTimeout(() => {
            window.location.href = "anasayfa.html"; // yönlendirme yapılacak sayfa
        }, 2000);
        // İsteğe bağlı olarak yönlendirme:
        // window.location.href = "anasayfa.html";
    } else if (kullanici === "Turanova_Software_Sefailh2ACavdar" && sifre === "JHLYL3BYRKBJJGASDSJYGBa'303!")
    {
        document.getElementById("mesaj").textContent = "Giriş başarılı!";
        document.getElementById("mesaj").style.color = "green";
        document.getElementById("mesaj").textContent = "Giriş başarılı. Yönlendiriliyor...";
        document.getElementById("mesaj").style.color = "green";

        // 2 saniye sonra yönlendir
        setTimeout(() => {
            window.location.href = "anasayfa.html"; // yönlendirme yapılacak sayfa
        }, 2000);
    }
    else {
        document.getElementById("mesaj").textContent = "Hatalı kullanıcı adı veya şifre.";
        document.getElementById("mesaj").style.color = "red";
    }
}
const harfToMors = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..',
    'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
    'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
    'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--',
    '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.',
    ' ': '/' // boşluk için
};

// Ters sözlük: Mors -> Harf
const morsToHarf = {};
for (let harf in harfToMors) {
    morsToHarf[harfToMors[harf]] = harf;
}

function yaziToMors() {
    const giris = document.getElementById("metin").value.toUpperCase();
    let sonuc = "";

    for (let i = 0; i < giris.length; i++) {
        const harf = giris[i];
        if (harfToMors[harf]) {
            sonuc += harfToMors[harf] + " ";
        } else {
            sonuc += "? ";
        }
    }

    document.getElementById("morsSonuc").textContent = sonuc.trim();
}

function morsToYazi() {
    const morsGiris = document.getElementById("mors").value.trim();
    const kodlar = morsGiris.split(" ");
    let sonuc = "";

    for (let i = 0; i < kodlar.length; i++) {
        const kod = kodlar[i];
        if (morsToHarf[kod]) {
            sonuc += morsToHarf[kod];
        } else if (kod === "/") {
            sonuc += " ";
        } else {
            sonuc += "?";
        }
    }

    document.getElementById("yaziSonuc").textContent = sonuc;
}