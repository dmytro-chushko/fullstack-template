import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import AddIcon from '@mui/icons-material/Add';
import {
  CustomCheckbox,
  CustomRadioButton,
  CustomRadioGroup,
} from 'src/components';
import { CustomInput } from 'src/components/CustomInput';
import { OutlinedButton, PrimaryButton } from 'src/styles/ui/button';
import { IAddForm } from 'src/types/form';
import { GenderValues } from 'src/utils/consts/GenderValues';
import { useAddFormSchema } from 'src/utils/validation/useAddFormSchema';

export const AddForm = () => {
  const { t } = useTranslation();
  const schema = useAddFormSchema();
  const { control, handleSubmit } = useForm<IAddForm>({
    defaultValues: { name: '', isChecked: false, gender: '' },
    resolver: yupResolver(schema),
  });
  const genderOptions = [
    { value: GenderValues.MALE, label: t('label.genderMale') },
    { value: GenderValues.FEMALE, label: t('label.genderFemale') },
    { value: GenderValues.OTHERS, label: t('label.genderOther') },
  ];

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
      <CustomCheckbox
        label={t('label.isChecked')}
        control={control}
        name="isChecked"
      />
      <CustomRadioGroup
        row
        label={t('label.gender')}
        control={control}
        name="gender"
      >
        {genderOptions.map(gender => (
          <CustomRadioButton key={gender.value} {...gender} />
        ))}
      </CustomRadioGroup>
      <PrimaryButton type="submit" startIcon={<AddIcon />}>
        {t('button.add')}
      </PrimaryButton>
      <OutlinedButton startIcon={<AddIcon />}>{t('button.add')}</OutlinedButton>
    </form>
  );
};
