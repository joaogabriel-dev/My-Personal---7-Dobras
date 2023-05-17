const form = document.getElementById('form');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const gender = document.getElementById('gender').value;
  const age = document.getElementById('age').value;
  const triceps = document.getElementById('triceps').value;
  const peitoral = document.getElementById('peitoral').value;
  const supra = document.getElementById('supra').value;
  const abd = document.getElementById('abd').value;
  const coxa = document.getElementById('coxa').value;
  const sub = document.getElementById('sub').value;
  const axilar = document.getElementById('axilar').value;

  const peitoralMm = parseFloat(peitoral);
  const abdMm = parseFloat(abd);
  const coxaMm = parseFloat(coxa);
  const tricepsMm = parseFloat(triceps); 
  const supraMm = parseFloat(supra); 
  const subMm = parseFloat(sub); 
  const axilarMm = parseFloat(axilar);

  
  const bodyDensity = (1.112-0.00043499 * (peitoralMm + abdMm + coxaMm + tricepsMm + subMm + supraMm + axilarMm)) + (0.00000055 * Math.pow((peitoralMm + abdMm + coxaMm + tricepsMm + subMm + supraMm + axilarMm), 2)) - (0.00028826 * age);
  
  const bodyFatPercentage = (495 / bodyDensity) - 450;

  const resultContainer = document.getElementById('result');
  if (age == ''){
    alert('Digite sua idade!') 
  } else if(peitoral == ''){
    alert('Digite um valor válido!')
  } else if(abd == ''){
    alert('Digite um valor válido')
  } else if(coxa ==''){
    alert('Digite um valor válido')
  } else 
  resultContainer.innerHTML = `Sua porcentagem de gordura corporal é: <b>${bodyFatPercentage.toFixed(2)}%</b>`;
});
