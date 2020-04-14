window.addEventListener('DOMContentLoaded', (event) => {

    const imageArray = [
    {
      name: 'barca',
      img: 'images/barca.png'
    },
    {
      name: 'pinterest',
      img: 'images/pinterest.png'
    },
    {
      name: 'pokemon',
      img: 'images/pokemon.png'
    },
    {
      name: 'skype',
      img: 'images/skype.png'
    },
    {
      name: 'superman',
      img: 'images/superman.png'
    },
    {
      name: 'telephone',
      img: 'images/telephone.png'
    },    {
      name: 'barca',
      img: 'images/barca.png'
    },
    {
      name: 'pinterest',
      img: 'images/pinterest.png'
    },
    {
      name: 'pokemon',
      img: 'images/pokemon.png'
    },
    {
      name: 'skype',
      img: 'images/skype.png'
    },
    {
      name: 'superman',
      img: 'images/superman.png'
    },
    {
      name: 'telephone',
      img: 'images/telephone.png'
    }    
  ] 
      imageArray.sort(() => 0.5 - Math.random())
    
    const showIt = document.querySelector('#result')
    flipped = []
    flippedId = []
    winner = []
    const grid = document.querySelector('.grid');
    function createGrid(){
        for(let i = 0; i < imageArray.length; i++){
            var image = document.createElement('img')
            image.setAttribute('src', 'images/blank.png')
            image.setAttribute('data-id', i)
            image.addEventListener('click', flippy)
            grid.appendChild(image)
        }
    }
    
    function matchy(){
        var images =  document.querySelectorAll('img')
        const one = flippedId[0]
        const two = flippedId[1]
        
        if(flipped[0] == flipped[1]){
            alert('matched')
            images[one].setAttribute('src', 'images/white.png')
            images[two].setAttribute('src', 'images/white.png')
            winner.push(flipped)
        }else{
            images[one].setAttribute('src', 'images/blank.png')
            images[two].setAttribute('src', 'images/blank.png')
            alert('try again')
        } 
        flipped = []
        flippedId = []
        showIt.textContent=winner.length
        if (winner.length == imageArray.length/2){
            showIt.textContent="Congratulations! You won"
        }
    }
    
    function flippy(){
        var imageId = this.getAttribute('data-id')
        flipped.push(imageArray[imageId].name)
        flippedId.push(imageId)
        this.setAttribute('src', imageArray[imageId].img)
        if (flipped.length ===2){
            setTimeout(matchy, 100)
        }
    }
    
    createGrid()
});