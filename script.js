document.getElementById('trapForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Bemeneti értékek, parseFloat használatával biztosítva, hogy a tizedesjegyeket is befogadja
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    
    // Számítások
    const x = c - a;
    const d = Math.sqrt(b * b + x * x);
    const alphaRad = Math.atan(x / b);
    const betaRad = Math.atan(b / x);
    const tompaszog = (Math.degrees(alphaRad) + 90).toFixed(2);
    const hegyesszog = Math.degrees(betaRad).toFixed(2);
    
    // Eredmények megjelenítése
    document.getElementById('alpha').textContent = tompaszog;
    document.getElementById('beta').textContent = hegyesszog;
    document.getElementById('dSide').textContent = d.toFixed(2);
    
    // Eredmények div megjelenítése
    document.getElementById('result').style.display = 'block';
});

// Kiegészítés a Math.degrees metódushoz
Math.degrees = function(radians) {
    return radians * (180 / Math.PI);
};
