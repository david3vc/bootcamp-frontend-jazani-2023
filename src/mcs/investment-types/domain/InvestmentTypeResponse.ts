export default interface InvestmentTypeResponse {
	id: number;
	name: string;
	description?: string;
	registrationDate: Date;
	state: boolean;
}
