import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

// Extend the Theme type to include the expected 'colors' property
declare module '@emotion/react' {
  export interface Theme {
    colors: {
      glass: {
        background: string;
      };
      accent: string;
    };
  }
}

const WidgetContainer = styled.div`
  background: ${({ theme }) => theme.colors.glass.background};
  color: ${({ theme }) => theme.colors.accent};
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  font-family: 'Inter', 'Poppins', sans-serif;
  font-size: 1rem;
`;

const Temp = styled.span`
  font-weight: 700;
  font-size: 1.2rem;
`;

export function WeatherWidget() {
  const theme = useTheme();
  const [temp, setTemp] = useState<number | null>(null);
  const [city, setCity] = useState<string>('');
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocalización no soportada');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          const { latitude, longitude } = pos.coords;
          const apiKey = '9b165950728dc6817356affc87d83559'; // <-- Pega tu API key aquí
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric&lang=es`;
          const { data } = await axios.get(url);
          setTemp(Math.round(data.main.temp));
          setCity(data.name);
        } catch (err) {
          setError('No se pudo obtener el clima');
        }
      },
      () => setError('No se pudo obtener tu ubicación')
    );
  }, []);

  if (error) return <WidgetContainer theme={theme}>{error}</WidgetContainer>;
  if (temp === null) return <WidgetContainer theme={theme}>Cargando clima...</WidgetContainer>;

  return (
    <WidgetContainer theme={theme}>
      <span role="img" aria-label="clima">🌡️</span>
      <Temp>{temp}°C</Temp>
      <span>{city}</span>
    </WidgetContainer>
  );
}