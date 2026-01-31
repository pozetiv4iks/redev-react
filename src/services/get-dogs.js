const getDogs = async (num, breed) => {
  try {
    const response = await fetch(`https://dog.ceo/api/breed${breed ? `/${breed}/images` : 's/image'}/random/${num}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export const allBreeds = async () => {
    try{
        const response = await fetch('https://dog.ceo/api/breeds/list/all');
        const data = await response.json();
        return data
    }catch (error) {
        console.error(error)
    }
}

export default getDogs;