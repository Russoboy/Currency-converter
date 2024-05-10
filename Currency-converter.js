const appId = ''; // Replace 'YOUR_API_KEY' with your actual API key from Open Exchange Rates

function convert() {
  const fromCurrency = document.getElementById("from").value;
  const toCurrency = document.getElementById("to").value;
  const amount = document.getElementById("amount").value;
  
  fetch(`https://openexchangerates.org/api/convert/${amount}/${fromCurrency}/${toCurrency}?app_id=${appId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.error) {
        throw new Error(data.error);
      }
      const result = data.response;
      document.getElementById("result").value = result;
    })
    .catch(error => {
      console.error("Error:", error.message);
    });
}
