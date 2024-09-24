const elem = document.querySelector('#tp-codigo');







function changeTP(tpNumber) {
   
    document.getElementById('tp').src = './tp-' + tpNumber + '/';
    let urlEditor = 'https://github1s.com/octaviopacman/plataformas-moviles-entregas' + '/tp-' + tpNumber + '/' + 'index.html';
    elem.src = urlEditor;
}