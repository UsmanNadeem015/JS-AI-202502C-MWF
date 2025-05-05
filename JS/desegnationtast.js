console.log('Desegnation task in js using switch cases');

let desegnation = prompt(
'Enter your desegnation to check your salary: \n- Manager \n- Developer \n- Tester \n- HR head')


switch(desegnation){
    case 'Manager':
        alert('The salary of' +' ' + desegnation +' ' + 'is 80,000 pkr');
        break;
    
    case 'Developer':
        alert('The salary of' + ' ' + desegnation + ' ' + 'is 35,000 pkr');
        break;

    case 'Tester':
        alert('The salary of' +' ' + desegnation + ' ' + 'is 25,000 pkr');
        break;
    
    case 'HR head':
            alert('25,000 pkr');
            break;
  
    default:
        alert('No desgnation found')
}

