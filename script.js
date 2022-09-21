function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    
    
    msg.innerHTML = `Agora sao ${hora} horas.`

    if (hora >= 0 && hora < 12 ){
      //bom dia
      img.src ='manha1.jpg'
      document.body.style.background = '#28df7a64'
    } else if ( hora >= 12 && hora < 18){
      // Boa tarde
      img.src = 'tarde1.jpg'
      document.body.style.background = '#c728df64'
    } else {
      //boa noite
      img.src = 'noite1.jpg'
      document.body.style.background = '#dfd02864'
    }


}


