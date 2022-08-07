// https://calculator.swiftutors.com/mechanical-advantage-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const mechanicalAdvantageRadio = document.getElementById('mechanicalAdvantageRadio');
const resistanceForceoftheLoadRadio = document.getElementById('resistanceForceoftheLoadRadio');
const effortForceRadio = document.getElementById('effortForceRadio');

let mechanicalAdvantage;
let resistanceForceoftheLoad = v1;
let effortForce = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

mechanicalAdvantageRadio.addEventListener('click', function() {
  variable1.textContent = '(Output Force) Resistance Force of the Load';
  variable2.textContent = '(Input Force) Effort Force';
  resistanceForceoftheLoad = v1;
  effortForce = v2;
  result.textContent = '';
});

resistanceForceoftheLoadRadio.addEventListener('click', function() {
  variable1.textContent = '(MA) Mechanical Advantage';
  variable2.textContent = '(Input Force) Effort Force';
  mechanicalAdvantage = v1;
  effortForce = v2;
  result.textContent = '';
});

effortForceRadio.addEventListener('click', function() {
  variable1.textContent = '(MA) Mechanical Advantage';
  variable2.textContent = '(Output Force) Resistance Force of the Load';
  mechanicalAdvantage = v1;
  resistanceForceoftheLoad = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(mechanicalAdvantageRadio.checked)
    result.textContent = `Mechanical Advantage = ${computeMechanicalAdvantage().toFixed(2)}`;

  else if(resistanceForceoftheLoadRadio.checked)
    result.textContent = `Resistance Force of the Load = ${computeResistanceForceoftheLoad().toFixed(2)}`;

  else if(effortForceRadio.checked)
    result.textContent = `Effort Force = ${computeEffortForce().toFixed(2)}`;
})

// calculation

function computeMechanicalAdvantage() {
  return Number(resistanceForceoftheLoad.value) / Number(effortForce.value);
}

function computeResistanceForceoftheLoad() {
  return Number(mechanicalAdvantage.value) * Number(effortForce.value);
}

function computeEffortForce() {
  return Number(resistanceForceoftheLoad.value) / Number(mechanicalAdvantage.value);
}