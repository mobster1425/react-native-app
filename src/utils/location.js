const GOOGLE_API_KEY = 'AIzaSyBF_-uIIRGVBtqSkTNkY5kECJ8i0cnJnQg';

export function getMapPreview(lat, lng) {
    console.log('before map preview')
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  console.log('after match preview',imagePreviewUrl)
  return imagePreviewUrl;
}

export async function getAddress(lat, lng) {
console.log('before getaddress')
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`;
  const response = await fetch(url);
console.log('after get addresss')
  if (!response.ok) {
    throw new Error('Failed to fetch address!');
  }

const data = await response.json();
console.log('Response data:', data);

if (data.results && data.results.length > 0) {
  const address = data.results[0].formatted_address;
  console.log('Address:', address);
  return address;
} else {
  throw new Error('No results found in the API response.');
}
}



/*
  const data = await response.json();
  console.log(`this is the data ${data}`)
  const address = data.results[0].formatted_address;
  console.log(`this is the addreess ${address}`)
  return address;
}
*/
