const URL = "https://sensemaxrest.azurewebsites.net/api";

export const convertAreaNameToString = (area) => {
  switch (area) {
    case 0:
      return "Høj temperatur";
    case 1:
      return "Lav temperatur";
    case 2:
      return "Høj fugtighed";
    case 3:
      return "Lav fugtighed";
  }
};

export const fetchArtwork = async (artworkNum) => {
  try {
    const response = await axios.get(`${URL}/artworks/${artworkNum}`);
    return await response.data;
  } catch (ex) {
    alert(ex.message);
  }
};
