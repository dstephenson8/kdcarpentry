
async function getPhotos() {
    let response = await fetch("photos.json")
    let photos = await response.json()
    return photos
}

function getPhotosHtml(photos) {
    let myPhotosHtml = photos.map(photo => {
        return `<img class="my-photo" src="images/${photo.link}" alt="${photo.id}"/>`
    }).join('')
    
    return `<div class="my-photos">${myPhotosHtml}</div>`   
}

getPhotos().then(photos => {    
    document.getElementById("photo-gallery").innerHTML = 
        `<div> ${getPhotosHtml(photos)} </div>`
    

})
    
    



