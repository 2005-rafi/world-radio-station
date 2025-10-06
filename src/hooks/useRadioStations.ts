import { useState, useEffect } from 'react';
import { RadioStation } from '../types';

const RADIO_BROWSER_API = 'https://de1.api.radio-browser.info/json';

export const useRadioStations = () => {
  const [stations, setStations] = useState<RadioStation[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchStations = async (params: {
    limit?: number;
    country?: string;
    tag?: string;
    language?: string;
  } = {}) => {
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams();
      if (params.limit) queryParams.append('limit', params.limit.toString());
      if (params.country) queryParams.append('country', params.country);
      if (params.tag) queryParams.append('tag', params.tag);
      if (params.language) queryParams.append('language', params.language);
      
      const url = `${RADIO_BROWSER_API}/stations/search?${queryParams.toString()}`;
      
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch stations');
      }
      
      const data = await response.json();
      setStations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const fetchPopularStations = async (limit: number = 50) => {
    await fetchStations({ limit });
  };

  const fetchStationsByCountry = async (country: string, limit: number = 20) => {
    await fetchStations({ country, limit });
  };

  const fetchStationsByGenre = async (genre: string, limit: number = 20) => {
    await fetchStations({ tag: genre, limit });
  };

  useEffect(() => {
    fetchPopularStations();
  }, []);

  return {
    stations,
    loading,
    error,
    fetchStations,
    fetchPopularStations,
    fetchStationsByCountry,
    fetchStationsByGenre,
  };
};

export const useCountries = () => {
  const [countries, setCountries] = useState<Array<{ name: string; code: string; stationcount: number }>>([]);
  const [loading, setLoading] = useState(false);

  const fetchCountries = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${RADIO_BROWSER_API}/countries`);
      const data = await response.json();
      setCountries(data.sort((a: any, b: any) => b.stationcount - a.stationcount));
    } catch (error) {
      console.error('Failed to fetch countries:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return { countries, loading };
};