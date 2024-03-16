import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { CustomSelect } from 'src/components/CustomSelect';
import { ILangSwitchForm } from 'src/types/form/ILangSwitchForm';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const options = [
    { value: 'en', label: 'EN' },
    { value: 'uk', label: 'UK' },
  ];
  const { control, handleSubmit, watch, getValues } = useForm<ILangSwitchForm>({
    defaultValues: {
      lang: i18n.resolvedLanguage || options[0].value,
    },
  });

  const currentLang = watch('lang');

  const changeLanguage = useCallback(
    (data: ILangSwitchForm) => {
      i18n.changeLanguage(data.lang);
    },
    [i18n],
  );

  useEffect(() => {
    if (getValues('lang') !== i18n.resolvedLanguage) {
      handleSubmit(changeLanguage)();
    }
  }, [
    changeLanguage,
    currentLang,
    getValues,
    handleSubmit,
    i18n.resolvedLanguage,
  ]);

  return (
    <CustomSelect
      options={options}
      control={control}
      name="lang"
      label="Lang"
    />
  );
};
