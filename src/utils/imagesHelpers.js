export const findImageUriWithBestQuality = object => {
  const sizes = [
    object.image?.formats?.large?.url,
    object.image?.formats?.medium?.url,
    object.image?.formats?.small?.url,
    object.image?.formats?.thumbnail?.url,
  ];
  return sizes.find(e => e !== undefined) || null;
};
