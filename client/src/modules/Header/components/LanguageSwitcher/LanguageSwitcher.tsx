import { useTranslation } from 'react-i18next';
import { CustomSelect } from 'src/components/CustomSelect';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const options = [
    { value: 'en', label: 'EN' },
    { value: 'uk', label: 'UK' },
  ];

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  return (
    <CustomSelect
      options={options}
      defaultValue={localStorage.getItem('i18nextLng') || options[0].value}
      onSelect={changeLanguage}
      label="Lang"
    />
  );
};
