import { ChangeEvent } from 'react';
import styles from './filter-input.module.scss';

export interface FilterInputProps {
  disabled?: boolean;
  placeholder?: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function FilterInput({
  disabled,
  onChange,
  placeholder,
  label,
}: FilterInputProps) {
  return (
    <div className={styles.filterInput}>
      <label>{label}</label>
      <input
        disabled={disabled}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default FilterInput;
