import { useTranslation } from 'react-i18next';

const Employees = () => {
  const { t } = useTranslation();

  return <div>{t('employees')}</div>;
};

export default Employees;
