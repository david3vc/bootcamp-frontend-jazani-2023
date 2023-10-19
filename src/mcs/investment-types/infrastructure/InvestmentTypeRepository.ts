import axios, { type AxiosResponse } from 'axios';
import { type InvestmentTypeResponse } from '../domain';
import { API_BASE_URL } from '../../../core/constants/env';

	export const findAll = async (): Promise<InvestmentTypeResponse[]> => {
	
		const response: AxiosResponse<InvestmentTypeResponse[]> = await axios.get<InvestmentTypeResponse[]>(
			`${API_BASE_URL}/api/investmenttype`,
		);
	
		return response.data;
	};
