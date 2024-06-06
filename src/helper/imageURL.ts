export const getImageUrl = async (file: any) => {
  return new Promise<string>((resolve, reject) => {
    const reader: FileReader = new FileReader();
    reader.onload = function (event) {
      if (event.target) {
        const imageUrl = event.target.result as string;
        resolve(imageUrl);
      } else {
        reject(new Error("Event target is null."));
      }
    };
    reader.onerror = function (event) {
      reject(event.target?.error);
    };
    reader.readAsDataURL(file);
  });
};
