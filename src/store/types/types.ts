export type Weather = {
  main: {
    temp: number;
    feels_like: number;
    pressure: number;
    temp_min: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
    temp_max: number;
  };
  weather: [
    {
      main: string;
      description: string;
    }
  ];
  dt: number;
  clouds: {
    all: number;
  };
  visibility: number;
  wind: {
    speed: number;
  };
};
export type City = {
  city: string;
};
