
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const response = await fetch(`https://ais.osym.gov.tr`);
  const data = await response.text(); // HTML içeriğini al
  
  // DOMParser kullanarak HTML içeriğini parse et
  const dom = new DOMParser().parseFromString(data, 'text/html');
  
  // Tüm <tr> etiketlerini al
  const trElements = dom.querySelectorAll('tr');
  
  // Her <tr> etiketinin içeriğini sayfaya yazdır
  let output = '';
  trElements.forEach(tr => {
    output += tr.innerHTML.trim() + '<br>';
  });
  
  // Alınan veriyi döndür
  return new Response(output, {
    status: 200,
    statusText: 'OK',
    headers: {
      "Content-Type": "text/html"
    }
  });
}
