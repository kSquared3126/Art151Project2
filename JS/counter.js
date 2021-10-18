
function timeout(){
    setTimeout(function(){
            document.getElementById('timer').textContent = sessionStorage.getItem('tick');
            console.log('counter = ' + sessionStorage.getItem('tick'));
            Number(sessionStorage.setItem('tick', Number(sessionStorage.getItem('tick'))-1));
            if(sessionStorage.getItem('tick') < 0 ){  
               window.location.replace('lose.html');;
            }
            timeout();
    }, 2000);
}
timeout();



// function timeout(){
//     setTimeout(function(){
//             document.getElementById('timer').textContent = counter;
//             console.log('counter = ' + counter--);
//             if(counter < 0 ){  
//                window.location.replace('lose.html');;
//             }
//             timeout();
//     }, 2000);
// }
// timeout();

