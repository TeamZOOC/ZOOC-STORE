export const createImageURL = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    console.log('file', file);
    const reader = new FileReader();
    reader.onload = (event) => resolve(event.target?.result as string);
    reader.onerror = (event) => reject(event.target?.error);
    reader.readAsDataURL(file);
  });
