import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '6397dc8b-ba16-4616-9b88-836f2c7598f3',
};

export const sampleWithPartialData: IAuthority = {
  name: 'faadf0f9-1750-4277-9097-a15213286ff4',
};

export const sampleWithFullData: IAuthority = {
  name: '3deeb398-0cb6-4c39-be3e-fec6a8dd9e45',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
