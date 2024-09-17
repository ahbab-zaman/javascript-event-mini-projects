document.getElementById('status-btn').addEventListener('click', function(){
        const newElement = document.createElement('p');
    newElement.append("Age : 8 months, Type : Fearfulness and playfulness, Aggression : toward Human, Responsive : Quick");
    document.getElementById('newDiv').append(newElement);
     const div = document.getElementById('newDiv');
     div.style.backgroundColor = '#19e9cd';
     div.style.border = '1px solid black';
     div.style.borderRadius = '1rem';
     div.style.padding = '1rem';
     div.style.fontFamily = 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
     div.style.fontSize = '2rem';
})