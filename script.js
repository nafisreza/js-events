const images = document.querySelector('#images')

/* 
Old Event methods:
onclick function
document.querySelector("#owl").onclick = function(){
    alert('owl clicked')
}

Old Internet Explorer method: .attachEvent()
jQuery method: .on 

Currently used:
    // type, timestamp, preventDefault
    // target, toElement, srcElement, currentTarget,
    // clientX, clientY, screenX, screenY
    // altkey, ctrlkey, shiftkey, keyCode
    //     e.preventDefault(); - Prevents the default behavior on buttons
    //     e.stopPropagation() - Used to stop propagation of parent/child node
*/

images.addEventListener('click', (e)=>{
    console.log(e.target.tagName)
// We want to remove the images only when the img tag is clicked. Otherwise, if a user clicks on li(bullet points)/any other items of li, then the whole parent(ul) will get removed.
    if(e.target.tagName === 'IMG'){
        e.target.parentNode.remove()
    }
})


