import { KeyboardEventHandler } from "react";

export type formDataType = {
  name: string;
  pattern: RegExp;
  minLength: number;
  maxLength: number;
  required: boolean;
  error: string;
  disable: boolean;
  type: string;
  autocomplete?: string;
  onKeyDown?:
    | KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
};
