import React from 'react';
import Select from 'react-select';
import './SelectCategory.scss';

export default function SelectCategory() {
  const options = [
    { value: 'Основной', label: 'Основной' },
    { value: 'Еда', label: 'Еда' },
    { value: 'Авто', label: 'Авто' },
    { value: 'Дети', label: 'Дети' },
    { value: 'Дом', label: 'Дом' },
    { value: 'Образование', label: 'Образование' },
    { value: 'Остальное', label: 'Остальное' },
  ];

  return (
    <>
      <Select
        placeholder="Выберите категорию"
        className="select"
        classNamePrefix="selectPrefix"
        options={options}
      />
    </>
  );
}
