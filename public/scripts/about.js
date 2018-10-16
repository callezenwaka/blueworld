// Toggles the mission and vision content
const mission = document.querySelector('#mission')
const vision = document.querySelector('#vision')
mission.addEventListener('click',() => {
    const mission_content = document.querySelector('.mission_content')
    const vision_content = document.querySelector('.vision_content')
    mission_content.style.display = 'block'
    vision_content.style.display = 'none'
})
vision.addEventListener('click',() => {
    const mission_content = document.querySelector('.mission_content')
    const vision_content = document.querySelector('.vision_content')
    mission_content.style.display = 'none'
    vision_content.style.display = 'block'
})
