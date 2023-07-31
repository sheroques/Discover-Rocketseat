function toggleMode() {
  const html = document.documentElement
   html.classList.toggle('light')

// alterar a imagem conforme o light e o dark mode 
  const img = document.querySelector('#profile img')

  if (html.classList.contains('light')){
   // html.classList.remove('light')
   img.setAttribute('src', ' ./assets/avatar-light.png')
 } else{
 //   html.classList.add('light')
 img.setAttribute('src','./assets/avatar.png')
  }
}