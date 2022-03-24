



// let namaSiswa = ['Febrisena', 'Aditya', 'Reza','Teja', 20] 

// console.log('dataAsli', namaSiswa);
// console.log(namaSiswa[2]);

// let dataFebrisena = {
//     nama : 'Febrisena',
//     tglLahir: '20-05-1999',
//     alamat: 'Tangerang' 
// }

// let dataAditya = {
//     nama : 'Febrisena',
//     tglLahir: '20-05-1999',
//     alamat: 'Tangerang' 
// }


// let dataSiswa = [
//     {
//         nama: 'Febrisena',
//         alamat: 'Tangerang'
//     },
//     {
//         nama: 'Aditya',
//         alamat: 'Jaksel'
//     }
// ]

// --------------------------------------------------------------

// let namaSiswa = ['Febrisena', 'Aditya', 'Reza'] 
// console.log(namaSiswa);


// namaSiswa.push('Teja', 'Yusuf')
// console.log('masukan data :', namaSiswa);

// let reverseData = namaSiswa.reverse()
// console.log('reverse data :', reverseData);

// let sortData = namaSiswa.sort()
// console.log('sort data :', sortData);

// const fruits = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, aut provident odit nobis, cupiditate obcaecati sit architecto non qui vero a! Eaque, sit natus maiores quas minus dolorem unde officia?'
// console.log(fruits.slice(0, 20) + "....."); 


// ------------------------------------------------------------------


// const numbers = [20,50,20,10]

// // function dataNumber(total, num) {
// //     return total + num
// // }

// let result = numbers.reduce((total, num) => total + num)
// console.log(result);


// let dataSiswa = []

// console.log(dataSiswa);

// function tambahSiswa() {

//     let name = document.getElementById('input-blog-title').value
//     let content = document.getElementById('input-blog-content').value

//     let siswa = {
//         name: name,
//         content: content
//     }

//     dataSiswa.push(siswa)
//     console.log(dataSiswa);
// }

let blogs = []

function addBlog(event) {

    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files

    image = URL.createObjectURL(image[0]) // untuk menampilkan gambar agar tampil

    let blog = {
        title: title,
        content: content,
        image: image
    }

    blogs.push(blog)
    console.log(blogs);

    renderBlog()
}


function renderBlog() {

    document.getElementById('contents').innerHTML = ''

    for (let dataBlog = 0; dataBlog < blogs.length; dataBlog++) {

        document.getElementById('contents').innerHTML +=
        `
            <div class="blog-list-item">
                <div class="blog-image">
                <img src=${blogs[dataBlog].image} alt="" />
                </div>
                <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
                <h1>
                    <a href="blog-detail.html" target="_blank"
                    >${blogs[dataBlog].title}</a
                    >
                </h1>
                <div class="detail-blog-content">
                    12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
                </div>
                <p>
                    ${blogs[dataBlog].content}
                </p>
                </div>
            </div>
        `
    }

}


