import * as yup from 'yup';

import { IAddForm } from 'src/types/form';

export const useAddFormSchema = (): yup.ObjectSchema<IAddForm> => {
  return yup.object({
    name: yup
      .string()
      .max(30, JSON.stringify(['validation.maxChar', { num: '30' }]))
      .required(JSON.stringify(['validation.required'])),
    isChecked: yup
      .bool()
      .oneOf([true], JSON.stringify(['validation.requiredIsChecked']))
      .required(JSON.stringify(['validation.requiredIsChecked'])),
  });
};
