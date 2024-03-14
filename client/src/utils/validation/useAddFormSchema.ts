import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

import { IAddForm } from 'src/types/form';

export const useAddFormSchema = (): yup.ObjectSchema<IAddForm> => {
  const { t } = useTranslation();

  return yup.object({
    name: yup
      .string()
      .max(30, t('validation.maxChar', { num: '30' }))
      .required(t('validation.required')),
  });
};
