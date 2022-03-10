export interface IPerson {
    id: string;
    lastName: string;
    firstName: string;
    age: string;
    gender?: string
    email?: string
    country?: string
    phone?: string
    active?: boolean
}
export default IPerson;
