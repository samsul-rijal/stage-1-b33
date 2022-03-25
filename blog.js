let blogs = []

console.log('data awal', blogs);

function addBlog(event) {

    event.preventDefault()

    let title = document.getElementById('input-blog-title').value
    let content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image').files



    let twitter = document.getElementById('input-twitter').checked
    let facebook = document.getElementById('input-facebook').checked

    if(twitter){
        twitter = document.getElementById('input-twitter').value
    } else {
        twitter = ''
    }
    if(facebook){
        facebook = document.getElementById('input-facebook').value
    } else {
        facebook = ''
    }




    image = URL.createObjectURL(image[0]) // untuk menampilkan gambar agar tampil

    let blog = {
        title: title,
        content: content,
        image: image,
        postAt: new Date(),
        author: 'Samsul Rijal',
        twitter: twitter,
        facebook: facebook
    }

    blogs.push(blog)
    console.log('data ketika di tambahkan',blogs);

    renderBlog()
}

let firstBlog = 
    `
    <div class="blog-list-item">
        <div class="blog-image">
        <img src="assets/blog-img.png" alt="" />
        </div>
        <div class="blog-content">
        <div class="btn-group">
            <button class="btn-edit">Edit Post</button>
            <button class="btn-post">Post Blog</button>
        </div>
        <h1>
            <a href="blog-detail.html" target="_blank"
            >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
            >
        </h1>
        <div class="detail-blog-content">
            12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
        </div>
        <p>
            Ketimpangan sumber daya manusia (SDM) di sektor digital masih
            menjadi isu yang belum terpecahkan. Berdasarkan penelitian
            ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
            meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
            dolor sit amet consectetur adipisicing elit. Quam, molestiae
            numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
            eligendi debitis?
        </p>

        <div style="text-align: right;">
            <span style="font-size: 12; color:grey">
            1 day ago
            </span>
        </div>

        </div>
    </div>
    `


function renderBlog() {

    document.getElementById('contents').innerHTML = firstBlog

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
                    ${getFullTime(blogs[dataBlog].postAt)} | ${blogs[dataBlog].author}
                </div>
                <p>
                    ${blogs[dataBlog].content}
                </p>
                <i class="${blogs[dataBlog].twitter}"></i>
                <i class="${blogs[dataBlog].facebook}"></i>
                <div style="text-align: right;">
                    <span style="font-size: 12; color:grey">
                        ${getDistanceTime(blogs[dataBlog].postAt)}
                    </span>
                </div>
                </div>
            </div>
        `
    }

}


function getFullTime(waktu) {
    
    let month = ['Januari', 'Febuari', 'March', 'April', 'May', 'June', 'July', 'August', 'Sept', 'October', 'December']
    
    let date = waktu.getDate()
    console.log(date);

    let monthIndex = waktu.getMonth()
    console.log(month[monthIndex]);

    let year = waktu.getFullYear()
    console.log(year);

    let hours = waktu.getHours()
    let minutes = waktu.getMinutes()

    let fullTime = `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`

    return fullTime
}


function getDistanceTime(waktu) {
    let timeNow = new Date()
    let timePost = waktu
    console.log(timePost);

    let distance = timeNow - timePost
    console.log(distance);

    let miliseconds = 1000 // 1000 miliseconds dalam 1 detik
    let secondInHours = 3600 // 1 jam sama dengan 3600 detik
    let hoursInDay = 24 // 24 jam dalam 1 hari

    let distanceDay = Math.floor(distance / (miliseconds * secondInHours * hoursInDay))
    let distanceHours = Math.floor(distance / (miliseconds * 60 * 60))
    let distanceMinutes = Math.floor(distance / (miliseconds * 60))
    let distanceSeconds = Math.floor(distance / miliseconds)
    
    // console.log(distanceDay, 'day ago');
    // console.log(distanceHours, 'hours ago');
    // console.log(distanceMinutes, 'minutes ago');
    // console.log(distanceSeconds, 'detik ago');
    

    if (distanceDay > 0) {
        return `${distanceDay} day ago`
    } else if(distanceHours > 0) {
        return `${distanceHours} hours ago`
    } else if(distanceMinutes > 0) {
        return `${distanceMinutes} minutes ago`
    } else {
        return `${distanceSeconds} detik ago`
    }
}


setInterval(() => {
    renderBlog()    

}, 3000)
