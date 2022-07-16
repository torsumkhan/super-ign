export const resizeImage = (image_path, size) => {
  const image = image_path.match(/media\/screenshots/)
    ? image_path.replace(
        "media/screenshots",
        `media/resize/${size}/-/screenshots`
      )
    : image_path.replace("/media/games/", `/media/resize/${size}/-/games/`);
  return image;
};
