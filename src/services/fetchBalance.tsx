import ENDPOINTS from '@/constants/endpoints';

export const fetchBalance = async (address: string | null): Promise<number> => {
  if (!address) return 0;

  try {
    const url = `${ENDPOINTS.API_GET_ADDRESS}?address=${address}`;
    const response = await fetch(url);
    const res = await response.json();
    return Number(res.result.balance) / 1e9;
  } catch (error) {
    console.error('Ошибка получения баланса:', error);
    return 0;
  }
};
