// Variabel
// var
// let
// const

// Sync

// var name = "Kevin"
// var name = "Yusuf"
// console.log(name)

// let name2 = "Febrisena"
//  name2 = "Fikri"
// console.log(name2);

// const name3 = "Justian"
//  name3 = "Teuku"
// console.log(name3);

// ----------------------------------------------------------

// Type data

// let name = "Kevin"
// let age = 15

// console.log(name, "umur", age, "tahun")
// console.log(`name ${name} umurnya ${age} tahun`);

// // bilangan1 dan bilangan 2
// let bil1 = 8
// let bil2 = 5

// let hasil = bil1 + bil2

// console.log(hasil);


// ------------------------------------------------------


// Function

// function bilangan(bil1, bil2, bil3) {
    
//     let hasil = bil1 + bil2 + bil3
//     // return hasil
//     console.log(hasil);
// }

// bilangan(5,5,20)


// -----------------------------------------------------------------------

function submitData() {
    let name = document.getElementById('input-name').value
    let email = document.getElementById('input-email').value
    let phone = document.getElementById('input-phone').value
    let subject = document.getElementById('input-subject').value
    let message = document.getElementById('input-message').value

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(subject);
    console.log(message);


    if (name == '' ) {
        return alert("Nama wajib diisi")
    } else if (email == '' ) {
        return alert("Email wajib diisi")
    } else if (phone == '' ) {
        return alert("Phone wajib diisi")
    }else if (subject == '' ) {
        return alert("Subject wajib diisi")
    }else if (message == '' ) {
        return alert("Message wajib diisi")
    }

    let emailReceiver = 'samsul@mail.com'

    let a = document.createElement('a') // pembuatan tag anchor / a

    a.href = `mailto:${emailReceiver}?subject=${subject}&body=Hallo my name ${name} 
    
    
    
    ${message} please call me ${phone}`

    a.click() // menjalankan tag ancor/ mengklik tag anchor


    let dataObject = {
        namaLengkap: name,
        email: email,
        phoneNumber: phone,
        subject: subject,
        message: message
    }

    console.log(dataObject);
}


