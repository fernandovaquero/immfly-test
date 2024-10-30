import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 10919,
  login: 'h$8wyv@P\\Nd3LhmN',
};

export const sampleWithPartialData: IUser = {
  id: 7793,
  login: 'UjsrkC',
};

export const sampleWithFullData: IUser = {
  id: 15172,
  login: 'wS@BOyC\\bV',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
