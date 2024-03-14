import { useTranslation } from 'react-i18next';
import { AddForm } from 'src/modules';

const Employees = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t('employees')}</div>
      <AddForm />
    </>
  );
};

export default Employees;
