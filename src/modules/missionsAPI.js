const API_URL = 'https://api.spacexdata.com/v3/missions';

const fetchMissions = async () => {
  const response = await fetch(API_URL);
  const missions = await response.json();

  return missions.map((obj) => ({
    id: obj.mission_id,
    name: obj.mission_name,
    description: obj.description,
    reserved: false,
  }));
};

export default fetchMissions;
