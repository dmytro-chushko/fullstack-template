import { useTranslation } from 'react-i18next';

const Employee = () => {
  const { t } = useTranslation();

  return <div>{t('employee')}</div>;
};

export default Employee;
