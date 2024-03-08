const a = -307.75076;
const b = 24.0900756;
const c = -0.1918759221;
const d = 0.0007391293;
const e = -0.000001093;

const aa = -57.96288;
const bb = 13.6175032;
const cc = -0.1126655495;
const dd = 0.0005158568;
const ee = -0.0000010706;

let button = document.getElementById('calc');
let result = document.getElementById('scoree');

function Dots(){
    if (document.getElementById('male').checked && document.getElementById('KG').checked){
        let bw = parseInt(document.getElementById('bw').value);
        let total = parseInt(document.getElementById('total').value);
        let dots = 500
        / (a + (b * bw) + (c * (Math.pow(bw, 2))) + (d * (Math.pow(bw, 3))) + (e * (Math.pow(bw, 4)))) * total;
        document.getElementById('scoree').textContent = document.getElementById('total').value + "KG total at " + document.getElementById('bw').value + "KG " + " = " + dots.toFixed(2) + " DOTS";
    } else if (document.getElementById('male').checked && document.getElementById('LB').checked){
        let bw = parseInt(document.getElementById('bw').value) / 2.2;
        let total = parseInt(document.getElementById('total').value) / 2.2;
        let dots = 500
        / (a + (b * bw) + (c * (Math.pow(bw, 2))) + (d * (Math.pow(bw, 3))) + (e * (Math.pow(bw, 4)))) * total;
        document.getElementById('scoree').textContent = document.getElementById('total').value + "LB total at " + document.getElementById('bw').value + "LB " + " = " + dots.toFixed(2) + " DOTS";
    } else if (document.getElementById('female').checked && document.getElementById('KG').checked) {
        let bw = parseInt(document.getElementById('bw').value);
        let total = parseInt(document.getElementById('total').value);
        let dots = 500
        / (aa + (bb * bw) + (cc * (Math.pow(bw, 2))) + (dd * (Math.pow(bw, 3))) + (ee * (Math.pow(bw, 4)))) * total;
        document.getElementById('scoree').textContent = document.getElementById('total').value + "KG total at " + document.getElementById('bw').value + "KG " + " = " + dots.toFixed(2) + " DOTS";
    } else if (document.getElementById('female').checked && document.getElementById('LB').checked){
        let bw = parseInt(document.getElementById('bw').value) / 2.2;
        let total = parseInt(document.getElementById('total').value) / 2.2;
        let dots = 500
        / (aa + (bb * bw) + (cc * (Math.pow(bw, 2))) + (dd * (Math.pow(bw, 3))) + (ee * (Math.pow(bw, 4)))) * total;
        document.getElementById('scoree').textContent = document.getElementById('total').value + "LB total at " + document.getElementById('bw').value + "LB " + " = " + dots.toFixed(2) + " DOTS";
    } else {
        document.getElementById('scoree').textContent = "Error. Missing Input above";
    }
}