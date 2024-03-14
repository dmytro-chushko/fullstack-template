import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import { CustomInput } from 'src/components';
import { IAddForm } from 'src/types/form';
import { useAddFormSchema } from 'src/utils/validation/useAddFormSchema';

export const AddForm = () => {
  const { t } = useTranslation();
  const schema = useAddFormSchema();
  const { control, handleSubmit } = useForm<IAddForm>({
    defaultValues: { name: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = ({ name }: IAddForm) => console.log(name);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CustomInput
        type="text"
        placeholder={t('placeholder.textLabelInput')}
        name="name"
        label="Name"
        control={control}
      />
    </form>
  );
};
