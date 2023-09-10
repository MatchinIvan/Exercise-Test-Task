import { useField } from 'formik';

export const useFormikField = (fieldName: string) => {
    const [field, meta, helpers] = useField(fieldName);
    return {
      field,
      meta,
      helpers,
    };
}
