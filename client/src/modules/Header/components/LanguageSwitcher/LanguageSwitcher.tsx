import { CustomSelect } from 'src/components/CustomSelect';

export const LanguageSwitcher = () => {
  const options = [
    { value: 'en', label: 'EN' },
    { value: 'uk', label: 'UK' },
  ];

  return <CustomSelect options={options} defaultValue={options[0]} />;
};
