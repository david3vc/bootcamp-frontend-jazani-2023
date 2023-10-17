import axios, { type AxiosResponse } from 'axios';
import { type InvestmentTypeResponse } from '../domain';

export const findAll = async (): Promise<AxiosResponse<InvestmentTypeResponse[]>> =>
	await axios.get<InvestmentTypeResponse[]>('https://localhost:7132/api/investmenttype');
