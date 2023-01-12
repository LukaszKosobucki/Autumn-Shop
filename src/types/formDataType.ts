export type formDataType = {
  name: string;
  pattern: RegExp;
  minLength: number;
  maxLength: number;
  required: boolean;
  error: string;
  disable: boolean;
};
