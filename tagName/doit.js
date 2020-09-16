function happy(){

   let body = document.getElementsByTagName('body','p');
   body = body[0];


   body.style.backgroundColor = 'yellow';
   body.style.color = 'blue';

   let cssStyle = {
       'backgroundColor': 'yellow',
       'color': 'blue'
   };

   localStorage.setItem('styles', JSON.stringify(cssStyle));
   
   


}

function loadColor(){
    let styles = localStorage.getItem('styles');
    styles = JSON.parse(styles);

        let body = document.getElementsByTagName('body');
    body = body[0];
    body.style.backgroundColor = styles['backgroundColor'];
    body.style.color = styles['color'];
    

}

function angry() {
    let body = document.getElementsByTagName('body');
    body = body[0];

    body.style.backgroundColor = 'red';
    body.style.color = 'blue';

    let cssStyle = {
        'backgroundColor': 'red',
        'color' : 'green'
    }

    localStorage.setItem('styles',JSON.stringify(cssStyle));

}