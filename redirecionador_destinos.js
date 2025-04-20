
function buscarDestino() {
  const destinoInput = document.querySelector('input[placeholder="Destino"]');
  const origem = "LIS"; // origem fixa para Lisboa
  const destino = destinoInput.value.trim().toLowerCase();

  const mapaIATA = {'lisboa': 'LIS', 'porto': 'OPO', 'paris': 'CDG', 'berlim': 'BER', 'madrid': 'MAD', 'barcelona': 'BCN', 'roma': 'FCO', 'milao': 'MXP', 'londres': 'LON', 'amsterda': 'AMS', 'viena': 'VIE', 'dublin': 'DUB', 'praga': 'PRG', 'atenas': 'ATH', 'bruxelas': 'BRU', 'oslo': 'OSL', 'copenhaga': 'CPH', 'zurique': 'ZRH', 'genebra': 'GVA', 'helsinque': 'HEL', 'estocolmo': 'STO', 'budapeste': 'BUD', 'warsaw': 'WAW', 'zagreb': 'ZAG', 'sofia': 'SOF', 'bucareste': 'OTP', 'vilnius': 'VNO', 'riga': 'RIX', 'talin': 'TLL', 'reiquiavique': 'REK', 'dubai': 'DXB', 'abu dhabi': 'AUH'};

  const iata = mapaIATA[destino];
  const baseUrl = "https://tp.media/r?marker=624512&trs=409156&p=8626&campaign_id=121&u=";

  if (iata) {
    const url = baseUrl + encodeURIComponent(`https://www.trip.com/flights/from-${origem}-to-${iata}?locale=pt-pt`);
    window.open(url, "_blank");
  } else {
    alert("Destino não encontrado. Tente outra cidade ou país.");
  }
}
