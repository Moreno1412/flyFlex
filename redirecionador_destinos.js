
function buscarDestino() {
  const destinoInput = document.querySelector('input[placeholder="Destino"]');
  const destino = destinoInput.value.trim().toLowerCase();
  const origem = "LIS";  // origem fixa

  const mapaIATA = {
    "lisboa": "LIS", "porto": "OPO", "paris": "CDG", "berlim": "BER", "madrid": "MAD", "barcelona": "BCN",
    "roma": "FCO", "milao": "MXP", "londres": "LON", "amsterda": "AMS", "viena": "VIE", "dublin": "DUB",
    "praga": "PRG", "atenas": "ATH", "bruxelas": "BRU", "oslo": "OSL", "copenhaga": "CPH", "zurique": "ZRH",
    "genebra": "GVA", "helsinque": "HEL", "estocolmo": "STO", "budapeste": "BUD", "varsovia": "WAW",
    "zagreb": "ZAG", "sofia": "SOF", "bucareste": "OTP", "vilnius": "VNO", "riga": "RIX", "talin": "TLL",
    "reiquiavique": "REK", "dubai": "DXB", "abu dhabi": "AUH"
  };

  const iata = mapaIATA[destino];

  if (iata) {
    const baseUrl = "https://tp.media/r?marker=624512&trs=409156&p=8626&u=";
    const destinoTrip = `https://www.trip.com/flights/from-${origem}-to-${iata}?locale=pt-pt&SID=2209817&allianceid=1094387&trip_sub1=e5aeca06d0ff48058421bbd28-624512&utm_campaign=624512`;
    const url = baseUrl + encodeURIComponent(destinoTrip) + "&campaign_id=121";

    window.open(url, "_blank");
  } else {
    alert("Destino não encontrado. Tente outro.");
  }
}
