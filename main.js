let title=document.querySelector('.title');
let turn='x';
let squares = [];
function end(num1,num2,num3){

    title.innerHTML=`${squares[num1]} winner`;
    title.style.boxShadow='0 0 10px aqua';
    title.style.border='2px solid aqua';
    document.querySelector('#element'+ num1).style.boxShadow='0 0 10px aqua';
    document.querySelector('#element'+ num1).style.border='2px solid aqua';
    document.querySelector('#element'+ num2).style.boxShadow='0 0 10px aqua';
    document.querySelector('#element'+ num2).style.border='2px solid aqua';
    document.querySelector('#element'+ num3).style.boxShadow='0 0 10px aqua';
    document.querySelector('#element'+ num3).style.border='2px solid aqua';

    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000);
}
function winner(){
    for(let i=1;i<10;i++){
        squares[i]=document.getElementById('element' + i).innerHTML;
    }
    if(squares[1]==squares[2] && squares[1]==squares[3] && squares[1] != ''){
        end(1,2,3);
    }
    else if(squares[4]==squares[5]&&squares[4]==squares[6] && squares[4] != ''){
        end(4,5,6);
    }
    else if(squares[7]==squares[8]&&squares[7]==squares[9] && squares[7] != ''){
        end(7,8,9);
    }
    else if(squares[1]==squares[4]&&squares[1]==squares[7] && squares[1] != ''){
        end(1,4,7);
    }
    else if(squares[2]==squares[5]&&squares[2]==squares[8] && squares[2] != ''){
        end(2,5,8);
    }
    else if(squares[3]==squares[6]&&squares[3]==squares[9] && squares[3] != ''){
        end(3,6,9);
    }
    else if(squares[1]==squares[5]&&squares[1]==squares[9] && squares[1] != ''){
        end(1,5,9);
    }
    else if(squares[3]==squares[5]&&squares[3]==squares[7] && squares[3] != ''){
        end(3,5,7);
    }



}
function game(id){


    let element= document.getElementById(id);
    title.style.fontSize='40px';

    if(turn==='x' && element.innerHTML ==''){
        element.innerHTML="x";
        turn='o';
        title.style.color='white';
        title.innerHTML='o';
    }
    else if(turn==='o' && element.innerHTML ==''){
        element.innerHTML="o";
        element.style.color='aqua';
        turn='x';
        title.style.color='white';
        title.innerHTML='x';
    }
    winner();


}
