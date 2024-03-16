import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import AddIcon from '@mui/icons-material/Add';
import { CustomInput } from 'src/components/CustomInput';
import { PrimaryButton } from 'src/styles/ui/button';
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
        label={t('label.name')}
        control={control}
      />
      <PrimaryButton startIcon={<AddIcon />}>{t('button.add')}</PrimaryButton>
    </form>
  );
};
