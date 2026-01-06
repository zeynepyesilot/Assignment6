export const fetchPosts = async (signal) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    signal: signal 
  });

  if (!response.ok) {
    throw new Error(`Veri alınamadı! Status: ${response.status}`);
  }

  return await response.json();
};