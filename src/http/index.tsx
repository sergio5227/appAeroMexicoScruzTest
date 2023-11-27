import {NumerodeVueloResponse} from '../model/NumerodeVueloResponse';
import {OrigenDestinoResponse} from '../model/OrigenDestinoResponse';

export const getByNumber = async (): Promise<any> => {
  try {
    const response = new Promise((resolve, reject) =>
      resolve(NumerodeVueloResponse?.flightStatusCollection),
    );
    return response;
  } catch (error) {
    const promise = new Promise((resolve, reject) => reject(error));
    return promise;
  }
};

export const getByDestination = async (): Promise<any> => {
  try {
    const response = new Promise((resolve, reject) =>
      resolve(OrigenDestinoResponse?.flightStatusCollection),
    );
    return response;
  } catch (error) {
    const promise = new Promise((resolve, reject) => reject(error));
    return promise;
  }
};
