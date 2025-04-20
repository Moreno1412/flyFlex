
function buscarHoteis() {
  const destinoInput = document.querySelector('input[placeholder="Destino"]');
  const destino = destinoInput.value.trim().toLowerCase();
  const baseUrl = "https://tp.media/r?marker=624512&trs=409156&p=8626&campaign_id=121&u=";

  if (destino.length > 0) {
    const url = baseUrl + encodeURIComponent(`https://www.trip.com/hotels/list?city=${destino}&locale=pt-pt`);
    window.open(url, "_blank");
  } else {
    alert("Por favor, insira um destino.");
  }
}
