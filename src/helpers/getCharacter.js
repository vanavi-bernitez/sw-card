const getCharacter = async (id) => {
    try {
        const response = await fetch(`https://swapi.py4e.com/api/people/${id}/`);
        const person = await response.json();

        return {
            name: person.name,
            height: person.height,
            hairColor: person['hair_color'],
            skinColor: person['skin_color'],
            eyeColor: person['eye_color'],
            birthYear: person['birth_year'],
            gender: person.gender
        };
    } catch (error) {
        console.error('Error while getting people from the API', error);
    }
}

export { getCharacter }