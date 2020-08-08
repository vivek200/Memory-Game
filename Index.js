let clickedCard=null;
let preventClick=false;
let count=0;
let colors=['yellow','pink','green ','teal','cyan','blue','red','orange'];

const cards=[...document.querySelectorAll('.card')];
for(let color of colors)
{
    const cardAIndex=parseInt(Math.random() * cards.length);
    const cardA=cards[cardAIndex];
    cards.splice(cardAIndex , 1);
   cardA.className += `${color}`;
    cardA.setAttribute('data-color', color);

    const cardBIndex=parseInt(Math.random() * cards.length);
    const cardB=cards[cardBIndex];
    cards.splice(cardBIndex,1);
   cardB.className+=`${color}`;
    cardB.setAttribute('data-color',color);
}
function onCardClicked(e)
{
    const target=e.currentTarget;
   if(target===clickedCard || target.className.includes('done'))
    {
        return;
    }
    //console.log(target.className);
    target.className=target.className.replace('color-hidden' ,'').trim();
//    target.className += 'done';
   // console.log(target.getAttribute('data-color'));
    if(!clickedCard)
    {
        clickedCard=target;
    }
    else if(clickedCard)
    {
        if(clickedCard.getAttribute('data-color')!==target.getAttribute('data-color'))
      {
          preventClick=true;
            setTimeout(()=>{
                clickedCard.className=clickedCard.className.replace('done','').trim()+'color-hidden';
                target.className=target.className.replace('done','').trim()+'color-hidden';
                clickedCard=null;
                preventClick=false;
            },500);
        }else{
            count++;
            clickedCard=null;
            if(count==8)
            {
                alert('Congratulation , You Win');
            }
        }
    }
}
