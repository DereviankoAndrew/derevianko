
var photoLennon = document.querySelectorAll('.lennonImg');
var photoKennedy = document.querySelectorAll('.KennedyImg');




var firstCounter = 4
var secondCounter = 4


function changeImageLennon() {
    console.log('click Lennon')

    photoLennon[firstCounter].style.opacity = '0'
    firstCounter--
    if (firstCounter == -1){
        firstCounter = 4
        photoLennon[0].style.opacity = '1'
        photoLennon[4].style.opacity = '1'
        photoLennon[3].style.opacity = '1'
        photoLennon[2].style.opacity = '1'
        photoLennon[1].style.opacity = '1'
    }

}

function changeImageKennedy() {
    console.log('click Kenedy')

    photoKennedy[secondCounter].style.opacity = '0'
    secondCounter--
    if (secondCounter == -1){
        secondCounter = 4
        photoKennedy[0].style.opacity = '1'
        photoKennedy[4].style.opacity = '1'
        photoKennedy[3].style.opacity = '1'
        photoKennedy[2].style.opacity = '1'
        photoKennedy[1].style.opacity = '1'
    }

}


//function changeOpacity() {
//
//    var amount = 1
//
//    var massive = [4,3,2,1,0]
//
//    for (var i in massive) {
//
//        console.log(massive[i])
//
//        var id = setInterval(decrease, 100)
//
//        function decrease() {
//            amount = amount - 0.05
//
//            elementsPhotos[i].style.opacity = amount;
//            if (elementsPhotos[i].style.opacity == -1.2){
//                console.log('zaebis')
//                clearInterval(id)
//                setTimeout(changeOpacity, 5000)
//
//            }
//        }
//    }
//}
//
//changeOpacity()



width = document.body.clientWidth
console.log(width)

if (width < 987) {
    var contents = document.querySelectorAll('.content');
    counter = 0
    while (counter != contents.length){
        contents[counter].innerHTML = ' '
        counter++
    }



//    for (elem in contents) {
//        console.log(elem)
//    }
}

